import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant, children, onClick }) => {
  const baseStyles =
    "px-6 py-2 rounded-full text-lg transition-all duration-300 items-center flex justify-center  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer",
    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white hover:cursor-pointer",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
