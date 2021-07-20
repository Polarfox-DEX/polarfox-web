import classNames from "classnames";
import Link from "next/link";
import Analytics from "./svg/Analytics";
import Bridge from "./svg/Bridge";
import DoubleArrow from "./svg/DoubleArrow";
import MenuArrow from "./svg/MenuArrow";
import Mining from "./svg/Mining";
import TopRightArrow from "./svg/TopRightArrow";
import { calcRem } from "../utils/styles";
import { SectionProps } from "./utils/SectionProps";
import { ReactNode } from "react";

export function Header({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        'hidden desktop:flex justify-between w-full px-14 py-4 absolute',
        className
      )}
    >
      <Link href="/">
        <a>
          <img src="/logo/polarfox.png" alt="Polarfox logo" />
        </a>
      </Link>
      <div
        className="flex items-center space-x-20 font-semibold"
        style={{
          fontSize: calcRem(14),
          lineHeight: calcRem(16.45),
        }}
      >
        <div
          className="rounded-3xl bg-gray-mid2 flex items-center justify-between -mr-5 px-4"
          style={{ width: calcRem(110), height: calcRem(44) }}
        >
          Products
          <MenuArrow />
        </div>
        <ProductsDropdown isActive />
        <Link href="/about">
          <a>About</a>
        </Link>
        <div>Roadmap</div>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <div>Resources</div>
        <div>Language</div>
        <div>Account</div>
      </div>
    </div>
  );
}

interface ProductsDropdownProps {
  isActive?: boolean;
  className?: string;
}

function ProductsDropdown({ isActive, className }: ProductsDropdownProps) {
  return isActive ? (
    <div
      className="bg-white rounded-xl absolute flex justify-between space-x-3 px-4 py-6"
      style={{
        width: calcRem(779),
        height: calcRem(219),
        marginTop: calcRem(300),
        marginLeft: calcRem(-16),
      }}
    >
      <Product
        logo={<DoubleArrow />}
        href="https://dex.polarfox.io"
        linkTitle="Open app"
        textClass="mt-11"
      >
        Decentralized Exchange
      </Product>
      <Product
        logo={<Analytics />}
        href="https://analytics.polarfox.io"
        linkTitle="Open app"
      >
        Analytics
      </Product>
      <Product
        logo={<Mining />}
        href="https://dex.polarfox.io/#/pfx"
        linkTitle="Open app"
      >
        Mining Pools
      </Product>
      <Product
        logo={<Bridge />}
        href="https://bridge.polarfox.io"
        linkTitle="Open app"
      >
        Bridge
      </Product>
      <Product
        logo={
          <img
            src="akita.png"
            alt="akita"
            style={{ height: calcRem(24), width: calcRem(24) }}
          />
        }
        href="https://akita.network"
        linkTitle="Visit site"
      >
        AKITA Network
      </Product>
    </div>
  ) : (
    <div className="absolute" />
  );
}

interface ProductProps {
  logo: ReactNode;
  href: string;
  linkTitle: string;
  textClass?: string;
  className?: string;
  children: ReactNode;
}

function Product({
  logo,
  href,
  linkTitle,
  textClass,
  className,
  children,
}: ProductProps) {
  return (
    <div style={{ width: calcRem(137) }}>
      <Link href={href}>
        <a>
          <div
            className="rounded-xl hover:bg-gray-dark mx-3 px-3 pt-4"
            style={{
              height: calcRem(121),
            }}
          >
            {logo}
            <div
              className={classNames("font-semibold", textClass || "mt-14")}
              style={{ fontSize: calcRem(12), lineHeight: calcRem(14) }}
            >
              {children}
            </div>
          </div>
        </a>
      </Link>
      <Link href={href}>
        <a
          className="border border-blue rounded-xl border-opacity-10 mt-2 flex items-center justify-between font-semibold pl-4"
          style={{
            height: calcRem(40),
          }}
        >
          {linkTitle}
          <TopRightArrow
            className="fill-current mx-4"
            style={{ height: calcRem(7), width: calcRem(7) }}
          />
        </a>
      </Link>
    </div>
  );
}
