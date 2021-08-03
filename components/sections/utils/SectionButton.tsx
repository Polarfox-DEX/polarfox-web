import Link from 'next/link'
import { ReactNode } from 'react'
import { calcRem } from '../../../utils/styles'

interface SectionButtonProps {
  href: string
  target?: string
  rel?: string
  children: ReactNode
}

export function SectionButton({
  href,
  target,
  rel,
  children
}: SectionButtonProps) {
  return (
    <Link href={href} passHref={true}>
      <a
        target={target}
        rel={rel}
        className="section-button flex justify-center items-center rounded-full border border-blue bg-white font-semibold hover:bg-blue hover:text-white"
      >
        {children}
        <style jsx>{`
          .section-button {
            height: ${calcRem(44)};
            box-shadow: 0px 2px 4px rgba(0, 25, 55, 0.29748);
          }

          @media (min-width: 640px) {
            .section-button {
              max-width: ${calcRem(166)};
            }
          }
        `}</style>
      </a>
    </Link>
  )
}
