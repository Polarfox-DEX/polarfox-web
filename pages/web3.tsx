import { useEffect, useState } from "react"
import Web3 from 'web3'

const mainnetChainID = 56 //Binance Smart Chain Mainnet ID
const testnetChainID = 97
const bscMainnetURL = "https://bsc-dataseed1.binance.org:443"
const bscTestnetURL = "https://bsc-dataseed1.binance.org:443"

var web3 = new Web3(bscTestnetURL);

const { abi } = require('../../polarfox-presale/build/PolarfoxTokenSale.json');
const contractAddress = "0x042999BE6E7a7D8bcDfedeC473D77DC0dd83857a"
let contract = new web3.eth.Contract(abi,contractAddress)


export default function web3App(){

    const[address,setAddress] = useState("");
    const[isLoading,setIsLoading] = useState(false)

    const[totalValue,setTotalValue] = useState(0)
    const[currentLevel,setCurrentLevel] = useState(0)
    const[totalCurrentLevel,setTotalCurrentLevel] = useState(0)

    useEffect(() => {

        //initialize App
        getContratInfo();
        addEventListeners();

    })

    //Connect website to user's metamask and get address
    var connect = async (): Promise<void> => {

        if(ethereum != undefined){

            await ethereum.request({ method: 'eth_chainId' })
                .then(async (userChainID: string) => {

                    if(web3.utils.hexToNumber(userChainID) == mainnetChainID || 
                        web3.utils.hexToNumber(userChainID) == testnetChainID){
        
                        await ethereum.request({ method: 'eth_requestAccounts' })
                            .then((accounts: string[]) => {

                                const account = accounts[0]
                                console.log(account)
                                setAddress(account)

                            }).catch((err) => {
                                console.log(err)
                            })
                        
                    }else{
                        alert('Change network to Binance Smart Chain')
                    }

                }).catch((error) => {
                    console.log(error)
                })

        }else{
            alert("You don't have metamask")
        }

    }

    var buy = () => {

    }

    var getContratInfo = async (): Promise<void> => {

        setIsLoading(true)

        //total of Presale
        //total of current level
        //current level
        //

        //can buy




    }

    var addEventListeners = () => {

        ethereum.on('chainChanged', (chainId) => {
            //reload application when chain is changed
            window.location.reload();
        });

    }

    return(
        <div>
            <button onClick={() => connect()}>Connect</button>
            <br/>
            <label>{address}</label>

            <hr/>

            <label>{totalValue}$</label><br/>
            <label>Current level: {currentLevel}/120</label><br/>
            <label>{totalCurrentLevel}$</label><br/>

            <hr/>

            <button onClick={() => buy()}>Buy</button>
        </div>
    )

}

