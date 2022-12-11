import React from "react";
import Header from "../components/Header";

function ConfirmEmail() {
  return (
    <>
      <Header />
      <div className="container text-center">
        <h1>Account Confirmation</h1>
        <p className="lead w-lg-50 mx-auto">
          An email with your account confirmation link has been sent to your
          email.
        </p>
        <p className="lead w-lg-50 mx-auto">
          Check your email and comeback to proceed!
        </p>
      </div>
    </>
  );
}

export default ConfirmEmail;
