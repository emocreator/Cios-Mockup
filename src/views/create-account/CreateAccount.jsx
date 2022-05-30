import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";

function CreateAccount() {
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
      </div>
      <div>
        <Button text="Create account" icon="arrowright.svg" />
      </div>
    </Auth>
  );
}

export default CreateAccount;
