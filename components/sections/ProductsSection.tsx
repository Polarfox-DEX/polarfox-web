import classNames from 'classnames';
import { calcRem } from '../../utils/styles';
import TopRightArrow from '../svg/TopRightArrow';

interface ProductsSectionProps {
  className?: string;
}

export function ProductsSection({ className }: ProductsSectionProps) {
  return (
    <div className={classNames(className)}>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3),
        }}
      >
        PFX PORTFOLIO
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          maxWidth: calcRem(357),
          fontSize: calcRem(50),
          lineHeight: calcRem(65),
        }}
      >
        Products
      </h2>
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
      <div
        className="opacity-50 mt-40"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3),
        }}
      >
        PARTNERS
      </div>
      <div className="flex justify-between items-center mt-11">
        <img className="grayscale" src="/logo/gitcoin.png" alt="Gitcoin logo" />
        <img
          className="grayscale"
          src="/logo/avalanche.png"
          alt="Gitcoin logo"
        />
        <img
          className="grayscale"
          src="/logo/ethereum.png"
          alt="Gitcoin logo"
        />
        <img
          className="grayscale"
          src="/logo/coin-market-cap.png"
          alt="Gitcoin logo"
        />
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
      target="_blank"
      rel="noopener noreferrer"
      className="flex p-7 bg-white border border-blue"
      style={{
        width: calcRem(285),
        height: calcRem(270),
        borderRadius: calcRem(10),
      }}
    >
      <p
        className="flex-1 self-end text-lg font-switzer font-semibold"
        style={{
          width: calcRem(224),
          fontSize: calcRem(20),
          lineHeight: calcRem(26.4),
        }}
      >
        {label}
      </p>
      <div className="text-right">
        <TopRightArrow className="fill-current" />
      </div>
    </a>
  );
}
