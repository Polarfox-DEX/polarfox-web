export enum ChainId {
  BSC = 56,
  BSC_TESTNET = 97,
  AVALANCHE = 43114,
  FUJI = 43113
}

export const CHAIN_NAME: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: 'Ethereum',
  [ChainId.BSC_TESTNET]: 'Goerli',
  [ChainId.AVALANCHE]: 'Goerli',
  [ChainId.FUJI]: 'Goerli'
}

export const PROVIDER: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
  [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc'
}

// TODO: Do we need this?
export const NetworkContextName = 'NETWORK'
