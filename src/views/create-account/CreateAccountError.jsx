import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";

function CreateAccountError() {
  return (
    <Auth title="Create your Cios account.">
      <div className="flex flex-col gap-6">
        <TextField
          label="Email"
          type="email"
          id={3928492378}
          placeholder="john.doe@email.com"
        />
        <TextField
          label="Password"
          type="password"
          id={6765345345}
          placeholder="Type here"
          helperText="Password must be minimum 8 characters"
        />
        <TextField
          label="Confirm password*"
          type="password"
          id={345345455}
          placeholder="Type here"
        />
        <div className="flex p-3 bg-error gap-[10px] rounded">
          <img src="/images/warning.svg" alt="" width="21" height="21" />
          <p className="text-xl text-cream-white">
            Your passwords do not match.
          </p>
        </div>
      </div>
      <div>
        <Button text="Create account" icon="arrowright.svg" disabled />
      </div>
    </Auth>
  );
}

export default CreateAccountError;
