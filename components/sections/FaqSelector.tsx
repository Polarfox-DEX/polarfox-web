import { calcRem } from "../../utils/styles";

export function FaqSelector() {
  return (
    <div>
      <div
        className="opacity-50"
        style={{
          fontSize: calcRem(12),
          lineHeight: calcRem(14.1),
          letterSpacing: calcRem(3),
        }}
      >
        FAQ
      </div>
      <h2
        className="font-switzer font-semibold mt-1"
        style={{
          maxWidth: calcRem(357),
          fontSize: calcRem(50),
          lineHeight: calcRem(65),
        }}
      >
        Help Center
      </h2>
      <div className="mt-12">
        <button
          className="mt-5 rounded-lg border border-blue bg-blue text-white"
          style={{ width: calcRem(386), height: calcRem(55) }}
        >
          <div>
            <h3 className="float-left mx-5 font-bold font text-xl">Polarfox</h3>
            <p className="float-right mx-5 font-normal text-sm mt-1">12</p>
            {/* TODO: Should not have to use mt-1 above */}
          </div>
        </button>
        <button
          className="mt-5 text-blue"
          style={{ width: calcRem(386), height: calcRem(55) }}
        >
          <div>
            <h3 className="float-left mx-5 font-bold font text-xl">
              PFX token
            </h3>
            <p className="float-right mx-5 font-normal text-sm mt-1">8</p>
            {/* TODO: Should not have to use mt-1 above */}
          </div>
        </button>
        <button
          className="mt-5 text-blue"
          style={{ width: calcRem(386), height: calcRem(55) }}
        >
          <div>
            <h3 className="float-left mx-5 font-bold font text-xl">
              Akita Inu
            </h3>
            <p className="float-right mx-5 font-normal text-sm mt-1">6</p>
            {/* TODO: Should not have to use mt-1 above */}
          </div>
        </button>
      </div>
    </div>
  );
}
