const Button = ({ type, onClick, size, className, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className}
      ${
        size === "full" 
        ?"w-full text-base gap-2 hover:gap-3 " 
        :size==="wide"?"mx-auto px-6 gap-3 hover:gap-5"
        : "text-sm px-3 gap-1 hover:gap-2"
      }
       font-semibold flex justify-center items-center py-3 bg-red-700 rounded text-white font-normal duration-200 hover:bg-red-800`}
    >
      {children}
    </button>
  );
};

export default Button;
