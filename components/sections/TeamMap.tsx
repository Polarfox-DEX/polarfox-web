import classNames from 'classnames';
import { calcRem } from '../../utils/styles';

interface LeadershipProps {
  className?: string;
}

export function TeamMap({ className }: LeadershipProps) {
  return (
    <div className={classNames(className)}>
      <div className="grid grid-cols-2">
        <h2
          className="font-switzer font-semibold"
          style={{
            fontSize: calcRem(50),
            lineHeight: calcRem(65),
          }}
        >
          Let&apos;s get familiar!
        </h2>
        <div className="flex justify-end space-x-10">
          <Figure figure="30" label="members" />
          <Figure figure="12" label="countries" />
          <Figure figure="14" label="personalities" />
        </div>
      </div>
      <div className="flex justify-center mt-28">
        <img src="/team-map.png" alt="Team map" />
      </div>
    </div>
  );
}

interface FigureProps {
  figure: string;
  label: string;
}

function Figure({ figure, label }: FigureProps) {
  return (
    <div className="flex flex-col items-center font-semibold">
      <div style={{ fontSize: calcRem(50) }}>{figure}</div>
      <div style={{ fontSize: calcRem(16), lineHeight: calcRem(28) }}>
        {label}
      </div>
    </div>
  );
}
