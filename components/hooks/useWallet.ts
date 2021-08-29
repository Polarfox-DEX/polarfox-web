import { useEffect, useState } from "react";
import Web3 from "web3"

export enum ChainId {
    BSC_MAINNET = 56,
    BSC_TESTNET = 97
}

export interface Wallet {
    hasWallet: boolean
    walletErrorMessage: string
    userBalance: number
    connected: boolean
    chainId: ChainId | null
    accounts: string[]
    requestConnection: () => Promise<Web3|undefined>
}

let window_ : any;

export default function useWallet(chosenChainId: ChainId): Wallet {

    const [walletErrorMessage, setWalletErrorMessage] = useState("")

    const [hasWallet, setHasWallet] = useState(false)

    const [accounts, setAccounts] = useState<string[]>()
    const [userBalance, setUserBalance] = useState(0.0)

    const [connected, setConnected] = useState(false)
    const [chainId, setChainId] = useState(0)

    useEffect(() => {

        window_ = window;

        addListeners();

        //verify if metamask is present
        if (window_.ethereum) {
            setHasWallet(true)
        } else {
            setWalletErrorMessage("Metamask is not present on your web browser. Please download it and refresh the page.")
        }
    })

    async function requestConnection(): Promise<Web3|undefined>{

        var ret;

        if (hasWallet) {

            ret = new Promise<Web3>(async (resolve,reject) => {

                var web3: Web3 = new Web3(window_.ethereum)

                console.log(web3)

                //Verify user is connected to right network
                await window_.ethereum.request({ method: 'eth_chainId' })
                    .then(async (chainId: any) => {

                        if (web3?.utils.hexToNumber(chainId) == chosenChainId) {

                            await window_.ethereum.request({ method: 'eth_requestAccounts' })
                                .then(async (accounts: string[]) => {

                                    setAccounts(accounts)
                                    setConnected(true)

                                    await window_.ethereum.request({ method: 'eth_getBalance', params: [accounts[0]] })
                                        .then((balance: any) => {
                                            setUserBalance(parseFloat(web3.utils.fromWei(balance)))
                                            resolve(web3)
                                        })
                                        .catch(console.log)

                                })
                                .catch(console.log)

                        } else {
                            setWalletErrorMessage("You are connected to the wrong network. Please switch to the BSC mainnet.")
                        }
                    })
                    .catch(console.log)

            })

        }

        return ret;

    }

    function addListeners() {

        //Listener when chain change
        window_.ethereum.on('chainChanged', () => {
            document.location.reload()
        })

    }

    return {
        hasWallet,
        walletErrorMessage,
        accounts,
        userBalance,
        requestConnection,
        chainId,
        connected
    }

}