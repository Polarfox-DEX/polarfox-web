import classNames from 'classnames'
import { FaqSelector } from './FaqSelector'
import { FaqContact } from './FaqContact'
import { FaqPolarfox } from './FaqPolarfox'
import { FaqPfxToken } from './FaqPfxToken'
import { FaqPresale } from './FaqPresale'
import { FaqAvalanche } from './FaqAvalanche'
import { FaqAkitaInu } from './FaqAkitaInu'
import { SectionProps } from '../sections/utils/SectionProps'
import React, { useState } from 'react'

export function FaqMain({ className }: SectionProps) {
  const [selectedFaq, setSelectedFaq] = useState('POLARFOX')

  return (
    <div
      className={classNames(
        'container flex w-full flex-col laptop:flex-row',
        className
      )}
    >
      <div className="flex flex-col laptop:flex-row w-full">
        <div>
          <FaqSelector
            selectedFaq={selectedFaq}
            setSelectedFaq={setSelectedFaq}
          />
          <FaqContact className="hidden laptop:block mt-32" />
        </div>
        <FaqPolarfox
          className={classNames(
            'mt-8 laptop:mt-32 laptop:pl-20 desktop:pl-44',
            {
              hidden: selectedFaq !== 'POLARFOX'
            }
          )}
        />
        <FaqPfxToken
          className={classNames(
            'mt-8 laptop:mt-32 laptop:pl-20 desktop:pl-44',
            {
              hidden: selectedFaq !== 'PFX_TOKEN'
            }
          )}
        />
        {/* <FaqPresale
          className={classNames(
            'mt-8 laptop:mt-32 laptop:pl-20 desktop:pl-44',
            {
              hidden: selectedFaq !== 'PRESALE'
            }
          )}
        /> */}
        <FaqAvalanche
          className={classNames(
            'mt-8 laptop:mt-32 laptop:pl-20 desktop:pl-44',
            {
              hidden: selectedFaq !== 'AVALANCHE'
            }
          )}
        />
        <FaqAkitaInu
          className={classNames(
            'mt-8 laptop:mt-32 laptop:pl-20 desktop:pl-44',
            {
              hidden: selectedFaq !== 'AKITA_INU'
            }
          )}
        />
      </div>
      <FaqContact className="laptop:hidden mt-12" />
    </div>
  )
}
