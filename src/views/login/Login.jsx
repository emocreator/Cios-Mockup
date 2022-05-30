import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";

function Login() {
  return (
    <Auth title="Log into your Cios account.">
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
        />
        <div className="flex justify-between">
          <a href="#" className="text-xl underline text-opacity-50 text-white">
            Reset password
          </a>
          <a href="#" className="text-xl underline text-opacity-50 text-white">
            Sign up for Cios
          </a>
        </div>
      </div>

      <div>
        <Button text="Login" icon="arrowright.svg" />
      </div>
    </Auth>
  );
}

export default Login;
