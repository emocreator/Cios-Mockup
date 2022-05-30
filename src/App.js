import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CiosThanks from "./views/get-early-access/cios-thanks/CiosThanks";
import CreateAccountError from "./views/create-account/CreateAccountError";
import GetEarlyAccess from "./views/get-early-access/GetEarlyAccess";
import AcceptInvite from "./views/accept-invite/AcceptInvite";
import Login from "./views/login/Login";
import Reset from "./views/reset/Reset";
import TAcceptInvite from "./views/accept-invite/TAcceptInvite";
import TenantSignup from "./views/create-account/TenantSignup";
import LandlordSignup from "./views/create-account/LandlordSignup"
import CreateAccount from "./views/create-account/CreateAccount";
function App() {
  return (
    <BrowserRouter>
      <CreateAccount />
      <LandlordSignup />
      <Routes>
        <Route path="/">
          <Route index element={<CreateAccountError />} />
          <Route path="get-early-access">
            <Route index element={<GetEarlyAccess />} />
            <Route path="thanks" element={<CiosThanks />} />
          </Route>
          <Route path="accept-invite" element={<AcceptInvite />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
