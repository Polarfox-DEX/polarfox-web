import classNames from 'classnames';

interface PfxHighlightsProps {
  className?: string;
}

export function PfxHighlight({ className }: PfxHighlightsProps) {
  return (
    <div className={classNames('flex flex-col items-center', className)}>
      <p
        className="text-center"
        style={{ fontSize: '4.375rem', width: '55rem' }}
      >
        Decentralized ecosystem of applications
      </p>
      <div className="space-x-5 mt-24">
        <button
          className="border border-blue bg-white hover:border-0 hover:bg-blue-light hover:text-white"
          style={{
            width: '12.5rem',
            height: '4.875rem',
            borderRadius: '2.438rem',
          }}
        >
          Litepaper
        </button>
        <button
          className="text-white bg-blue hover:border-0 hover:bg-blue-light hover:text-white"
          style={{
            width: '12.5rem',
            height: '4.875rem',
            borderRadius: '2.438rem',
          }}
        >
          Open DEX
        </button>
      </div>
    </div>
  );
}
