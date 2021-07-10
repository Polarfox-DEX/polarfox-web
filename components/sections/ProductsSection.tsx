import classNames from 'classnames';
import TopRightArrow from '../svg/top-right-arrow';

interface ProductsSectionProps {
  className?: string;
}

export function ProductsSection({ className }: ProductsSectionProps) {
  return (
    <div className={classNames(className)}>
      <div className="text-xs opacity-50">PFX PORTFOLIO</div>
      <div style={{ fontSize: '50px', lineHeight: '65px' }}>Products</div>
      <div className="flex justify-between mt-28">
        <Product
          label="Decentralized Exchange"
          url="https://dex-test.polarfox.io/"
        />
        <Product label="Polarfox Token (PFX)" url="#" />
        <Product
          label="Polarfox Bridge"
          url="https://bridge-test.polarfox.io"
        />
        <Product label="Akita Community" url="https://akita.network" />
      </div>
      <div className="text-xs opacity-50 mt-40">PARTNERS</div>
      <div className="flex justify-between items-center mt-11">
        <div>
          <img
            src="/gitcoin.jpg"
            width="202px"
            height="59px"
            alt="Gitcoin logo"
          />
        </div>
        <div>
          <img
            src="/avalanche.jpg"
            width="188px"
            height="94px"
            alt="Gitcoin logo"
          />
        </div>
        <div>
          <img
            src="/ethereum.jpg"
            width="188px"
            height="85px"
            alt="Gitcoin logo"
          />
        </div>
        <div>
          <img
            src="/coinmarketcap.jpg"
            width="278px"
            height="49px"
            alt="Gitcoin logo"
          />
        </div>
      </div>
    </div>
  );
}

interface ProductProps {
  label: string;
  url: string;
}

function Product({ label, url }: ProductProps) {
  return (
    <a
      href={url}
      className="flex p-7 bg-white border border-blue  hover:bg-blue-light hover:border-0 hover:text-white"
      style={{
        width: '285px',
        height: '270px',
        borderRadius: '10px',
      }}
    >
      <div className="flex-1 self-end text-lg">{label}</div>
      <div className="text-right">
        <TopRightArrow className="fill-current" />
      </div>
    </a>
  );
}
