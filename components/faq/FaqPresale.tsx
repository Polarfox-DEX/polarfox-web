import classNames from 'classnames'
import { calcRem } from '../../utils/styles'
import { Question } from './utils/Question'
import { SectionProps } from '../sections/utils/SectionProps'

export function FaqPresale({ className }: SectionProps) {
  return (
    <div className={classNames('divide-y divide-gray-light w-full', className)}>
      <Question question="When and where can I participate in the PFX presale?">
        The presale will take place right before the launch of the Polarfox DEX
        and last for 3 days. It will be accessible on the homepage of Polarfox.
      </Question>
      <Question question="How much PFX is available and what is the price?">
        9,900,000 PFX is allocated to the entire presale, released equally over
        3 days (that is 3,300,000 PFX per day). The PFX price will be determined
        dynamically on each day based on the amount of ETH that participants
        put.
        <br />
        <br />
        Example: on Day 1, if there are 5 participants each spending 1 ETH,
        everyone receives 1/5 of the daily PFX sale pool.
      </Question>
      <Question question="How much can I spend and are there bonuses available?">
        The PFX presale aims to reward AKITA holders and does so by providing a
        number of bonuses to them. The more AKITA you hold:
        <ul
          className="list-disc list-inside pl-4"
          style={{ fontSize: calcRem(15), lineHeight: calcRem(25) }}
        >
          <li>The more PFX you can buy</li>
          <li>The more bonus PFX tokens you will receive</li>
          <li>The more bonus gAKITA tokens you will receive</li>
        </ul>
        <br />
        Please note that the bonus PFX tokens you will earn will be locked for a
        few months. The higher the bonus rate, the longer they will be locked.
      </Question>
    </div>
  )
}
