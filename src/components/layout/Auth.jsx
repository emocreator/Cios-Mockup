import React from "react";
import { Link } from "react-router-dom";

function Auth({ title, children }) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 text-cream-white bg-cover bg-center bg-cream-grey">
        <div className="bg-black px-10 py-24 min-h-screen flex items-center flex-col justify-start">
          <div className="flex flex-col gap-y-10 w-full">
            <div>
              <Link to="/">
                <img src="/images/reg-loog.svg" alt="" height="34" />
              </Link>
            </div>
            <h1 className="font-lato font-extrabold text-2xl">{title}</h1>
            {children}
          </div>
        </div>
        <div
          className="bg-cream-grey bg-cover h-screen sticky top-0 bg-center hidden sm:block"
          style={{ backgroundImage: "url('/images/background.svg')" }}
        />
      </div>
    </div>
  );
}

export default Auth;
