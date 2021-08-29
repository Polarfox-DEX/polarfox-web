import { web3 } from '../web3'
import { AbiItem } from 'web3-utils'
import { ChainId } from '../const'
import * as PolarfoxPrivateSale from '@polarfox/presale/artifacts/contracts/PolarfoxPrivateSale.sol/PolarfoxPrivateSale.json'

export const PRIVATE_SALE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '0x4Cd53bC4D513ab94639C5897fbE967EF65e27d6A',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: ''
}

export function privateSale(chainId: ChainId) {
  return new web3.eth.Contract(PolarfoxPrivateSale.abi as AbiItem[], PRIVATE_SALE_ADDRESS[chainId])
}
