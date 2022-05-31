import React from "react";

function SelectField({ id, label, options, helperText, ...rest }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-bold text-cream-white">
        {label}
      </label>
      <div className="pr-3 bg-grey rounded">
        <select
          id={id}
          className="placeholder:text-opacity-50 text-xl p-3 pr-0 bg-grey focus:outline-none rounded font-normal w-full text-cream-white"
          {...rest}
        >
          {options.map(({ name, value }, i) => (
            <option value={value} key={i}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <p className="text-lg text-opacity-50 text-cream-white">{helperText}</p>
    </div>
  );
}

export default SelectField;
