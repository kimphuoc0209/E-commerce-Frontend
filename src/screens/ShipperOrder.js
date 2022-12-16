import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../Redux/Action/OrderActions";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import moment from "moment";
import {
  shipperConfirmOrder,
  shipperDeliveredOrder,
  shipperPickOrder,
  shipperShippingOrder,
} from "../Redux/Action/shipperActions";
import Sidebar from "../components/ShipperComponents/Sidebar";
import Header from "../components/ShipperComponents/Header";
// import { SHIPPER_PICK_ORDER_RESET } from "../Redux/Constants/ShipperConstants";

const ShipperOrder = () => {
  let params = useParams();
  window.scrollTo(0, 0);
  const orderId = params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const shipperConfirm = useSelector((state) => state.shipperConfirm);
  const { loading: loadingConfirmed, success: successConfirmed } =
    shipperConfirm;

  const shipperPick = useSelector((state) => state.shipperConfirm);
  const { loading: loadingPicked, success: successPicked } = shipperPick;

  const shipperShipping = useSelector((state) => state.shipperShipping);
  const { loading: loadingShipping, success: successShipping } =
    shipperShipping;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successConfirmed, successPicked, successShipping]);

  const confirmedHandler = () => {
    dispatch(shipperConfirmOrder(order));
    dispatch(getOrderDetails(orderId));
  };

  const pickedHandler = () => {
    dispatch(shipperPickOrder(order));
    dispatch(getOrderDetails(orderId));
  };

  const shippingHandler = () => {
    dispatch(shipperShippingOrder(order));
    dispatch(getOrderDetails(orderId));
  };

  const deliveredHandler = () => {
    dispatch(shipperDeliveredOrder(order));
    dispatch(getOrderDetails(orderId));
  };

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <div className="container">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              <section className="content-main" style={{ maxWidth: "1600px" }}>
                <div className="content-header">
                  <Link
                    to="/shipper/profile"
                    className="btn btn-danger text-white"
                  >
                    BACK
                  </Link>
                </div>
                <div className="row order-detail">
                  <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                    <div className="row">
                      <div className="col-md-4 center">
                        <div className="alert-success order-box">
                          <i className="fas fa-user"></i>
                        </div>
                      </div>
                      <div className="col-md-8 center">
                        <h5>
                          <strong>Customer</strong>
                        </h5>
                        <p>{order.user.name}</p>
                        <p>
                          <a href={`mailto:${order.user.email}`}>
                            {order.user.email}
                          </a>
                        </p>
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
                        <p>Shipping: {order.shippingAddress.country}</p>
                        <p>Pay method: {order.paymentMethod} </p>
                        {order.isPaid ? (
                          <div className="bg-info p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Paid on {moment(order.paidAt).calendar()}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-danger p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Not Paid
                            </p>
                          </div>
                        )}
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
                          Address: {order.shippingAddress.city},{" "}
                          {order.shippingAddress.address},
                        </p>
                        <p>Phone number: {order.shippingAddress.postalCode}</p>
                        {order.isVerified ? (
                          <div className="bg-info p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Order Confirmed At:{" "}
                              {moment(order.verifiedAt).format(
                                "MMM Do YYYY, h:mm:ss A"
                              )}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-danger p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Not Confirm
                            </p>
                          </div>
                        )}
                        {order.confirmShipping ? (
                          <div className="bg-info p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Picking Up Order
                            </p>
                          </div>
                        ) : null}
                        {order.isPicked ? (
                          <div className="bg-info p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Successful Pick Up At:{" "}
                              {moment(order.pickedAt).format(
                                "MMM Do YYYY, h:mm:ss A"
                              )}
                            </p>
                          </div>
                        ) : null}
                        {order.isShipping ? (
                          <div className="bg-info p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Delivery In Progress
                            </p>
                          </div>
                        ) : null}
                        {order.isDelivered ? (
                          <div className="bg-info p-2 col-12">
                            <p className="text-white text-center text-sm-start">
                              Delivery Successful At:{" "}
                              {moment(order.deliveredAt).format(
                                "MMM Do YYYY, h:mm:ss A"
                              )}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row order-products justify-content-between">
                  <div className="col-lg-8">
                    {order.orderItems.length === 0 ? (
                      <Message variant="alert-info mt-5">
                        Your order is empty
                      </Message>
                    ) : (
                      <>
                        {order.orderItems.map((item, index) => (
                          <div className="order-product row" key={index}>
                            <div className="col-md-3 col-6">
                              <img src={item.image} alt={item.name} />
                            </div>
                            <div className="col-md-5 col-6 d-flex align-items-center">
                              <Link to={`/products/${item.product}`}>
                                <h6>{item.name}</h6>
                              </Link>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                              <h4>QUANTITY</h4>
                              <h6>{item.qty}</h6>
                            </div>
                            <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                              <h4>SUBTOTAL</h4>
                              <h6>${item.qty * item.price}</h6>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  {/* total */}
                  <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Products</strong>
                          </td>
                          <td>${order.itemsPrice}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Shipping</strong>
                          </td>
                          <td>${order.shippingPrice}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Tax</strong>
                          </td>
                          <td>${order.taxPrice}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>${order.totalPrice}</td>
                        </tr>
                      </tbody>
                    </table>
                    {!order.confirmShipping && (
                      <>
                        {/* {loadingConfirmed && <Loading />} */}
                        <button
                          onClick={confirmedHandler}
                          className="btn btn-success col-12"
                        >
                          Receive Order
                        </button>
                      </>
                    )}
                    {!order.isPicked && order.confirmShipping && (
                      <>
                        {/* {loadingConfirmed && <Loading />} */}
                        <button
                          onClick={pickedHandler}
                          className="btn btn-success col-12"
                        >
                          Successful Pick Up
                        </button>
                      </>
                    )}
                    {!order.isShipping && order.isPicked && (
                      <>
                        {/* {loadingConfirmed && <Loading />} */}
                        <button
                          onClick={shippingHandler}
                          className="btn btn-success col-12"
                        >
                          Delivery Order
                        </button>
                      </>
                    )}
                    {!order.isDelivered && order.isShipping && (
                      <>
                        {/* {loadingConfirmed && <Loading />} */}
                        <button
                          onClick={deliveredHandler}
                          className="btn btn-success col-12"
                        >
                          Delivery Successful
                        </button>
                      </>
                    )}
                    {order.isDelivered && null}
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ShipperOrder;
