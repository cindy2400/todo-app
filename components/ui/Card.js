const Card = ({ className, children }) => {
  return (
    <div className={`box-content p-4 m-2 border-2 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
