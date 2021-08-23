import React, { useEffect, useState } from "react"
import Web3 from 'web3';
import { utils } from 'web3'
import { Page } from '../components/Page'

export enum ChaindId{
    BSC_MAINNET = 56,
    BSC_TESTNET = 97
}

const { abi } = require('../../polarfox-presale/artifacts/contracts/PolarfoxTokenSale.sol/PolarfoxTokenSale.json');
const contractAddress = "0x765547f8CeCad11fa122C61Fca1bc7e79b062336"

declare let window: any;

var web3: Web3;
var polarfoxTokenSaleContract: any;

export default function PresaleWeb3App(){

    const[isLoading,setIsLoading] = useState(false)

    const[address,setAddress] = useState("");
    const[connected,setConnected] = useState(false)
    const[userBalance,setUserBalance] = useState("")

    const[userAllocation,setUserAllocation] = useState('')
    const[PFXtoReceive,setPFXtoReceive] = useState(0)
    const[referrerAddress,setReferrerAddress] = useState('')

    const[currentLevelSoldAmountUsd,setCurrentLevelSoldAmountUsd] = useState(0)
    const[currentLevel,setCurrentLevel] = useState(0)
    const[bnbUsdPrice,setBnbUsdPrice] = useState(0)

    //Connect website to user's metamask and get address
    var connect = async (): Promise<void> => {

        //Verify user has metamask
        if(window.ethereum != undefined){

            web3 = new Web3(window.ethereum)

            initializePresaleContract();
            
            await window.ethereum.request({ method: 'eth_chainId' })
                .then(async (userChainID: string) => {

                    //Verify if metamask is connected to BSC
                    if(web3.utils.hexToNumber(userChainID) == ChaindId.BSC_TESTNET || web3.utils.hexToNumber(userChainID) == ChaindId.BSC_MAINNET){

                        //Request wallet connexion
                        await window.ethereum.request({ method: 'eth_requestAccounts' })
                            .then(async (accounts: string[]) => {

                                setAddress(accounts[0])

                                //Request user wallet's balance
                                await window.ethereum.request({method: 'eth_getBalance', params:[accounts[0]]})
                                    .then((userBalance: number) => {

                                        setUserBalance(web3.utils.fromWei(userBalance.toString()))
                                        setConnected(true)

                                    }).catch((err: any) => {
                                        console.log(err)
                                    })

                            }).catch((err: any) => {
                                console.log(err)
                            })
                        
                    }else{
                        alert('Change network to Binance Smart Chain')
                    }

                }).catch((error: any) => {
                    console.log(error)
                })

        }else{
            alert("You don't have metamask")
        }

    }

    var initializePresaleContract = () => {

        polarfoxTokenSaleContract = new web3.eth.Contract(abi,contractAddress)
        
        polarfoxTokenSaleContract.methods.currentLevel().call().then((currentLevel: number) => setCurrentLevel(currentLevel))
        polarfoxTokenSaleContract.methods.currentSoldAmountUsd().call().then((currentLevelSoldAmountUsd: number) => 
            setCurrentLevelSoldAmountUsd(parseFloat(web3.utils.fromWei(currentLevelSoldAmountUsd.toString())))
        )
        polarfoxTokenSaleContract.methods.currentBnbPrice().call().then((bnbPrice: number) => setBnbUsdPrice(bnbPrice))

    }

    var buy = async () => {

        const BNBvalueInWei = utils.toWei(userAllocation)

        window.ethereum.request({method: 'eth_gasPrice', params: []}).then(async (gasFees: number) => {

            console.log(polarfoxTokenSaleContract)

            await polarfoxTokenSaleContract.methods.buyTokens().send({

                from: address,
                value: BNBvalueInWei,
                gasPrice: gasFees
    
            }).then((data: any) => {
                console.log(data)
            }).catch((error: any) => {
                console.log(error)
            })

        })

    }

    var userAllocationChange = async (value: string) => {

        setUserAllocation(value.replace(",","."));
        setPFXtoReceive((parseFloat(value)*bnbUsdPrice)/getLevelPrice(currentLevel))

    }

    var setMaxAllocation = () => {

        setUserAllocation(userBalance.toString());
        userAllocationChange(userBalance.toString());
    }

    var getLevelPrice = (level: number) => {

        const levelPrice: number[] = [
            1.8, 1.89, 1.98, 2.07, 2.16, 2.25, 2.34, 2.43, 2.52, 2.61,
            2.7, 2.79, 2.88, 2.97, 3.06, 3.15, 3.24, 3.33, 3.42, 3.51,
            3.6, 3.69, 3.78, 3.87, 3.96, 4.05, 4.14, 4.23, 4.32, 4.41,
            4.5, 4.59, 4.68, 4.77, 4.86, 4.95, 5.04, 5.13, 5.22, 5.31,
            5.4, 5.49, 5.58, 5.67, 5.76, 5.85, 5.94, 6.03, 6.12, 6.21,
            6.3, 6.39, 6.48, 6.57, 6.66, 6.75, 6.84, 6.93, 7.02, 7.11,
            7.2, 7.29, 7.38, 7.47, 7.56, 7.65, 7.74, 7.83, 7.92, 8.01,
            8.1, 8.19, 8.28, 8.37, 8.46, 8.55, 8.64, 8.73, 8.82, 8.91,
            9, 9.09, 9.18, 9.27, 9.36, 9.45, 9.54, 9.63, 9.72, 9.81,
            9.9, 9.99, 10.8, 11.61, 12.42, 13.23, 14.04, 14.85, 16.56, 17.37,
            18, 20.25, 22.05, 23.49, 24.48, 25.29, 26.1, 27, 27.9, 28.8,
            29.7, 30.6, 31.5, 32.4, 33.3, 34.2, 35.1, 36, 36.9, 37.8
        ];

        return levelPrice[level]

    }

    return(
        <Page>
            <div className="container mt-24">
                <button onClick={() => connect()}>Connect</button>
                <br/>
                <label>{address}</label>

                <hr/>

                <label>Current level: {currentLevel+1}/120</label><br/>
                <label>PFX level price: {getLevelPrice(currentLevel)}$</label><br/>
                <label>Level Progression: {currentLevelSoldAmountUsd}$</label><br/>

                <hr/>

                <label>{userBalance} BNB </label>
                <button className="border-2 border-blue-50 disabled:bg-blue disabled:text-white bg-white text-blue" disabled={ !connected } onClick={() => setMaxAllocation()}> 
                    MAX
                </button><br/>

                <label>Value in BNB </label>
                <input disabled={ !connected } value={userAllocation} onChange={(event) => userAllocationChange(event.currentTarget.value)}></input> {` <=> ~`}
                <label>{PFXtoReceive}PFX</label><br/>

                <label>Referred Address (optional) </label>
                <input onChange={(event) => setReferrerAddress(event.currentTarget.value)}></input>
                <br/>

                <button 
                 className="border-2 border-blue-50 disabled:bg-blue disabled:text-white bg-white text-blue" onClick={() => buy()}
                 disabled={ !connected || userAllocation === "" || userAllocation === "0" }
                >
                    Buy
                </button>

            </div>
        </Page>
        
    )

}

