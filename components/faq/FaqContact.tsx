import classNames from 'classnames'
import Link from 'next/link'
import { calcRem } from '../../utils/styles'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqContact({ className }: SectionProps) {
  return (
    <div className={classNames('border-t-2 border-blue pt-8 w-full desktop:w-96', className)}>
      <h3
        className="font-switzer font-semibold"
        style={{
          fontSize: calcRem(20),
          lineHeight: calcRem(32)
        }}
      >
        Couldn&apos;t find what you are looking for?
      </h3>
      <p className="mt-12 text-gray">
        No problem, feel free to contact us directly or ask in our community channels on Telegram or Twitter.
      </p>
      <button
        className="mt-12 rounded-full border border-blue bg-white font-semibold hover:bg-blue hover:text-white"
        style={{ width: calcRem(166), height: calcRem(44) }}
      >
        <Link href="https://t.me/polarfoxdex">
          <a target="_blank" rel="noopener noreferrer">
            Contact us
          </a>
        </Link>
      </button>
    </div>
  )
}
