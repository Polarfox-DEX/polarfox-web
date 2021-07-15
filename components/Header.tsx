import classNames from "classnames";
import Link from 'next/link';
import { calcRem } from '../utils/styles';

interface PropsSectionProps {
  className?: string;
}

export function Header({ className }: PropsSectionProps) {
  return (
    <div className={classNames(className, "flex justify-between w-full px-14 py-4 absolute")}>
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
        <div>Products</div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <div>Roadmap</div>
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        <div>Resources</div>
      </div>
    </div>
  );
}
