import { useCallback, useEffect, useState } from 'react'
import { ChainId } from '../blockchain/const'
import { privateSale } from '../blockchain/contracts/privateSale'
import { web3 } from '../blockchain/web3'
import { useWallet } from './useWallet'

export interface PrivateSale {
  currentBnbPrice: number
  isWhitelisted: boolean
  boughtAmount: number
  buyTokens: (amount: string, address: string) => void
}

export function usePrivateSale(): PrivateSale {
  const [currentBnbPrice, setCurrentBnbPrice] = useState<number>(0)
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false)
  const [boughtAmount, setBoughtAmount] = useState<number>(0)
  // TODO: If we want, we can have multiple error message fields
  const [errorMessage, setErrorMessage] = useState<string>('')

  const { hasWallet, connected, chainId, accounts, gasPrice } = useWallet()

  useEffect(() => {
    // If the network is correct
    if (chainId != null && (chainId == ChainId.BSC || chainId == ChainId.BSC_TESTNET)) {
      // Get the current BNB price from the private sale contract
      privateSale(chainId)
        .methods.currentBnbPrice()
        .call()
        .then((bnbPrice: number) => setCurrentBnbPrice(bnbPrice))

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

      // If the network is incorrect
      // ...
    }

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
  }, [hasWallet, connected, chainId, accounts])

  async function buyTokens(amount: string, address: string) {
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
          .then((data: any) => {
            console.log(data)
          })
          .catch((error: any) => {
            console.log(error)
          })
      } catch (error) {
        // TODO: Display the error message
        console.log('An error occurred in buyTokens():', error)
      }
    } else {
      // TODO: Print an error message
    }
  }

  return {
    currentBnbPrice,
    isWhitelisted,
    boughtAmount,
    buyTokens
  }
}
