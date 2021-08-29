import { useCallback, useEffect, useState } from 'react'
import { ChainId } from '../blockchain/const'
import { privateSale } from '../blockchain/contracts/privateSale'
import { web3 } from '../blockchain/web3'
import { useInterval } from './useInterval'
import { useWallet } from './useWallet'

export interface PrivateSale {
  currentBnbPrice: number
  isWhitelisted: boolean
  remaining: number
  buyTokens: (amount: string, address: string) => void
}

export function usePrivateSale(): PrivateSale {
  const [currentBnbPrice, setCurrentBnbPrice] = useState<number>(0)
  const [isWhitelisted, setIsWhitelisted] = useState<boolean>(false)
  const [remaining, setRemaining] = useState<number>(0)
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

      // Get remaining amount of USD in the presale
      getSoldAmount(chainId)

      // Register to 'Sold' event of contract and compute remaining value when event is thrown 
      privateSale(chainId).events.Sold({ fromBlock: 'latest' }, getSoldAmount(chainId))

      // privateSale(chainId)
      //   .methods.
      //   .call()
      //   .then(() => )

      // If the user has a wallet
      if (hasWallet) {
        // ...
      }

      // If the user has connected his wallet to the application
      if (connected) {
        // See if the connected address is whitelisted
        privateSale(chainId)
          .methods.isWhitelisted(accounts[0])
          .call()
          .then((isWhitelisted: boolean) => setIsWhitelisted(isWhitelisted))
      }

      // If the network is incorrect
      // ...
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

  async function getSoldAmount(chainId: ChainId) {
    await privateSale(chainId)
      .methods.soldAmount()
      .call()
      .then((soldAmount: string) => setRemaining(1000000 - parseFloat(web3.utils.fromWei(soldAmount))))
  }

  return {
    currentBnbPrice,
    isWhitelisted,
    remaining,
    buyTokens
  }
}
