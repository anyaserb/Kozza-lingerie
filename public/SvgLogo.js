export default function SvgLogo(props) {
  return (
    <svg className={props.className}
      viewBox="0 0 262 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y={1} width={5} height={58} fill="black" />
      <path
        d="M31 1L5 27.9286L31 59H37.5L12 27.9286L37.5 1H31Z"
        fill="black"
        stroke="black"
      />
      <circle cx={72} cy={30} r="26.5" stroke="black" strokeWidth={5} />
      <path
        d="M218.5 58H212L237 2L261 58H255L237 14.5517L218.5 58Z"
        fill="black"
        stroke="black"
      />
      <path
        d="M114 6V2H151L118.236 53.5H151.5V58H110L143 6H114Z"
        fill="black"
        stroke="black"
      />
      <path
        d="M166 6V2H203L170.236 53.5H203.5V58H162L195 6H166Z"
        fill="black"
        stroke="black"
      />
    </svg>
  );
}
