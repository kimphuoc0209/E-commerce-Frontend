import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import NotFound from "./screens/NotFound";
import SingleProduct from "./screens/SingleProduct";
import CartScreen from "./screens/CartScreen";
import PrivateRouter from "./PrivateRouter";
import ConfirmEmail from "./screens/ConfirmEmail";
import ShipperRegister from "./screens/ShipperRegister";
import ShipperHome from "./screens/ShipperHome";
import ShipperRouter from "./ShipperRouter";
import ShipperOrder from "./screens/ShipperOrder";
import ShipperProfileScreen from "./screens/ShipperProfileScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search/:keyword" element={<HomeScreen />} exact />
          <Route path="/page/:pagenumber" element={<HomeScreen />} />
          <Route
            path="/search/:keyword/page/:pageNumber"
            element={<HomeScreen />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRouter>
                <ProfileScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/order/:id"
            element={
              <PrivateRouter>
                <OrderScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/placeorder"
            element={
              <PrivateRouter>
                <PlaceOrderScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/shipping"
            element={
              <PrivateRouter>
                <ShippingScreen />
              </PrivateRouter>
            }
          />
          {/* <Route path="/login/shipping" element={<ShippingScreen />} /> */}
          <Route
            path="/payment"
            element={
              <PrivateRouter>
                <PaymentScreen />
              </PrivateRouter>
            }
          />
          <Route
            path="/shipper"
            element={
              <ShipperRouter>
                <ShipperHome />
              </ShipperRouter>
            }
          />
          <Route
            path="/shipper/order/:id"
            element={
              <ShipperRouter>
                <ShipperOrder />
              </ShipperRouter>
            }
          />
          <Route
            path="/shipper/profile"
            element={
              <ShipperRouter>
                <ShipperProfileScreen />
              </ShipperRouter>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register/emailsent" element={<ConfirmEmail />} />
          <Route path="/register/shipper" element={<ShipperRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart/:productId" element={<CartScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
