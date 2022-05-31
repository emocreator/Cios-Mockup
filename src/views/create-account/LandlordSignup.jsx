import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";
import { useNavigate } from "react-router-dom";
import SelectField from "../../components/common/SelectField";

function LandlordSignup() {
  const navigate = useNavigate();
  return (
    <Auth title="Cios for landlords.">
      <div className="flex flex-col gap-6">
      <SelectField
          label="How many rental units do you own/manage?"
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
          label="What best describes your role?"
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
          label="How frequently do your tenants miss or are late on rent?"
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
          label="Which payment methods do you currently accept?"
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
          label="Which of these options is your highest priority?"
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
          label="What is your biggest challenge as a landlord?"
          type="text"
          id={6765345345}
          placeholder="Type your answer here"
        />
      </div>
      <div>
        <Button
          onClick={() => navigate("#")}
          text="Finish signup"
          icon="arrowright.svg"
        />
      </div>
    </Auth>
  );
}

export default LandlordSignup;
