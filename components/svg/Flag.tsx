function Flag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.853 10.19l2.99-4.843a1.503 1.503 0 00.041-1.515 1.487 1.487 0 00-1.305-.758H2.947v-1.6C2.947.632 2.274 0 1.474 0 .632 0 0 .674 0 1.474v37.052C0 39.368.674 40 1.474 40c.842 0 1.473-.674 1.473-1.474v-21.22H15.58c.547 0 1.053-.296 1.305-.759a1.504 1.504 0 00-.042-1.515l-2.99-4.842z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={8.534}
          y1={0}
          x2={8.534}
          y2={40}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#001937" />
          <stop offset={1} stopColor="#001937" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Flag;
