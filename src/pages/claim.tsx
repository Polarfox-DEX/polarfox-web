import React from 'react'
import { Page } from '../components/Page'
import { ClaimSalePanel } from '../components/claim-sale/ClaimSalePanel'
import { ClaimSaleTutorial } from '../components/claim-sale/ClaimSaleTutorial'

export default function ClaimSale() {
  return (
    <Page>
      <ClaimSalePanel className="mt-32 laptop:mt-12" />
      <ClaimSaleTutorial className="mt-20" />
    </Page>
  )
}