import React, { useEffect, useState } from "react"
import Web3 from 'web3';
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
    const[totalSoldInBNB,setTotalSoldInBNB] = useState(0)

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
        window.ethereum.request({method: 'eth_getBalance', params: [contractAddress]}).then((balance: string) => setTotalSoldInBNB(parseFloat(web3.utils.fromWei(balance))))

        addEventsListener()

    }

    var buy = async () => {

        const BNBvalueInWei = web3.utils.toWei(userAllocation)

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

        const levelPrice: number[][] = [
            [100000, 1.8],[100000, 1.89],[100000, 1.98],[100000, 2.07],[100000, 2.16],[100000, 2.25],[100000, 2.34],[100000, 2.43],[100000, 2.52],[100000, 2.61],[100000, 2.7],
            [100000, 2.79],[100000, 2.88],[100000, 2.97],[100000, 3.06],[100000, 3.15],[100000, 3.24],[100000, 3.33],[100000, 3.42],[100000, 3.51],[100000, 3.6],[100000, 3.69],
            [250000, 3.78],[250000, 3.87],[250000, 3.96],[250000, 4.05],[250000, 4.14],[250000, 4.23],[250000, 4.32],[250000, 4.41],[250000, 4.5],[250000, 4.59],[250000, 4.68],
            [250000, 4.77],[250000, 4.86],[250000, 4.95],[250000, 5.04],[250000, 5.13],[250000, 5.22],[250000, 5.31],[250000, 5.4],[250000, 5.49],[250000, 5.58],[250000, 5.67],
            [250000, 5.76],[250000, 5.85],[250000, 5.94],[250000, 6.03],[250000, 6.12],[250000, 6.21],[250000, 6.3],[250000, 6.39],[500000, 6.48],[500000, 6.57],[500000, 6.66],
            [500000, 6.75],[500000, 6.84],[500000, 6.93],[500000, 7.02],[500000, 7.11],[500000, 7.2],[500000, 7.29],[500000, 7.38],[500000, 7.47],[500000, 7.56],[500000, 7.65],
            [500000, 7.74],[500000, 7.83],[500000, 7.92],[500000, 8.01],[500000, 8.1],[500000, 8.19],[500000, 8.28],[500000, 8.37],[500000, 8.46],[500000, 8.55],[500000, 8.64],
            [500000, 8.73],[500000, 8.82],[500000, 8.91],[500000, 9],[500000, 9.09],[500000, 9.18],[500000, 9.27],[500000, 9.36],[500000, 9.45],[500000, 9.54],[500000, 9.63],
            [500000, 9.72],[500000, 9.81],[500000, 9.9],[500000, 9.99],[535714, 10.8],[570796, 11.61],[1210526, 12.42],[1278260, 13.23],[1344827, 14.04],[1410256, 14.85],
            [1559322, 16.56],[2764446, 17.37],[1057142.26, 18],[1189285.04, 20.25],[1294999.26, 22.05],[1379570.64, 23.49],[2156570.20, 24.48],[2227927.30, 25.29],[2299284.40, 26.1],
            [2378570.07, 27],[2457855.74, 27.9],[2537141.41, 28.8],[2616427.08, 29.7],[2695712.75, 30.6],[2774998.42, 31.5],[2854284.09, 32.4],[2933569.76, 33.3],[3012855.43, 34.2],
            [3092141.10, 35.1],[3171426.77, 36],[3250712.43, 36.9],[3330031.42, 37.8]
        ];

        return levelPrice[level]

    }

    var addEventsListener = () => {

        /* 
        polarfoxTokenSaleContract.events.Sold().on('data', (data: any) => {

            console.log(data)

        })
        */

    }

    return(
        <Page>
            <div className="container mt-24">
                <button onClick={() => connect()}>Connect</button>
                <br/>
                <label>{address}</label>

                <hr/>

                <label>Sold total: {totalSoldInBNB*bnbUsdPrice}$</label>
                <br/>

                <label>Current level: {currentLevel+1}/120</label><br/>
                <label>PFX level price: {getLevelPrice(currentLevel)[1]}</label><br/>
                <label>Level Progression: {currentLevelSoldAmountUsd}/{getLevelPrice(currentLevel)[0]}$</label><br/>

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

