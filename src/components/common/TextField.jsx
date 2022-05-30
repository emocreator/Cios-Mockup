import React from "react";

function TextField({ id, label, helperText, ...rest }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-bold text-cream-white">
        {label}
      </label>
      <input
        className="placeholder:text-opacity-50 text-xl p-3 bg-grey focus:outline-none rounded font-normal w-full text-cream-white"
        type="text"
        id={id}
        {...rest}
      />
      <p className="text-lg text-opacity-50 text-cream-white">{helperText}</p>
    </div>
  );
}

export default TextField;
