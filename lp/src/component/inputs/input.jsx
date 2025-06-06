import React from "react";

function Input({
  type,
  name,
  placeHolder,
  value,
  label,
  className,
  inputClassName,
  ...props
}) {
  return (
    <div className={`grid text-left ${className}`}>
      <label htmlFor="name" className="font-semibold">
        {label}
      </label>
      <input
        className={` rounded-sm  p-2 border border-gray-950 placeholder:text[16px] ${inputClassName}`}
        type={type}
        name={name}
        placeholder={placeHolder}
        value={value}
        {...props}
        //   onChange={handleChange}
        // onChange={(e) => {
        //   const value = e.target.value;
        //   if (/^[0-9]*$/.test(value) && value.length <= 10) {
        //     handleChange(e);
        //   }
        // }}
      />
    </div>
  );
}

export default Input;
