import moment from "moment";
import React from "react";
// import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const OrdersShipper = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <>
          {orders.length === 0 ? (
            <div className="col-12 alert alert-info text-center mt-3">
              No Orders
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DELIVERY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      className={`${
                        order.isPaid ? "alert-success" : "alert-danger"
                      }`}
                      key={order._id}
                    >
                      <td>{order.user}</td>
                      <td>
                        <a
                          href={`/shipper/order/${order.orderId}`}
                          className="link"
                        >
                          {order.orderId}
                        </a>
                      </td>
                      <td>{order.isPaid ? <>Paid</> : <>Not Paid</>}</td>
                      <td>
                        {order.isDelivered
                          ? moment(order.deliveredAt).calendar()
                          : <>Not Delivery</>}
                      </td>
                      <td>${order.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default OrdersShipper;
