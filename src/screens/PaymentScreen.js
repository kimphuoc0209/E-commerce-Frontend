import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../Redux/Action/cartActions";
import Header from "./../components/Header";
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";

const PaymentScreen = () => {
  window.scrollTo(0, 0);

  let navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("");

  const toastId = React.useRef(null);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Please choose payment method",
          Toastobjects
        );
      }
    } else {
      dispatch(savePaymentMethod(paymentMethod));
      navigate("/placeorder");
    }
  };
  return (
    <>
      <Toast />
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value={"Paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal or Credit Card</label>
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value={"COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">COD</label>
            </div>
          </div>

          <button className="button_hover" type="submit">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
