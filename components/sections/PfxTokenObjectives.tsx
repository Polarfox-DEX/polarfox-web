import classNames from 'classnames'
import { ReactNode } from 'react'
import { calcRem } from '../../utils/styles'
import { SectionButton } from './utils/SectionButton'
import { SectionHeading } from './utils/SectionHeading'
import { SectionTitle } from './utils/SectionTitle'

interface PfxTokenObjectivesProps {
  className?: string
}

export function PfxTokenObjectives({ className }: PfxTokenObjectivesProps) {
  return (
    <div className={classNames('container flex-wrap', className)}>
      <div className="grid desktop:grid-cols-2 gap-4">
        <div className="flex flex-col desktop:max-w-sm">
          <SectionHeading>PFX TOKEN</SectionHeading>
          <SectionTitle className="mt-1">PFX token objectives</SectionTitle>
          <p
            className="my-12"
            style={{
              fontSize: calcRem(20),
              lineHeight: calcRem(32)
            }}
          >
            The PFX token is at the center of the Polarfox ecosystem. Find out
            more about PFX below.
          </p>
          <SectionButton
            href="/Polarfox Litepaper V2.6.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </SectionButton>
        </div>

        <div className="mt-16 flex flex-col justify-center items-center tablet:flex-1 tablet:flex-row-reverse desktop:mt-0 desktop:justify-between">
          <img
            src="/pfx-token-distribution.svg"
            width="386"
            height="386"
            alt="PFX token distribution chart"
          />
          <div className="mt-16 desktop:mt-0 w-full">
            <LegendItem color="#001937">
              Presale
              <br />
              37%
            </LegendItem>
            <LegendItem color="#66AEFF">
              Liquidity mining
              <br />
              37%
            </LegendItem>
            <LegendItem color="#2DBCC4">
              Initial Liquidity
              <br />
              17%
            </LegendItem>
            <LegendItem color="#0130A6">
              Team treasury
              <br />
              6.5%
            </LegendItem>
            <LegendItem color="#086AD9">
              Governance treasury
              <br />
              2.5%
            </LegendItem>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-9 mt-20 desktop:mt-32">
        <PfxTokenObjective title="Tokenomics">
          The PFX tokenomics are designed to provide a long-term increase in
          value while rewarding liquidity providers with even more PFX gains.
        </PfxTokenObjective>
        <PfxTokenObjective title="Effective ecosystem">
          PFX funds the Polarfox ecosystem, initially with a percentage of the
          token supply, and then with a dev fee on each PFX transaction.
        </PfxTokenObjective>
        <PfxTokenObjective title="Governance protocol">
          2.5% of the total supply will be given to the governance for use over
          a time period of sixteen years.
        </PfxTokenObjective>
        <PfxTokenObjective title="Deflationary">
          On every transaction involving PFX, 0.27% of the transferred PFX
          amount is burned forever, effectively making it deflationary.
        </PfxTokenObjective>
      </div>
    </div>
  )
}

interface LegendItemProps {
  color: string
  children: ReactNode
}

function LegendItem({ color, children }: LegendItemProps) {
  return (
    <div className="flex items-center my-5">
      <div
        className="rounded-md mr-4"
        style={{
          backgroundColor: color,
          width: calcRem(28),
          height: calcRem(28)
        }}
      ></div>
      <p
        className="opacity-50 font-bold"
        style={{ fontSize: calcRem(12), lineHeight: calcRem(14.1) }}
      >
        {children}
      </p>
    </div>
  )
}

interface PfxTokenObjectiveProps {
  title: string
  children: ReactNode
}

function PfxTokenObjective({ title, children }: PfxTokenObjectiveProps) {
  return (
    <div
      className="pfx-token-objective w-full border-t-2 border-blue"
      style={{}}
    >
      <h3
        className="my-7 font-switzer font-semibold"
        style={{ fontSize: calcRem(24), lineHeight: calcRem(31.68) }}
      >
        {title}
      </h3>
      <p className="text-gray" style={{ lineHeight: calcRem(32) }}>
        {children}
      </p>
      <style jsx>{`
        @media (min-width: 1200px) {
          .pfx-token-objective {
            width: ${calcRem(280)};
          }
        }
      `}</style>
    </div>
  )
}
