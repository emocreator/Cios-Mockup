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
      <SelectField
          label="Which payment method do you use to pay rent?"
          id={5674556}
          options={[
            {
              name: "Select an option from the dropdown",
              value: "Landlord",
            },
            {
              name: "Landlord 2",
              value: "Landlord 2",
            },
            {
              name: "Landlord 3",
              value: "Landlord 3",
            },
          ]}
        />
      <SelectField
          label="How often do you miss or are late on a rent payment?"
          id={5674556}
          options={[
            {
              name: "Select an option from the dropdown",
              value: "Landlord",
            },
            {
              name: "Landlord 2",
              value: "Landlord 2",
            },
            {
              name: "Landlord 3",
              value: "Landlord 3",
            },
          ]}
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
