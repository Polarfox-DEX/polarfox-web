import classNames from "classnames";
import Link from "next/link";
import { calcRem } from "../utils/styles";
import { SectionProps } from "./utils/SectionProps";
import { ReactNode } from "react";

export function Header({ className }: SectionProps) {
  return (
    <div
      className={classNames(
        "flex justify-between w-full px-14 py-4 absolute",
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
          className="rounded-3xl bg-gray-mid2 flex items-center justify-between -mr-5"
          style={{ width: calcRem(110), height: calcRem(44) }}
        >
          <div className="ml-4">Products</div>
          <img
            src="menu-arrow.png"
            alt="↓"
            className="mr-4"
            style={{ height: calcRem(8), width: calcRem(8) }}
          />
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
      className="bg-white rounded-xl absolute"
      style={{
        width: calcRem(779),
        height: calcRem(219),
        marginTop: calcRem(300),
        marginLeft: calcRem(-16),
      }}
    >
      <div className="flex justify-between space-x-3 mx-4 my-6">
        <Product
          imgPath="exchange.png"
          imgAlt="exchange"
          imgWidth={23}
          imgHeight={20}
          href="https://dex.polarfox.io"
          linkTitle="Open app"
          textClass="mt-11"
        >
          Decentralized Exchange
        </Product>
        <Product
          imgPath="analytics.png"
          imgAlt="analytics"
          imgWidth={30}
          imgHeight={20}
          href="https://analytics.polarfox.io"
          linkTitle="Open app"
        >
          Analytics
        </Product>
        <Product
          imgPath="mining.png"
          imgAlt="mining"
          imgWidth={20}
          imgHeight={20}
          href="https://dex.polarfox.io/#/pfx"
          linkTitle="Open app"
        >
          Mining Pools
        </Product>
        <Product
          imgPath="bridge.png"
          imgAlt="bridge"
          imgWidth={20}
          imgHeight={20}
          href="https://bridge.polarfox.io"
          linkTitle="Open app"
        >
          Bridge
        </Product>
        <Product
          imgPath="akita.png"
          imgAlt="akita"
          imgWidth={24}
          imgHeight={24}
          href="https://akita.network"
          linkTitle="Visit site"
        >
          AKITA Network
        </Product>
      </div>
    </div>
  ) : (
    <div className="absolute" />
  );
}

interface ProductProps {
  imgPath: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  href: string;
  linkTitle: string;
  textClass?: string;
  className?: string;
  children: ReactNode;
}

function Product({
  imgPath,
  imgAlt,
  imgWidth,
  imgHeight,
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
            // TODO: delete borders (except for linkTitle)
            className="border border-white rounded-xl hover-target hover:bg-gray-dark"
            style={{
              height: calcRem(121),
            }}
          >
            <div className="mx-3 h-full">
              <img
                src={imgPath}
                alt={imgAlt}
                className="mt-4"
                style={{ height: calcRem(imgHeight), width: calcRem(imgWidth) }}
              />
              <div
                className={classNames("font-semibold", textClass || "mt-14")}
                style={{ fontSize: calcRem(12), lineHeight: calcRem(14) }}
              >
                {children}
              </div>
            </div>
          </div>
        </a>
      </Link>
      <Link href={href}>
        <a>
          <div
            className="border border-blue rounded-xl border-opacity-10 mt-2 flex items-center justify-between"
            style={{
              height: calcRem(40),
            }}
          >
            <div
              className="font-semibold ml-4 hover-trigger"
              style={{ fontSize: calcRem(14) }}
            >
              {linkTitle}
            </div>
            <img
              src="top-right-arrow.png"
              alt="⬈"
              className="mx-4"
              style={{ height: calcRem(7), width: calcRem(7) }}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
