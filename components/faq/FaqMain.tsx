import classNames from 'classnames'
import { FaqSelector } from './FaqSelector'
import { FaqContact } from './FaqContact'
import { FaqPolarfox } from './FaqPolarfox'
import { WithBackgroundImage } from '../utils/WithBackgroundImage'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqMain({ className }: SectionProps) {
  return (
    // <WithBackgroundImage
    // className="tablet:bg-left-bottom tablet:h-full justify-between"
    // imageUrl="/background/forest-1.jpg"
    // >
    <div
      className={classNames(
        'container flex desktop:space-x-24 w-full flex-col desktop:flex-row',
        className
      )}
    >
      <div className="flex flex-col desktop:flex-row">
        <div>
          <FaqSelector />
          <FaqContact className="hidden desktop:block mt-80" />
        </div>
        <FaqPolarfox className="mt-8 desktop:mt-32 desktop:pl-44" />
      </div>
      <FaqContact className="desktop:hidden mt-12" />
    </div>
    // </WithBackgroundImage>
  )
}
