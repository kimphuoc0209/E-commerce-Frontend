import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);

  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>Admin TanVyz</p>
                <p>tanvywa@gmail.com</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order info</strong>
                </h5>
                <p>Shipping: Kim Phuoc</p>
                <p>Pay method: Paypal</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>
                  Address: 441/35, Điện Biên Phủ, Bình Thạnh, HCM City
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* <Message variant="alert-info mt-5">Your cart is empty</Message> */}

            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="/images/1.png" alt="product" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={"/"}>
                  <h6>Vảy ốc đỏ</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                <h4>QUANTITY</h4>
                <h6>1</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                <h4>SUBTOTAL</h4>
                <h6>28000 VND</h6>
              </div>
            </div>
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  <td>25000 VND</td>
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>3000 VND</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>28000 VND</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" onClick={placeOrderHandler}>
              <Link to="/order" className="text-white">
                PLACE ORDER
              </Link>
            </button>
            {/* <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;