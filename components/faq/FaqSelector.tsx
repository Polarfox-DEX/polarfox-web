import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'
import { calcRem } from '../../utils/styles'

interface FaqSelectorProps {
  selectedFaq: string
  setSelectedFaq: Dispatch<SetStateAction<string>>
}

export function FaqSelector({ selectedFaq, setSelectedFaq }: FaqSelectorProps) {
  return (
    <div
      style={{
        maxWidth: calcRem(390)
      }}
    >
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
          numberOfItems={12}
          name={'POLARFOX'}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
        <FaqSelectorButton
          title="PFX token"
          numberOfItems={8}
          name={'PFX_TOKEN'}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
        <FaqSelectorButton
          title="Akita Inu"
          numberOfItems={6}
          name={'AKITA_INU'}
          selectedFaq={selectedFaq}
          setSelectedFaq={setSelectedFaq}
        />
      </div>
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
      <div>
        <h3
          className="float-left mx-5 font-bold"
          style={{ fontSize: calcRem(20) }}
        >
          {title}
        </h3>
        <span
          className="float-right mx-5 font-normal mt-1"
          style={{ fontSize: calcRem(14) }}
        >
          {numberOfItems}
        </span>
        {/* TODO: Should not have to use mt-1 above */}
      </div>
    </button>
  )
}
