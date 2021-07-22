import classNames from "classnames";
import Link from "next/link";
import Analytics from "./svg/Analytics";
import Bridge from "./svg/Bridge";
import DoubleArrow from "./svg/DoubleArrow";
import MenuArrow from "./svg/MenuArrow";
import Mining from "./svg/Mining";
import TopRightArrow from "./svg/TopRightArrow";
import { calcRem } from "../utils/styles";
import { SectionProps } from "./sections/utils/SectionProps";
import { ReactNode } from "react";

export function Header({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        "hidden desktop:flex justify-between w-full px-14 py-4 absolute",
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
        <ProductsDropdown isActive />
        <Link href="/about">
          <a>About</a>
        </Link>
        <div>Roadmap</div>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        {/* <div>Resources</div> */}
        {/* // TODO: The mr-5 below does not work - fix this */}
        <HoverableItem className="mr-5" width={119}>
          Resources
        </HoverableItem>
        {/* <div>Language</div> */}
        {/* // TODO: The mr-5 below does not work - fix this */}
        <HoverableItem className="mr-5" width={131}>
          :flag: Language
        </HoverableItem>
        <div>Account</div>
      </div>
    </div>
  );
}

interface HoverableItemProps {
  className?: string;
  width: number;
  children: ReactNode;
}

function HoverableItem({ className, width, children }: HoverableItemProps) {
  return (
    <div
      className={classNames(
        "rounded-3xl flex items-center justify-between px-4 hover:bg-gray-mid2",
        className
      )}
      style={{ width: calcRem(width), height: calcRem(44) }}
    >
      {children}
      <MenuArrow />
    </div>
  );
}

interface ProductsDropdownProps {
  isActive?: boolean;
}

function ProductsDropdown({ isActive }: ProductsDropdownProps) {
  return (
    <div className="flex items-center hover-trigger">
      {/* // TODO: We should not need -mr-5 */}
      <HoverableItem className="-mr-5" width={110}>
        Products
      </HoverableItem>
      <div
        className="bg-white rounded-xl absolute flex justify-between space-x-3 px-4 py-6 hover-target"
        style={{
          width: calcRem(779),
          height: calcRem(219),
          marginTop: calcRem(280),
          marginLeft: calcRem(0), // TODO: We should not need this.
        }}
      >
        <Product
          logo={<DoubleArrow />}
          href="https://dex.polarfox.io"
          linkTitle="Open app"
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
      <style jsx>{`
        .hover-trigger .hover-target {
          display: none;
        }

        .hover-trigger:hover .hover-target {
          display: flex;
        }
      `}</style>
    </div>
  );
}

interface ProductProps {
  logo: ReactNode;
  href: string;
  linkTitle: string;
  children: ReactNode;
}

function Product({ logo, href, linkTitle, children }: ProductProps) {
  return (
    <div style={{ width: calcRem(137) }}>
      <Link href={href}>
        <a>
          <div
            className="flex rounded-xl hover:bg-gray-dark mx-3 p-3 pt-4"
            style={{
              height: calcRem(121),
            }}
          >
            {logo}
            <div
              className={classNames("absolute self-end font-semibold")}
              style={{
                fontSize: calcRem(12),
                lineHeight: calcRem(14),
                width: calcRem(80),
              }}
            >
              {children}
            </div>
          </div>
        </a>
      </Link>
      <Link href={href}>
        <a
          className="border border-blue rounded-xl border-opacity-10 mt-2 flex items-center justify-between font-semibold pl-4 hover:bg-blue hover:text-white"
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
