import React from "react";

function Button({ text, icon, url, className, ...rest }) {
  const styled = `font-bold text-black py-2 px-6 disabled:bg-cream-grey bg-cream-white flex gap-4 items-center rounded-lg ${className}`;

  const ButtonContent = (
    <>
      <span className="text-xl">{text}</span>
      <img src={`/images/${icon}`} width="16" hegiht="21" alt="" />
    </>
  );

  return url ? (
    <a href={url} className={styled} {...rest}>
      {ButtonContent}
    </a>
  ) : (
    <button className={styled} {...rest}>
      {ButtonContent}
    </button>
  );
}
export default Button;
