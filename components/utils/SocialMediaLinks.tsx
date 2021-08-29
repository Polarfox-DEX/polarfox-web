import { calcRem } from '../../utils/styles'
import GitHub from '../svg/Github'
import Medium from '../svg/Medium'
import Telegram from '../svg/Telegram'
import Twitter from '../svg/Twitter'
import classNames from 'classnames'
import { SectionProps } from '../sections/utils/SectionProps'
import { SiteMapLink } from './SiteMapLink'

export function SocialMediaLinks({ className }: SectionProps) {
  return (
    <div className={classNames('flex space-x-6 items', className)}>
      <SiteMapLink url="https://t.me/polarfoxdex">
        <Telegram
          className="text-blue hover:text-blue-light fill-current"
          width={calcRem(24.29)}
          height={calcRem(20)}
        />
      </SiteMapLink>
      <SiteMapLink url="https://github.com/Polarfox-DEX">
        <GitHub className="text-blue hover:text-blue-light fill-current" width={calcRem(20.51)} height={calcRem(20)} />
      </SiteMapLink>
      <SiteMapLink url="https://medium.com/polarfoxdex">
        <Medium className="text-blue hover:text-blue-light fill-current" width={calcRem(35.22)} height={calcRem(20)} />
      </SiteMapLink>
      <SiteMapLink url="https://twitter.com/polarfoxdex">
        <Twitter className="text-blue hover:text-blue-light fill-current" width={calcRem(24.29)} height={calcRem(20)} />
      </SiteMapLink>
    </div>
  )
}
