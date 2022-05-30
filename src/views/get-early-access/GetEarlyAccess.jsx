import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";
import { useNavigate } from "react-router-dom";

function GetEarlyAccess() {
  const navigate = useNavigate();

  return (
    <Auth title="Get early access to Cios.">
      <div className="flex flex-col gap-6">
        <TextField
          label="Name*"
          type="text"
          id={483443}
          defaultValue="John Doe"
        />
        <TextField
          label="Email*"
          type="email"
          id={483443}
          defaultValue="john.doe@email.com"
        />
        <TextField
          label="Phone*"
          type="text"
          id={483443}
          defaultValue="+1 (123) 456-7890"
        />
        <TextField
          label="Address"
          type="text"
          id={483443}
          placeholder="Type to search for address"
          helperText={
            <a href="#" className="underline">
              I can’t find my address
            </a>
          }
        />
        <TextField
          label="What best describes you?"
          type="text"
          id={483443}
          defaultValue="Landlord"
        />
      </div>
      <div>
        <Button
          onClick={() => navigate("/get-early-access/thanks")}
          text="Continue"
          icon="arrowright.svg"
        />
      </div>
    </Auth>
  );
}

export default GetEarlyAccess;
