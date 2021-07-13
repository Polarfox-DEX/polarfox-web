import classNames from 'classnames';
import { ReactNode } from 'react';
import { calcRem } from '../../utils/styles';
import { WithBackgroundImage } from '../utils/WithBackgroundImage';

interface PfxHighlightsProps {
  className?: string;
}

export function PfxHighlight({ className }: PfxHighlightsProps) {
  return (
    <WithBackgroundImage
      className="bg-left-bottom w-screen min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div
        className={classNames(
          'container flex flex-col items-center',
          className
        )}
      >
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
          <Button
            url="/Polarfox Litepaper V2.6.pdf"
            className="border border-blue bg-white"
          >
            Litepaper
          </Button>
          <Button
            url="https://dex-test.polarfox.io/"
            className="text-white bg-blue"
          >
            Open DEX
          </Button>
        </div>
      </div>
    </WithBackgroundImage>
  );
}

interface ButtonProps {
  url: string;
  children: ReactNode;
  className?: string;
}

function Button({ url, className, children }: ButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
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
