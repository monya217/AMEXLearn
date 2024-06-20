const playerGreenIcon = ({ size = 24, active = false }) => {
  return (
    <svg
      height={size}
      width={size}
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`fill-current !text-white`}
    >
      <polygon
        points="21.57 12 5.98 3 5.98 21 21.57 12"
        fill="currentColor"
      ></polygon>
    </svg>
  );
};

const PauseIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h16v16H0z" />
      <path d="M3 2h3v12H3zm7 0h3v12h-3z" fill="currentColor" />
    </svg>
  );
};


const PlayIcon = ({ size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" />
    </svg>
  );
};


const Icon = ({
  name = "default",
  size = 24,
  active = false,
  style = null,
}) => {
  const icons = {
    playerGreen: playerGreenIcon,
    play: PlayIcon,
    pause: PauseIcon,
  };

  const Component = icons[name];
  return <Component size={size} active={active} style={style} />;
};

export { Icon };