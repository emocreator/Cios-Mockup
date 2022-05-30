import React from "react";
import TextField from "../../components/common/TextField";
import Button from "../../components/common/Button";
import Auth from "../../components/layout/Auth";
import { useNavigate } from "react-router-dom";

function LandlordSignup() {
  const navigate = useNavigate();
  return (
    <Auth title="Cios for landlords.">
      <div className="flex flex-col gap-6">
      <TextField
          label="How many rental units do you own/manage?"
          type="text"
          id={6765345345}
          placeholder="Select an option from the dropdown"
        />
        <TextField
          label="What best describes your role?"
          type="text"
          id={6765345345}
          placeholder="Select an option from the dropdown"
        />
        <TextField
          label="How frequently do your tenants miss or are late on rent?"
          type="text"
          id={6765345345}
          placeholder="Select an option from the dropdown"
        />
        <TextField
          label="Which payment methods do you currently accept?"
          type="text"
          id={6765345345}
          placeholder="Select an option from the dropdown"
        />
        <TextField
          label="Which of these options is your highest priority?"
          type="text"
          id={6765345345}
          placeholder="Select an option from the dropdown"
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
