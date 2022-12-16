const Button = ({ children, classname, onclick }) => {
  return (
    <button onClick={onclick} className={`w-24 h-8 ${classname}`}>
      {children}
    </button>
  );
};

export default Button;
