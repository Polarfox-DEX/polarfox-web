import * as React from 'react'

function JapaneseFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1.3125rem"
      height="1.3125rem"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.638 17.38H.362A.362.362 0 010 17.016V3.983c0-.2.162-.362.362-.362h20.276c.2 0 .362.162.362.362v13.034c0 .2-.162.362-.362.362z"
        fill="#fff"
      />
      <path d="M10.5 14.483a3.983 3.983 0 100-7.966 3.983 3.983 0 000 7.966z" fill="#FF4B55" />
    </svg>
  )
}

export default JapaneseFlag
