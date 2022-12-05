import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function ConfirmEmail() {
  const location = useLocation();
  const email = location.search ? location.search.split("=")[1] : null;
  return (
    <>
      <Header />
      <div className="container text-center">
        <h1>Account Confirmation</h1>
        <p className="lead w-lg-50 mx-auto">
          An email with your account confirmation link has been sent to your
          email: <b style={{ color: "red" }}>{email}</b>
        </p>
        <p className="lead w-lg-50 mx-auto">
          Check your email and comeback to proceed!
        </p>
      </div>
    </>
  );
}

export default ConfirmEmail;
