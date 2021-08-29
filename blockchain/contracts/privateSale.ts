import { web3 } from '../web3'
import { AbiItem } from 'web3-utils'
import { ChainId } from '../const'
import * as PolarfoxPrivateSale from '@polarfox/presale/artifacts/contracts/PolarfoxPrivateSale.sol/PolarfoxPrivateSale.json'

export const PRIVATE_SALE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '0xaB95cA45D1c5D1E2657481F97096AEFDb2128b91',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: ''
}

export function privateSale(chainId: ChainId) {
  return new web3.eth.Contract(PolarfoxPrivateSale.abi as AbiItem[], PRIVATE_SALE_ADDRESS[chainId])
}
