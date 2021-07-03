import classNames from 'classnames';

interface PfxHighlightsSectionProps {
  className?: string;
}

export function PfxHighlightSection({ className }: PfxHighlightsSectionProps) {
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
          Whitepaper
        </button>
        <button
          className="text-white bg-blue hover:border-0 hover:bg-blue-light hover:text-white"
          style={{
            width: '12.5rem',
            height: '4.875rem',
            borderRadius: '2.438rem',
          }}
        >
          Go to app
        </button>
      </div>
    </div>
  );
}
