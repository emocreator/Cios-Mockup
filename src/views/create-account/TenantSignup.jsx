import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";
import { useNavigate } from "react-router-dom";

function TenantSignup() {
  const navigate = useNavigate();
  return (
    <Auth title="Cios for tenants.">
      <div className="flex flex-col gap-6">
      <TextField
          label="Which payment method do you use to pay rent?"
          type="text"
          id={6765345345}
          placeholder="Select an option from the dropdown"
        />
        <TextField
          label="How often do you miss or are late on a rent payment?"
          type="text"
          id={6765345345}
          placeholder="Select an option from the dropdown"
        />
        <TextField
          label="What is the common reason you miss or are late on rent?"
          type="text"
          id={6765345345}
          placeholder="Type your answer here"
        />
      </div>
      <div>
        <Button
          onClick={() => navigate("")}
          text="Finish signup"
          icon="arrowright.svg"
        />
      </div>
    </Auth>
  );
}

export default TenantSignup;
