import classNames from 'classnames'
import { calcRem } from '../../utils/styles'

export function FaqSelector() {
  return (
    <div>
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
          maxWidth: calcRem(357),
          fontSize: calcRem(50),
          lineHeight: calcRem(65)
        }}
      >
        Help Center
      </h2>
      <div className="mt-12">
        <FaqSelectorButton title="Polarfox" numberOfItems={12} isSelected />
        <FaqSelectorButton title="PFX token" numberOfItems={8} />
        <FaqSelectorButton title="Akita Inu" numberOfItems={6} />
      </div>
    </div>
  )
}

interface FaqSelectorButtonProps {
  title: String
  numberOfItems: number
  isSelected?: boolean
}

function FaqSelectorButton({
  title,
  numberOfItems,
  isSelected
}: FaqSelectorButtonProps) {
  return (
    <button
      className={classNames('mt-5 rounded-lg', {
        'border border-blue bg-blue text-white': isSelected
      })}
      style={{ width: calcRem(386), height: calcRem(55) }}
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
