import classNames from 'classnames';

import FlagSVG from '../../assets/icons/flag.svg';
import TokenSVG from '../../assets/icons/token.svg';
import AvalancheSVG from '../../assets/icons/avalanche.svg';

interface PfxStatementsSectionProps {
  className?: string;
}

export function PfxStatementsSection({ className }: PfxStatementsSectionProps) {
  return (
    <div className={classNames('flex justify-between', className)}>
      <PfxGoal
        icon={FlagSVG}
        title="Goal of Polarfox"
        description="Polarfox is the name given to an ecosystem of applications based on the Avalanche blockchain."
      />
      <PfxGoal
        icon={TokenSVG}
        title="PFX Token"
        description="Polarfox is the name given to an ecosystem of applications based on the Avalanche blockchain."
      />
      <PfxGoal
        icon={AvalancheSVG}
        title="Created on Avalanche"
        description="Polarfox is the name given to an ecosystem of applications based on the Avalanche blockchain."
      />
    </div>
  );
}

interface PfxGoalProps {
  icon: string;
  title: string;
  description: string;
}

function PfxGoal({ icon, title, description }: PfxGoalProps) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ width: '385px' }}
    >
      <img src={icon} alt="icon" />
      <p className="my-8 text-lg">{title}</p>
      <p>{description}</p>
    </div>
  );
}
