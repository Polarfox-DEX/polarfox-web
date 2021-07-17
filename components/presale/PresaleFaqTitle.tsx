import { calcRem } from "../../utils/styles";

export function PresaleFaqTitle() {
  return (
    <div style={{ width: calcRem(386)}}>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3),
        }}
      >
        MOST COMMON QUESTIONS
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          maxWidth: calcRem(357),
          fontSize: calcRem(50),
          lineHeight: calcRem(65),
        }}
      >
        Presale FAQ
      </h2>
    </div>
  );
}
