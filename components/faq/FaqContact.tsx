import classNames from "classnames";
import Link from "next/link";
import { calcRem } from "../../utils/styles";

interface FaqContactProps {
  marginTop?: number;
}

export function FaqContact({ marginTop }: FaqContactProps) {
  return (
    <div className={classNames("border-t-2 border-blue")} style={{marginTop: calcRem(marginTop || 0)}}>
      <div className="mt-8">
        <h3
          className="font-switzer font-semibold"
          style={{
            maxWidth: calcRem(357),
            fontSize: calcRem(20),
            lineHeight: calcRem(32),
          }}
        >
          Couldn&apos;t find what you are looking for?
        </h3>
        <p className="mt-12 text-gray">
          No problem, feel free to contact us directly or ask in our community
          channels on Telegram or Twitter.
          {/* TODO: Add some links */}
        </p>
        <button
          className="mt-12 rounded-full border border-blue bg-white font-semibold"
          style={{ width: calcRem(166), height: calcRem(44) }}
        >
          <Link href="/faq">
            <a>Contact us</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
