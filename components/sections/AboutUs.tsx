import { calcRem } from '../../utils/styles';
import { WithBackgroundImage } from '../utils/WithBackgroundImage';

export function AboutUs() {
  return (
    <WithBackgroundImage
      className="bg-left-bottom w-screen min-h-screen h-screen"
      imageUrl="/background/forest-1.jpg"
    >
      <div className="container flex justify-between">
        <div
          className="opacity-50"
          style={{
            fontSize: calcRem(12),
            lineHeight: calcRem(14.1),
            letterSpacing: calcRem(3),
          }}
        >
          ABOUT US
        </div>
        <div
          className="font-switzer"
          style={{
            maxWidth: calcRem(745),
            fontSize: calcRem(30),
            lineHeight: calcRem(46),
          }}
        >
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
        </div>
      </div>
    </WithBackgroundImage>
  );
}
