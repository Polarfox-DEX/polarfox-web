import classNames from 'classnames'
import { FaqPolarfox } from './FaqPolarfox'
import { SectionProps } from '../sections/utils/SectionProps'
import { SectionHeading } from '../sections/utils/SectionHeading'
import { SectionTitle } from '../sections/utils/SectionTitle'
import { SectionButton } from '../sections/utils/SectionButton'

export function FaqPreview({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        'container flex flex-wrap laptop:flex-nowrap justify-between laptop:space-x-20 desktop:space-x-44 desktop:px-4',
        className
      )}
    >
      <div>
        <SectionHeading>FAQ</SectionHeading>
        <SectionTitle className="mt-1 mb-12">
          Frequently Asked Questions
        </SectionTitle>
        <SectionButton href="/faq">More questions</SectionButton>
      </div>

      <FaqPolarfox />
    </div>
  )
}
