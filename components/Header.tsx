import { calcRem } from '../utils/styles';

export function Header() {
  return (
    <div className="flex justify-between w-full px-14 py-4 absolute">
      <img src="/polarfox-logo.png" alt="Polarfox logo" />
      <div
        className="flex items-center space-x-20 font-semibold"
        style={{
          fontSize: calcRem(14),
          lineHeight: calcRem(16.45),
        }}
      >
        <div>Products</div>
        <div>About</div>
        <div>Roadmap</div>
        <div>FAQ</div>
        <div>Resources</div>
      </div>
    </div>
  );
}
