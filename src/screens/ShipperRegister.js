import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { Register } from "../Redux/Action/shipperActions";
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";

const ShipperRegister = () => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shipperRegister = useSelector((state) => state.shipperRegister);
  const { error, loading, userInfo } = shipperRegister;

  const toastId = React.useRef(null);

  const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  useEffect(() => {
    if (userInfo) {
      navigate(`/register/emailsent`);
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Password does not match", Toastobjects);
      }
    } else {
      dispatch(Register(name, email, password));
    }
  };

  return (
    <>
      <Toast />
      <Header />
      <div className="container text-center">
        <h1>Shipper Register</h1>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Username"
            pattern="[A-Za-z0-9]{6,15}"
            // title="Username must contain letters, numbers only and about 6-15 characters in length"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            pattern=".{8,}"
            title="Must contain at least 8 or more characters"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            required
            pattern=".{8,}"
            title="Must contain at least 8 or more characters"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Register</button>
          <p>
            <Link to={`/register`}>
              Register as User <strong>Now</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ShipperRegister;
