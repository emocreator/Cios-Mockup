import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";

function TAcceptInvite() {
  return (
    <Auth title="Your tenant John Doe has invited you to Cios.">
      <div className="text-1xl text-white flex flex-col gap-2">
        <p className="">
          Cios is a payment platform trusted by landlords and tenants that helps
          you stop worrying about rent by aligning your payments with your cash
          flow, and providing simple repayment plans for unpaid rent.
        </p>
        <p>Cios is free to sign up. To learn more, visit cios.</p>
        <p>
          To learn more, visit{" "}
          <a
            href="http://cios.so/tenants"
            target="_blank"
            className="underline"
          >
            cios.so/tenants
          </a>
          .
        </p>
      </div>
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
        <Button text="Accept invite" icon="arrowright.svg" />
      </div>
    </Auth>
  );
}

export default TAcceptInvite;
