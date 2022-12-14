import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Action/userActions";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";

const Register = () => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  // const redirect = location.search
  //   ? location.search.split("=")[1]
  //   : "/register/emailsent";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

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
      dispatch(register(name, email, password));
    }
  };

  return (
    <>
      <Toast />
      <Header />
      <div className="container text-center">
        <h1>User Register</h1>
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
            title="Username must contain letters, numbers only and about 6-15 characters in length"
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
            <Link to={`/register/shipper`}>
              Register as Shipper <strong>Now</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
