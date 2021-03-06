export function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4688 30.8C6.9256 30.8 0 23.9052 0 15.4C0 6.89481 6.9256 0 15.4688 0C24.0119 0 30.9375 6.89481 30.9375 15.4C30.9375 23.9052 24.0119 30.8 15.4688 30.8ZM15.4688 28C22.4586 28 28.125 22.3588 28.125 15.4C28.125 8.44121 22.4586 2.8 15.4688 2.8C8.4789 2.8 2.8125 8.44121 2.8125 15.4C2.8125 22.3588 8.4789 28 15.4688 28Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6819 18.6101C21.231 19.1568 21.231 20.0432 20.6819 20.59C20.1327 21.1367 19.2423 21.1367 18.6931 20.59L14.4744 16.39C14.2107 16.1274 14.0625 15.7713 14.0625 15.4V7.00001C14.0625 6.22681 14.6921 5.60001 15.4687 5.60001C16.2454 5.60001 16.875 6.22681 16.875 7.00001V14.8201L20.6819 18.6101Z"
        fill="white"
      />
    </svg>
  )
}

export default Clock
