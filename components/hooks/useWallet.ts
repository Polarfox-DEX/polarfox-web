import { useEffect, useState } from "react";
import Web3 from "web3"

export enum ChainId{
    BSC_MAINNET = 56,
    BSC_TESTNET = 97
}

export interface Wallet {
    hasWallet: boolean
    errorMessage: string
    web3: Web3 | null | undefined
    userBalance: number
    connected: boolean
    chainId: ChainId | null
    accounts: string[]
    requestConnection: () => void
}

export default function useWallet(choosenChainId: ChainId): Wallet{

    const[errorMessage,setErrorMessage] = useState("")

    const[hasWallet,setHasWallet] = useState(false)
    const[web3,setWeb3] = useState<Web3>()

    const[accounts,setAccounts] = useState<string[]>([])
    const[userBalance, setUserBalance] = useState(0.0)

    const[connected,setConnected] = useState(false)
    const[chainId,setChainId] = useState(0)

    useEffect(() => {
        //verify if metamask is present
        if(window.ethereum){
            setHasWallet(true)
        }else{
            setErrorMessage("Metamask is not present on your web browser. Please downlaod it and refresh the page.")
        }
    })

    async function requestConnection(){

        if(hasWallet){

            var web3 = new Web3(window.ethereum)

            setWeb3(web3)

            //Verify user is connected to right network
            await window.ethereum.request({ method: 'eth_chainId' })
                .then(async (chainId: any) => {

                    if(web3.utils.hexToNumber(chainId) == choosenChainId){

                        await window.ethereum.request({ method: 'eth_requestAccounts' })
                            .then(async (accounts: string[]) => {

                                setAccounts(accounts)
                                setConnected(true)
                                await window.ethereum.request({method: 'eth_getBalance', params:[accounts[0]]})
                                    .then((balance: any) => setUserBalance(parseFloat(web3.utils.fromWei(balance))))
                                    .catch(console.log)

                            }).catch(console.log)

                    }else{
                        setErrorMessage("Your are connected to the wrong network. Please change.")
                    }
                }).catch(console.log)
        }

    }

    function addListeners(){

        //Listener on chain

    }

    return{
        hasWallet,
        errorMessage,
        web3,
        accounts,
        userBalance,
        requestConnection,
        chainId,
        connected
    }

}