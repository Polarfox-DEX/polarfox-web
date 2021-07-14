import { ReactNode } from "react";
import { calcRem } from "../../utils/styles";

interface QuestionProps {
  question: string;
  isOpen: boolean;
  children: ReactNode;
}

export function Question({ question, isOpen, children }: QuestionProps) {
  return (
    <div>
      <h3
        className={"flex justify-between py-3 font-bold"}
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
        <p className="mt-3 mb-8 text-gray" style={{ lineHeight: calcRem(30) }}>
          {children}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
