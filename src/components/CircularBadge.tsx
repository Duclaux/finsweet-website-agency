function CircularBadge({ text }: { text: string }) {
  const radius = 58;
  return (
    <svg viewBox="0 0 200 200" width="150" height="150">
      <defs>
        <path
          id="circlePath"
          d={`M 100, 100 m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
        />
      </defs>

      <text fill="#F5941D" fontSize="16" fontWeight="bold" letterSpacing="2">
        <textPath href="#circlePath" startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

export default CircularBadge;
