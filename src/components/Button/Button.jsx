function Button({
  children,
  handleClick,
  style = "primary",
  shadow = false,
  type = "button",
}) {
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
}
