import React from "react";
import "./App.css";
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
import CartScreen from "./screens/CartScreen"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/shipping" element={<ShippingScreen />} />
          <Route path="/login/shipping" element={<ShippingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/login" element={<Login />} />
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
// 
