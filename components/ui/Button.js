const Button = ({ children, classname }) => {
  return <button className={`w-24 h-8 ${classname}`}>{children}</button>;
};

export default Button;
