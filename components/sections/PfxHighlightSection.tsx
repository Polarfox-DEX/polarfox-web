import classNames from 'classnames';
import { ReactNode } from 'react';
import { calcRem } from '../../utils/styles';

interface PfxHighlightsProps {
  className?: string;
}

export function PfxHighlight({ className }: PfxHighlightsProps) {
  return (
    <div className={classNames('flex flex-col items-center', className)}>
      <h1
        className="text-center font-switzer font-semibold"
        style={{
          width: calcRem(880),
          fontSize: calcRem(70),
          lineHeight: calcRem(90),
        }}
      >
        Decentralized ecosystem of applications
      </h1>
      <div className="flex space-x-5 mt-24">
        <Button className="border border-blue bg-white">Litepaper</Button>
        <Button
          url="https://dex-test.polarfox.io/"
          className="text-white bg-blue"
        >
          Open DEX
        </Button>
      </div>
    </div>
  );
}

interface ButtonProps {
  url?: string; // TODO Make it mandatory
  children: ReactNode;
  className?: string;
}

function Button({ url, className, children }: ButtonProps) {
  return (
    <a
      href={url ?? ''}
      className={classNames(
        'flex justify-center items-center rounded-full font-semibold',
        className
      )}
      style={{
        width: calcRem(200),
        height: calcRem(78),
        fontSize: calcRem(18),
        lineHeight: calcRem(21.15),
      }}
    >
      {children}
    </a>
  );
}
