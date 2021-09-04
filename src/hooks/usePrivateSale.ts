import { useEffect, useState } from 'react'
import { ChainId } from '../blockchain/const'
import { privateSale } from '../blockchain/contracts/privateSale'
import { web3 } from '../blockchain/web3'
import { useWallet } from './useWallet'

export interface PrivateSale {
  isSaleActive: boolean
  correctNetwork: boolean
  currentBnbPrice: number
  isWhitelisted: boolean
  remaining: number
  boughtAmount: number
  buyTokens: (amount: string, buyer: string, recipient?: string) => Promise<string>
  setJustBought: (justBought: boolean) => void
}

export function usePrivateSale(): PrivateSale {
  const [isSaleActive, setIsSaleActive] = useState<boolean>(true)
  const [correctNetwork, setCorrectNetwork] = useState<boolean>(true)
  const [currentBnbPrice, setCurrentBnbPrice] = useState<number>(0)
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(true)
  const [remaining, setRemaining] = useState<number>(1000000)
  const [boughtAmount, setBoughtAmount] = useState<number>(0)
  const [lastChainId, setLastChainId] = useState<number | null>(null)
  const [justBought, setJustBought] = useState<boolean>(false) // Here so we can go through the useEffect below at will

  const { hasWallet, connected, chainId, accounts, gasPrice } = useWallet()

  useEffect(() => {
    // See if the chainId is correct (if it is defined)
    setCorrectNetwork(!chainId || chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)

    // If the chainId changed
    if (chainId !== lastChainId) {
      // If the last chainId was null, do nothing
      if (lastChainId) {
        // If it changed from a good chainId to a bad chainId
        if (isGoodChainId(lastChainId) && !isGoodChainId(chainId)) {
          // Refresh the page
          window.location.reload()
        }

        // If it changed from a good chainId to a good chainId
        else if (isGoodChainId(lastChainId) && isGoodChainId(chainId)) {
          // Refresh the page
          window.location.reload()
        }
      }

      // Update the last chainId
      setLastChainId(chainId)
    }

    // If the network is correct
    if (chainId && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)) {
      // Get the current BNB price from the private sale contract
      privateSale(chainId)
        .methods.currentBnbPrice()
        .call()
        .then((bnbPrice: number) => setCurrentBnbPrice(bnbPrice))

      // Check if the sale is active or not
      privateSale(chainId)
        .methods.isSaleActive()
        .call()
        .then((isSaleActive: boolean) => setIsSaleActive(isSaleActive))

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

        // Calculate the total bought amount
        getBoughtAmount(accounts[0])
      }
    }

    // Set the justBought variable to false if needed
    if (justBought) setJustBought(false)

    async function getBoughtAmount(address: string) {
      if (chainId && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)) {
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

  async function buyTokens(amount: string, buyer: string, recipient?: string): Promise<string> {
    // If the network is correct and the user is connected and whitelisted
    if (chainId && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET) && connected && isWhitelisted && isSaleActive) {
      const amountInWei = web3.utils.toWei(amount)

      try {
        // Buy for another address
        if (recipient) {
          await privateSale(chainId).methods.buyTokens(recipient).send({
            from: buyer,
            value: amountInWei,
            gasPrice: gasPrice
          })
        }

        // Buy for self
        else {
          await privateSale(chainId).methods.buyTokens().send({
            from: buyer,
            value: amountInWei,
            gasPrice: gasPrice
          })
        }

        // The transaction was successful
        return ''
      } catch (error) {
        console.error('An error occurred in buyTokens():', error)
        return error.message
      }
    }

    // The transaction failed
    return 'Conditions for buying are not met'
  }

  async function getSoldAmount(chainId: ChainId) {
    await privateSale(chainId)
      .methods.soldAmount()
      .call()
      .then((soldAmount: string) => setRemaining(1000001 - parseFloat(web3.utils.fromWei(soldAmount))))
  }

  return {
    isSaleActive,
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
  return chainId !== null && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)
}
