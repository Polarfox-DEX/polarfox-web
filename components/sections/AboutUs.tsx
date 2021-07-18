import classNames from 'classnames';
import { calcRem } from '../../utils/styles';
import { WithBackgroundImage } from '../utils/WithBackgroundImage';
import { SectionHeading } from './utils/SectionHeading';

interface AboutUsProps {
  className?: string;
}

export function AboutUs({ className }: AboutUsProps) {
  return (
    <WithBackgroundImage
      className="bg-right-bottom tablet:bg-left-bottom w-full min-h-screen tablet:h-full"
      imageUrl="/background/forest-1.jpg"
    >
      <div
        className={classNames(
          'container flex flex-wrap justify-between items-baseline gap-x-16',
          className
        )}
      >
        <SectionHeading>ABOUT US</SectionHeading>
        <div className="text font-switzer">
          <p>
            Polarfox is a self-funding community-based team of crypto
            enthusiasts who urge to build a great financial ecosystem, based on
            a highly efficient blockchain technology allowing for infinite use
            cases.
          </p>
          <br />
          <p>
            We are convinced that cryptocurrency will shape the future of the
            world&apos;s financial system and so we feel drifted to contribute
            to its new form.
          </p>
          <style jsx>{`
            .text {
              font-size: ${calcRem(25)};
              line-height: ${calcRem(46)};
            }

            @media (min-width: 1200px) {
              .text {
                max-width: ${calcRem(745)};
                font-size: ${calcRem(30)};
              }
            }
          `}</style>
        </div>
      </div>
    </WithBackgroundImage>
  );
}
