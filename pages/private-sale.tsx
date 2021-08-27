import React from "react";
import { Page } from "../components/Page";
import PrivateSaleInterface from "../components/private-sale/PrivateSaleInterface";

export default function PrivateSale(){
    return(
        <Page>
            <div 
                className="container grid mt-24"
                style={{
                    gridTemplateColumns: "1.3fr 0.6fr 1fr"
                }}
            >
                <div>texte</div>
                <div>vide</div>
                <PrivateSaleInterface className="text-white bg-blue rounded-3xl"/>
            </div>
        </Page>
    )
}