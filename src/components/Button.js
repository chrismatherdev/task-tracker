const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log("click");
  };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      Add
    </button>
  );
};

export default Button;
