import classNames from 'classnames';

interface PfxTokenObjectivesSectionProps {
  className?: string;
}

export function PfxTokenObjectivesSection({
  className,
}: PfxTokenObjectivesSectionProps) {
  return (
    <div className={classNames(className)}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xs opacity-50">PFX TOKEN</div>
          <div style={{ fontSize: '50px', lineHeight: '65px' }}>
            PFX token
            <br />
            objectives
          </div>
          <p className="my-12" style={{ maxWidth: '425px' }}>
            Polarfox is a community-based project, and hearing the voice of that
            community is crucial to its future.
          </p>
          <button
            className="border border-blue bg-white w-40 h-11 hover:border-0 hover:bg-blue-light hover:text-white"
            style={{ borderRadius: '22px' }}
          >
            Read more
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center my-5">
              <div className="w-7 h-7 bg-blue rounded-md mr-4"></div>
              <p className="text-xs opacity-50">
                Presale
                <br />
                37%
              </p>
            </div>
            <div className="flex items-center my-5">
              <div
                className="w-7 h-7 rounded-md mr-4"
                style={{ backgroundColor: '#66AEFF' }}
              ></div>
              <p className="text-xs opacity-50">
                Liquidity mining
                <br />
                37%
              </p>
            </div>
            <div className="flex items-center my-5">
              <div
                className="w-7 h-7 rounded-md mr-4"
                style={{ backgroundColor: '#2DBCC4' }}
              ></div>
              <p className="text-xs opacity-50">
                Initial Liquidity
                <br />
                17%
              </p>
            </div>
            <div className="flex items-center my-5">
              <div
                className="w-7 h-7 rounded-md mr-4"
                style={{ backgroundColor: '#0130A6' }}
              ></div>
              <p className="text-xs opacity-50">
                Team treasury
                <br />
                6.5%
              </p>
            </div>
            <div className="flex items-center my-5">
              <div
                className="w-7 h-7 rounded-md mr-4"
                style={{ backgroundColor: '#0130A6' }}
              ></div>
              <p className="text-xs opacity-50">
                Governance treasury
                <br />
                2.5%
              </p>
            </div>
          </div>
          <img
            src="/pfx-token-distribution.svg"
            width="386"
            height="386"
            alt="PFX token distribution chart"
          />
        </div>
      </div>
      <div className="flex justify-between mt-32">
        <PfxTokenObjectiveBlock
          title="Community based token"
          description="Polarfox is a community-based project, and hearing the voice of that community is crucial to its future."
        />
        <PfxTokenObjectiveBlock
          title="Effective ecosystem"
          description="PFX funds the Polarfox ecosystem, initially with a percentage of the token supply, and then with a dev fee on each PFX transaction."
        />
        <PfxTokenObjectiveBlock
          title="Governance protocol"
          description="2.5% of the total supply will be given to the governance for use over a time period of sixteen years."
        />
        <PfxTokenObjectiveBlock
          title="Deflationary & flexible"
          description="The token is deflationary & flexible - the burn rate and dev fee can be changed at any time, or even disabled."
        />
      </div>
    </div>
  );
}

interface PfxTokenObjectiveBlockProps {
  title: string;
  description: string;
}

function PfxTokenObjectiveBlock({
  title,
  description,
}: PfxTokenObjectiveBlockProps) {
  return (
    <div className="border-t-2 border-blue" style={{ width: '280px' }}>
      <div className="text-2xl my-7">{title}</div>
      <p className="leading-8" style={{ color: '#4D6481' }}>
        {description}
      </p>
    </div>
  );
}
