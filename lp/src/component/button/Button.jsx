import React from "react";

function Button({ children, className, type, ...props }) {
  return (
    <button type={type} {...props} className={` ${className}`}>
      {children}
    </button>
  );
}

export default Button;
