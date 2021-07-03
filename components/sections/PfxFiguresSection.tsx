import classNames from 'classnames';

interface PfxFiguresProps {
  className?: string;
}

export function PfxFigures({ className }: PfxFiguresProps) {
  return (
    <div className={classNames('flex justify-between', className)}>
      <PfxFigureBox
        title="Total PFX supply"
        text="30,000,000 PFX"
        backgroundColor="#939EAC"
      />
      <PfxFigureBox
        title="Circulation supply"
        text="6,739,207 PFX"
        backgroundColor="#738193"
      />
      <PfxFigureBox
        title="Burned"
        text="1,349,829 PFX"
        backgroundColor="#9EAEC1"
      />
      <PfxFigureBox
        title="Market Cap"
        text="$1,283,829,429"
        backgroundColor="#667F9F"
      />
    </div>
  );
}

interface PfxFigureBoxProps {
  title: string;
  text: string;
  backgroundColor: string;
}

function PfxFigureBox({ title, text, backgroundColor }: PfxFigureBoxProps) {
  return (
    <div
      className="flex flex-col justify-center pl-10 text-white"
      style={{
        backgroundColor,
        width: '284px',
        height: '207px',
        borderRadius: '10px',
      }}
    >
      <p className="text-sm opacity-40">{title}</p>
      <p className=" text-2xl mt-5">{text}</p>
    </div>
  );
}
