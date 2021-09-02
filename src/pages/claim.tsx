import React from 'react'
import { Page } from '../components/Page'
import { ClaimPanel } from '../components/claim/ClaimPanel'
import { ClaimTutorial } from '../components/claim/ClaimTutorial'

export default function ClaimSale() {
  return (
    <Page>
      <ClaimPanel className="mt-32 laptop:mt-12" />
      <ClaimTutorial className="mt-20" />
    </Page>
  )
}