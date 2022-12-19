import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { orders } = props;

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Total</th>
            <th scope="col">Paid</th>
            <th scope="col">Date</th>
            <th>Status</th>
            <th scope="col" className="text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((order) => {
              return order.confirmShipping === false;
            })
            .map((order) => (
              <tr key={order._id}>
                <td>
                  <b>{order.user?.name}</b>
                </td>
                <td>{order.user?.email}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert-success">
                      Paid At {moment(order.paidAt).format("MMMM Do YYYY")}
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert-danger">
                      Not Paid
                    </span>
                  )}
                </td>
                <td>{moment(order.createdAt).format("MMMM Do YYYY")}</td>
                <td>
                  {order.isVerified ? (
                    <span className="badge btn-info">Order Confirmed</span>
                  ) : (
                    <span className="badge btn-dark">Not Delivered</span>
                  )}
                </td>
                <td className="d-flex justify-content-end align-items-center">
                  <Link
                    to={`/shipper/order/${order._id}`}
                    className="text-success"
                  >
                    <i className="fas fa-eye"></i>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Orders;
