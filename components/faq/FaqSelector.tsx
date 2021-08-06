import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'
import { calcRem } from '../../utils/styles'

interface FaqSelectorProps {
  selectedFaq: string
  setSelectedFaq: Dispatch<SetStateAction<string>>
}

export function FaqSelector({ selectedFaq, setSelectedFaq }: FaqSelectorProps) {
  return (
    <div className="selector">
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3)
        }}
      >
        FAQ
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        Help Center
      </h2>
      <div className="mt-12">
        <FaqSelectorButton
          title="Polarfox"
          numberOfItems={5}
          name={'POLARFOX'}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
        <FaqSelectorButton
          title="PFX token"
          numberOfItems={3}
          name={'PFX_TOKEN'}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
        <FaqSelectorButton
          title="Avalanche"
          numberOfItems={2}
          name={'AVALANCHE'}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
        <FaqSelectorButton
          title="Akita Inu"
          numberOfItems={3}
          name={'AKITA_INU'}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .selector {
            max-width: ${calcRem(390)};
          }
        }
      `}</style>
    </div>
  )
}

interface FaqSelectorButtonProps {
  title: String
  numberOfItems: number
  name: string
  selectedFaq: string
  setSelectedFaq: Dispatch<SetStateAction<string>>
}

function FaqSelectorButton({
  title,
  numberOfItems,
  name,
  selectedFaq,
  setSelectedFaq
}: FaqSelectorButtonProps) {
  return (
    <button
      className={classNames(
        'mt-5 rounded-lg w-full',
        {
          'border border-blue bg-blue text-white hover:bg-blue':
            selectedFaq === name
        },
        {
          'hover:bg-blue-light hover:text-white hover:opacity-80':
            selectedFaq !== name
        }
      )}
      style={{ height: calcRem(55) }}
      onClick={() => setSelectedFaq(name)}
    >
      <div className="flex justify-between items-center">
        <h3
          className="float-left mx-5 font-bold"
          style={{ fontSize: calcRem(20) }}
        >
          {title}
        </h3>
        <span
          className="float-right mx-5 font-normal"
          style={{ fontSize: calcRem(14) }}
        >
          {numberOfItems}
        </span>
      </div>
    </button>
  )
}
