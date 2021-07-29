import classNames from 'classnames'
import Link from 'next/link'
import { calcRem } from '../../utils/styles'

export function FaqContact() {
  return (
    <div
      className={classNames('border-t-2 border-blue pt-8')}
      style={{ width: calcRem(357) }}
    >
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
        No problem, feel free to contact us directly or ask in our community
        channels on Telegram or Twitter.
        {/* TODO: Add some links */}
      </p>
      <button
        className="mt-12 rounded-full border border-blue bg-white font-semibold"
        style={{ width: calcRem(166), height: calcRem(44) }}
      >
        <Link href="/faq">
          <a>Contact us</a>
        </Link>
      </button>
    </div>
  )
}
