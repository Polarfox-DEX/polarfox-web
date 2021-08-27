import React from 'react'
import { Page } from '../components/Page'
import { PrivateSalePanel } from '../components/private-sale/PrivateSalePanel'
import { PrivateSaleTutorial } from '../components/private-sale/PrivateSaleTutorial'

export default function PrivateSale() {
  return (
    <Page>
      <PrivateSalePanel className="mt-64" />
      <PrivateSaleTutorial className="mt-24" />
    </Page>
  )
}
