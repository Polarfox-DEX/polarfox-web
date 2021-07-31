import classNames from 'classnames'
import { FaqSelector } from './FaqSelector'
import { FaqContact } from './FaqContact'
import { FaqPolarfox } from './FaqPolarfox'
import { FaqPfxToken } from './FaqPfxToken'
import { FaqAkitaInu } from './FaqAkitaInu'
import { FaqAvalanche } from './FaqAvalanche'
import { SectionProps } from '../sections/utils/SectionProps'
import React, { useState } from 'react'

export function FaqMain({ className }: SectionProps) {
  const [selectedFaq, setSelectedFaq] = useState('POLARFOX')

  return (
    <div
      className={classNames(
        'container flex desktop:space-x-24 w-full flex-col desktop:flex-row',
        className
      )}
    >
      <div className="flex flex-col desktop:flex-row w-full">
        <div>
          <FaqSelector
            selectedFaq={selectedFaq}
            setSelectedFaq={setSelectedFaq}
          />
          <FaqContact className="hidden desktop:block mt-80" />
        </div>
        <FaqPolarfox
          className={classNames('mt-8 desktop:mt-32 desktop:pl-44', {
            hidden: selectedFaq !== 'POLARFOX'
          })}
        />
        <FaqPfxToken
          className={classNames('mt-8 desktop:mt-32 desktop:pl-44', {
            hidden: selectedFaq !== 'PFX_TOKEN'
          })}
        />
        <FaqAvalanche
          className={classNames('mt-8 desktop:mt-32 desktop:pl-44', {
            hidden: selectedFaq !== 'AVALANCHE'
          })}
        />
        <FaqAkitaInu
          className={classNames('mt-8 desktop:mt-32 desktop:pl-44', {
            hidden: selectedFaq !== 'AKITA_INU'
          })}
        />
      </div>
      <FaqContact className="desktop:hidden mt-12" />
    </div>
  )
}
