export function MenuArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M4.31216 6.22247L7.8722 2.66237C7.9546 2.58002 8 2.47011 8 2.3529C8 2.2357 7.9546 2.12578 7.8722 2.04344L7.61008 1.78127C7.43929 1.61067 7.1617 1.61067 6.99116 1.78127L4.00166 4.77077L1.00884 1.77795C0.926433 1.69561 0.81658 1.65015 0.699442 1.65015C0.582175 1.65015 0.472322 1.69561 0.389852 1.77795L0.127805 2.04013C0.0453992 2.12253 1.40506e-06 2.23239 1.39994e-06 2.34959C1.39481e-06 2.46679 0.0453991 2.57671 0.127805 2.65905L3.69109 6.22247C3.77376 6.305 3.88413 6.35033 4.00146 6.35007C4.11925 6.35033 4.22956 6.305 4.31216 6.22247Z"
          fill="#001937"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="8"
            height="8"
            fill="white"
            transform="translate(8) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MenuArrow
