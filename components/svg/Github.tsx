function GitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="#001937"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.26.744A10.513 10.513 0 00.743 11.259c0 4.654 3.01 8.584 7.19 9.977.526.092.723-.223.723-.5 0-.249-.013-1.077-.013-1.958-2.642.487-3.326-.644-3.536-1.235-.119-.303-.631-1.236-1.078-1.486-.368-.197-.894-.683-.013-.696.828-.014 1.42.762 1.616 1.078.947 1.59 2.459 1.143 3.063.867.092-.683.368-1.143.67-1.406-2.34-.263-4.784-1.17-4.784-5.193 0-1.143.407-2.09 1.078-2.826-.105-.263-.473-1.34.105-2.786 0 0 .88-.276 2.892 1.077a9.758 9.758 0 012.629-.354c.894 0 1.787.118 2.629.354 2.01-1.367 2.892-1.077 2.892-1.077.578 1.446.21 2.523.105 2.786.67.736 1.078 1.67 1.078 2.826 0 4.036-2.458 4.93-4.798 5.193.38.328.71.96.71 1.945 0 1.407-.014 2.537-.014 2.892 0 .276.198.605.723.5 4.154-1.394 7.164-5.337 7.164-9.977C21.775 5.45 17.07.743 11.26.743z"
        // fill={props.color ?? '#001937'}
      />
    </svg>
  );
}

export default GitHub;
