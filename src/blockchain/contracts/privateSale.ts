import { web3 } from '../web3'
import { AbiItem } from 'web3-utils'
import { ChainId } from '../const'
import PolarfoxPrivateSale from '@polarfox/presale/artifacts/contracts/PolarfoxPrivateSale.sol/PolarfoxPrivateSale.json'

export const PRIVATE_SALE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: '0x56afC3bF81250951d8B96bea3AdFd8926Cad7E38',
  [ChainId.BSC_TESTNET]: '0x1D6e213bEB84f351eAA3354AE2F63Dc87A205953',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: ''
}

export function privateSale(chainId: ChainId) {
  return new web3.eth.Contract(PolarfoxPrivateSale.abi as AbiItem[], PRIVATE_SALE_ADDRESS[chainId])
}
