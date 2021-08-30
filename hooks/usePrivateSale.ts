import { useEffect, useState } from 'react'
import { ChainId } from '../blockchain/const'
import { privateSale } from '../blockchain/contracts/privateSale'
import { web3 } from '../blockchain/web3'
import { useWallet } from './useWallet'

export interface PrivateSale {
  correctNetwork: boolean
  currentBnbPrice: number
  isWhitelisted: boolean
  remaining: number
  boughtAmount: number
  buyTokens: (amount: string, address: string) => Promise<any>
  setJustBought: (justBought: boolean) => void
}

export function usePrivateSale(): PrivateSale {
  const [correctNetwork, setCorrectNetwork] = useState<boolean>(false)
  const [currentBnbPrice, setCurrentBnbPrice] = useState<number>(0)
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false)
  const [remaining, setRemaining] = useState<number>(1000000)
  const [boughtAmount, setBoughtAmount] = useState<number>(0)
  const [lastChainId, setLastChainId] = useState<number | null>(null)
  const [justBought, setJustBought] = useState<boolean>(false) // Here so we can go through the useEffect below at will

  const { hasWallet, connected, chainId, accounts, gasPrice } = useWallet()

  useEffect(() => {
    // See if the chainId is correct
    setCorrectNetwork(isGoodChainId(chainId))

    // If the chainId changed
    if (chainId !== lastChainId) {
      // If the last chainId was null, do nothing
      if (lastChainId != null) {
        // If it changed from a good chainId to a bad chainId
        if (isGoodChainId(lastChainId) && !isGoodChainId(chainId)) {
          // Refresh the page
          // TODO: Eventually find a better solution
          window.location.reload()
        }

        // If it changed from a good chainId to a good chainId
        else if (isGoodChainId(lastChainId) && isGoodChainId(chainId)) {
          // TODO
        }
      }

      // Update the last chainId
      setLastChainId(chainId)
    }

    // If the network is correct
    if (chainId != null && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)) {
      // Get the current BNB price from the private sale contract
      privateSale(chainId)
        .methods.currentBnbPrice()
        .call()
        .then((bnbPrice: number) => setCurrentBnbPrice(bnbPrice))

      // Get remaining amount of USD in the presale
      getSoldAmount(chainId)

      // Register to 'Sold' event of contract and compute remaining value when event is thrown
      privateSale(chainId).events.Sold({ fromBlock: 'latest' }, getSoldAmount(chainId))

      // If the user has connected his wallet to the application
      if (connected) {
        // See if the connected address is whitelisted
        privateSale(chainId)
          .methods.isWhitelisted(accounts[0])
          .call()
          .then((isWhitelisted: boolean) => setIsWhitelisted(isWhitelisted))

        // TODO: Need to execute this code every time the user buys in the presale
        // Calculate the total bought amount
        getBoughtAmount(accounts[0])
      }
    }

    // Set the justBought variable to false if needed
    if (justBought) setJustBought(false)

    async function getBoughtAmount(address: string) {
      if (chainId != null && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)) {
        // Check if the user has bought in the presale
        const hasBought = await privateSale(chainId).methods.hasBought(address).call()

        // The user has bought
        if (hasBought) {
          // Get the number of transactions the user has made
          const numberOfTransactions = await privateSale(chainId)
            .methods.numberOfTransactionsForReceivingAddress(address)
            .call()

          // Iterate through all transactions and sum

          // Create a list of external calls to make
          const transactions = await Promise.all(
            Array.from(Array(parseInt(numberOfTransactions)).keys()).map((index) => {
              return privateSale(chainId).methods.transactionsForReceivingAddress(address, index).call()
            })
          )

          // Sum the amounts from all the transactions this address has made
          const totalAmount = transactions
            .map((transaction) => {
              return parseFloat(web3.utils.fromWei(transaction.boughtAmount))
            })
            .reduce((a, b) => a + b)

          setBoughtAmount(totalAmount)
        }

        // The user has not bought: set the bought amount to 0
        else {
          setBoughtAmount(0)
        }
      }
    }
  }, [correctNetwork, hasWallet, connected, chainId, accounts, lastChainId, justBought])

  async function buyTokens(amount: string, address: string): Promise<boolean>{
    // If the network is correct and the user is connected and whitelisted
    if (chainId != null && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET) && connected && isWhitelisted) {
      const amountInWei = web3.utils.toWei(amount)

      try {
        // TODO: Try without gas price
        await privateSale(chainId)
          .methods.buyTokens()
          .send({
            from: address,
            value: amountInWei,
            gasPrice: gasPrice
          })

        // The transaction was successful
        return true
      } catch (error) {
        // TODO: Display the error message
        console.error('An error occurred in buyTokens():', error)
      }
    } else {
      // TODO: Print an error message
    }

    // The transaction failed
    return false
  }

  // async function buyTokens(amount: string, address: string){
  //   // If the network is correct and the user is connected and whitelisted
  //   if (chainId != null && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET) && connected && isWhitelisted) {
  //     const amountInWei = web3.utils.toWei(amount)

  //     try {
  //       // TODO: Try without gas price
  //       await privateSale(chainId)
  //         .methods.buyTokens()
  //         .send({
  //           from: address,
  //           value: amountInWei,
  //           gasPrice: gasPrice
  //         })
  //         .then((data: any) => {
  //           console.log(data)
  //         })
  //         .catch((error: any) => {
  //           console.log(error)
  //         })
  //     } catch (error) {
  //       // TODO: Display the error message
  //       console.log('An error occurred in buyTokens():', error)
  //     }
  //   } else {
  //     // TODO: Print an error message
  //   }
  // }

  async function getSoldAmount(chainId: ChainId) {
    await privateSale(chainId)
      .methods.soldAmount()
      .call()
      .then((soldAmount: string) => setRemaining(1000000 - parseFloat(web3.utils.fromWei(soldAmount))))
  }

  return {
    correctNetwork,
    currentBnbPrice,
    isWhitelisted,
    remaining,
    boughtAmount,
    buyTokens,
    setJustBought
  }
}

// Returns true if the chainId is BSC or BSC testnet, false otherwise
function isGoodChainId(chainId: number | null): boolean {
  return chainId != null && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)
}
