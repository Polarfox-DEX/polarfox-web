import classNames from "classnames";
import { calcRem } from "../../utils/styles";
import { SectionProps } from '../utils/SectionProps'

export function PresaleDescription({ className }: SectionProps) {
  return (
    <div className={classNames(className)}>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3),
        }}
      >
        PRESALE
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          width: calcRem(408),
          fontSize: calcRem(50),
          lineHeight: calcRem(65),
        }}
      >
        Get polarfox tokens in presale
      </h2>
      <p
        className="mt-12 text-gray"
        style={{
          width: calcRem(503),
          fontSize: calcRem(20),
          lineHeight: calcRem(32),
        }}
      >
        <span className="font-bold">The PFX presale will last for 3 days.</span>
        <span> Each day, every participant can spend up to </span>
        <span className="font-bold">1 ETH</span>
        <span>, making </span>
        <span className="font-bold">3 ETH</span>
        <span> the maximum spent by any participant.</span>
      </p>
      <p
        className="mt-10 text-gray"
        style={{
          width: calcRem(503),
          lineHeight: calcRem(30),
        }}
      >
        <span>An entire </span>
        <span className="font-bold">37% of the total PFX supply </span>
        <span>
          will be allocated to this presale. Each day of the presale, an equal
          portion of the tokens will be available to purchasers.
        </span>
      </p>
      <div
        className="mt-10 border border-blue bg-white rounded-lg h-32"
        style={{
          width: calcRem(503),
        }}
      >
        <p
          className="text-gray italic mx-6 my-8"
          style={{
            lineHeight: calcRem(30),
          }}
        >
          <span className="font-bold">Example: </span>
          <span>
            on Day 1, if there are 5 participants each spending 1 ETH, everyone
            receives 1/5 of the daily PFX sale pool.
          </span>
        </p>
      </div>
      <div className="mt-16 font-bold" >Share with your friends!</div>
      <div className="mt-8 flex">
        <img src="telegram.png" alt="TG" className="ml-1" />
        <img src="facebook.png" alt="FB" className="ml-4" />
        <img src="twitter.png" alt="TW" className="ml-4" />
      </div>
    </div>
  );
}
