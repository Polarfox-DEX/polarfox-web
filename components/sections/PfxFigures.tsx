import classNames from 'classnames';
import { calcRem } from '../../utils/styles';

interface PfxFiguresProps {
  className?: string;
}

export function PfxFigures({ className }: PfxFiguresProps) {
  return (
    <div
      className={classNames(
        'container flex flex-wrap justify-between gap-5',
        className
      )}
    >
      <PfxFigureBox
        title="Total PFX supply"
        figure="30,000,000 PFX"
        backgroundColor="#939EAC"
      />
      <PfxFigureBox
        title="Circulation supply"
        figure="6,739,207 PFX"
        backgroundColor="#738193"
      />
      <PfxFigureBox
        title="Burned"
        figure="1,349,829 PFX"
        backgroundColor="#9EAEC1"
      />
      <PfxFigureBox
        title="Market Cap"
        figure="$1,283,829,429"
        backgroundColor="#667F9F"
      />
    </div>
  );
}

interface PfxFigureBoxProps {
  title: string;
  figure: string;
  backgroundColor: string;
}

function PfxFigureBox({ title, figure, backgroundColor }: PfxFigureBoxProps) {
  return (
    <div
      className="text-center flex flex-col flex-1 justify-center text-white font-graphik desktop:text-left desktop:pl-10"
      style={{
        backgroundColor,
        minWidth: calcRem(284),
        height: calcRem(207),
        borderRadius: calcRem(10),
      }}
    >
      <p
        className="opacity-40"
        style={{ fontSize: calcRem(14), lineHeight: calcRem(15.4) }}
      >
        {title}
      </p>
      <p
        className="mt-5"
        style={{ fontSize: calcRem(24), lineHeight: calcRem(26.4) }}
      >
        {figure}
      </p>
    </div>
  );
}
