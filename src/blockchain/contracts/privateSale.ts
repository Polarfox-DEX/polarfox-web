import { web3 } from '../web3'
import { AbiItem } from 'web3-utils'
import { ChainId } from '../const'
import PolarfoxPrivateSale from '@polarfox/presale/artifacts/contracts/PolarfoxPrivateSale.sol/PolarfoxPrivateSale.json'

export const PRIVATE_SALE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '0x5CF90C96142E2d1efd300A687ee6259c59fA3503',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: ''
}

export function privateSale(chainId: ChainId) {
  return new web3.eth.Contract(PolarfoxPrivateSale.abi as AbiItem[], PRIVATE_SALE_ADDRESS[chainId])
}
