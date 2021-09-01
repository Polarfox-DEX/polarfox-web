export function BridgeGradient(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M60 3.32571V23.3314C59.9785 24.2083 59.6217 25.0435 59.0031 25.6654C58.3844 26.2872 57.551 26.6482 56.6743 26.6743H38.0571L26.6743 38.0571V56.6743C26.6482 57.551 26.2872 58.3844 25.6654 59.0031C25.0435 59.6217 24.2083 59.9785 23.3314 60H3.32571C2.45186 59.9742 1.62089 59.6155 1.00271 58.9973C0.384528 58.3791 0.025845 57.5481 0 56.6743V36.6686C0.0215411 35.7917 0.378325 34.9565 0.996947 34.3346C1.61557 33.7128 2.44898 33.3518 3.32571 33.3257H21.9429L33.3257 21.9429V3.32571C33.3518 2.44898 33.7128 1.61557 34.3346 0.996947C34.9565 0.378325 35.7917 0.0215411 36.6686 0H56.6743C57.5481 0.025845 58.3791 0.384528 58.9973 1.00271C59.6155 1.62089 59.9742 2.45186 60 3.32571Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="30" y1="0" x2="30" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default BridgeGradient
