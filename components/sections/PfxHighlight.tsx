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
      className="bg-right-bottom desktop:bg-left-bottom w-full min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div
        className={classNames(
          'container flex flex-wrap flex-col items-center',
          className
        )}
      >
        <h1
          className="title text-center font-switzer font-semibold"
          style={{ maxWidth: calcRem(880) }}
        >
          Decentralized ecosystem of applications
          <style jsx>{`
            .title {
              font-size: ${calcRem(40)};
              line-height: ${calcRem(52.8)};
            }

            @media (min-width: 1200px) {
              .title {
                font-size: ${calcRem(70)};
                line-height: ${calcRem(90)};
              }
            }
          `}</style>
        </h1>
        <div className="flex w-full flex-wrap justify-center gap-x-5 gap-y-6 mt-24">
          <Button
            url="/Polarfox Litepaper V2.6.pdf"
            className="border border-blue bg-white hover:bg-blue hover:text-white"
          >
            Litepaper
          </Button>
          <Button
            url="https://dex-test.polarfox.io/"
            className="text-white bg-blue hover:bg-blue-light"
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
        'button flex justify-center items-center rounded-full font-semibold',
        className
      )}
    >
      {children}
      <style jsx>{`
        .button {
          width: 100%;
          height: ${calcRem(60)};
          font-size: ${calcRem(18)};
          line-height: ${calcRem(21.15)};
        }

        @media (min-width: 1200px) {
          .button {
            max-width: ${calcRem(209)};
            height: ${calcRem(78)};
          }
        }
      `}</style>
    </a>
  );
}
