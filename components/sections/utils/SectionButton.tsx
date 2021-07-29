import Link from 'next/link';
import { ReactNode } from 'react';
import { calcRem } from '../../../utils/styles';

interface SectionButtonProps {
  href: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

export function SectionButton({
  href,
  target,
  rel,
  children,
}: SectionButtonProps) {
  return (
    <Link href={href} passHref={true}>
      <a
        target={target}
        rel={rel}
        className="section-button flex justify-center items-center rounded-full border border-blue bg-white font-semibold hover:bg-blue hover:text-white"
      >
        {children}
        <style jsx>{`
          .section-button {
            height: ${calcRem(44)};
          }

          @media (min-width: 1200px) {
            .section-button {
              max-width: ${calcRem(166)};
            }
          }
        `}</style>
      </a>
    </Link>
  );
}
