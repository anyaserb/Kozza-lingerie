export default function SvgCheckMark(props) {
  return (
    <svg
      className={props.svgCheckMark}
      width={15}
      height={11}
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7803 0.219369C14.4874 -0.073123 14.0126 -0.073123 13.7197 0.219369L4.73421 9.19209L1.28035 5.74316C0.987465 5.45067 0.512621 5.4507 0.219682 5.74316C-0.0732275 6.03562 -0.0732275 6.50979 0.219682 6.80228L4.20388 10.7807C4.49667 11.0732 4.97186 11.073 5.26454 10.7807L14.7803 1.27852C15.0732 0.986055 15.0732 0.511861 14.7803 0.219369Z"
        className={props.svgCheckMarkColor}
      />
    </svg>
  );
}
