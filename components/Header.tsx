import classNames from 'classnames';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  classNames();
  return (
    <div className={classNames('flex justify-between items-center', className)}>
      <div className="flex items-center">
        <img
          src="/polarfox-logo.jpg"
          alt="Polarfox logo"
          width="56"
          height="56"
        />
        <span className="ml-4 text-2xl">polarfox</span>
      </div>

      <div className="text-xs">Products</div>
      <div className="text-xs">About</div>
      <div className="text-xs">Roadmap</div>
      <div className="text-xs">FAQ</div>
      <div className="text-xs">Resources</div>
    </div>
  );
}
