import * as React from 'react'

function FrenchFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1.3125rem"
      height="1.3125rem"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 17.38H.362A.362.362 0 010 17.016V3.983c0-.2.162-.362.362-.362H7v13.758z" fill="#41479B" />
      <path d="M14 3.62H7v13.76h7V3.62z" fill="#fff" />
      <path d="M20.638 17.38H14V3.62h6.638c.2 0 .362.163.362.363v13.034c0 .2-.162.362-.362.362z" fill="#FF4B55" />
    </svg>
  )
}

export default FrenchFlag
