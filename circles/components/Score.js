const CircleFull = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    >
      <circle cx="16" cy="16" r="14" />
    </g>
  </svg>
);

const CircleHalf = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    >
      <path d="m 17 2 a 1 1 0 0 0 0 28 z" />
    </g>
  </svg>
);

window.Score = ({ value }) => {
  return React.useMemo(() => {
    const result = [];

    let counter = parseFloat(value) || 0;
    while (counter > 0) {
      if (counter >= 1) {
        result.push(<CircleFull />);
        counter = counter - 1;
      } else {
        result.push(<CircleHalf />);
        counter = 0;
      }
    }

    return result;
  }, [value]);
};
