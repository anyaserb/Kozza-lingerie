const SvgArrow = (props) => {
  return (
    <svg
      className={props.svgArrow}
      viewBox="0 0 123 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={88}
        cy={35}
        r={24}
        strokeWidth={2}
        className={props.svgCircle}
      />
      <path
        className={props.svgPath}
        d="M88.7071 35.7071C89.0976 35.3166 89.0976 34.6834 88.7071 34.2929L82.3431 27.9289C81.9526 27.5384 81.3195 27.5384 80.9289 27.9289C80.5384 28.3195 80.5384 28.9526 80.9289 29.3431L86.5858 35L80.9289 40.6569C80.5384 41.0474 80.5384 41.6805 80.9289 42.0711C81.3195 42.4616 81.9526 42.4616 82.3431 42.0711L88.7071 35.7071ZM0 36H88V34H0L0 36Z"
      />
    </svg>
  );
};

export default SvgArrow;