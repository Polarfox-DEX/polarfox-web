import { ReactNode } from "react";
import { calcRem } from "../../utils/styles";

interface QuestionProps {
  question: string;
  isOpen: boolean;
  isFirst?: boolean;
  children: ReactNode;
}

export function Question({
  question,
  isOpen,
  isFirst,
  children,
}: QuestionProps) {
  return (
    <>
      <h3
        className={
          "flex justify-between py-3 font-bold" +
          (isFirst === undefined ? " border-t-2 border-gray-light" : "")
        }
        style={{
          fontSize: calcRem(26),
          lineHeight: calcRem(50),
        }}
      >
        <div>{question}</div>
        <div>{isOpen ? "-" : "+"}</div>
        {/* TODO: Make this a button (or two distinct buttons that have the same effect) */}
      </h3>
      {isOpen ? (
        <div
          className="mt-3 mb-8 text-gray"
          style={{ lineHeight: calcRem(30) }}
        >
          {children}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
