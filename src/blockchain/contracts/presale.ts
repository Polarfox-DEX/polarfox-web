import { web3 } from '../web3'
import { AbiItem } from 'web3-utils'
import { ChainId } from '../const'
import * as PolarfoxTokenSale from '@polarfox/presale/artifacts/contracts/PolarfoxTokenSale.sol/PolarfoxTokenSale.json'

export const PRESALE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: ''
}

export function getPolarfoxTokenSaleContract(chainId: ChainId) {
  return new web3.eth.Contract(PolarfoxTokenSale.abi as AbiItem[], PRESALE_ADDRESS[chainId])
}
