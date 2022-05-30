import React from "react";
import TextField from "../../../components/common/TextField";
import Button from "../../../components/common/Button";
import Auth from "../../../components/layout/Auth";

function CiosThanks() {
  return (
    <Auth title="Get early access to Cios.">
      <div className="text-1xl text-white flex flex-col gap-2">
        <p className="">
          Thanks for your interest in Cios. We’re invite-only at the moment, and
          are working hard to onboard as many people as possible each week.
        </p>
        <p>
          We’ll be in touch soon - in the meantime please feel free to follow
          our progress and get the latest updates by following us on Twitter or
          Facebook.
        </p>
      </div>
      <div className="flex gap-4 md:flex-row flex-col items-start md:items-center max-w-max md:max-w-none">
        <Button
          text="Follow on Twitter"
          icon="twitter.svg"
          className="w-full md:w-auto"
          url="https://twitter.com"
          target="_blank"
        />
        <Button
          text="Follow on Facebook"
          icon="facebook.svg"
          className="w-full md:w-auto"
          url="https://facebook.com"
          target="_blank"
        />
      </div>
    </Auth>
  );
}

export default CiosThanks;
