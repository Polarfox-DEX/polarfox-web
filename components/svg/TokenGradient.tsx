export function TokenGradient(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M59.9998 30.0244C59.9977 46.6535 46.5931 60.0063 29.9078 60C13.3464 59.9937 -0.0123188 46.5628 8.52488e-06 29.9307C0.0125172 13.3159 13.4365 -0.0159388 30.1373 1.43022e-05C46.6462 0.0159674 60.002 13.4441 59.9998 30.0244ZM14.1109 30.1221C20.8583 34.1111 25.8003 39.8167 30.2441 46.0737C33.9528 39.1091 39.9617 34.5672 46.0906 30.0873C39.2277 26.2049 34.4581 20.3712 30.0719 14.0467C25.6348 20.3023 20.9281 26.1663 14.1109 30.1221Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="29.9999"
          y1="0"
          x2="29.9999"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default TokenGradient
