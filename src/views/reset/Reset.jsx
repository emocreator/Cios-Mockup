import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";

function Reset() {
  return (
    <Auth title="Reset your password.">
       <div className="text-1xl text-white flex flex-col gap-2">
        <p className="">
            We will send you an email with instructions to reset your password..
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <TextField
          label="Email*"
          type="email"
          id={3928492378}
          placeholder="john.doe@email.com"
        />
        <div className="flex justify-between">
          <a href="#" className="text-xl underline text-opacity-50 text-white">
            Return to login
          </a>
        </div>
      </div>

      <div>
        <Button text="Reset password" icon="arrowright.svg" />
      </div>
    </Auth>
  );
}

export default Reset;
