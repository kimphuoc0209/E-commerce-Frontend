import React, {useEffect} from "react";
import Orders from "./Orders";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { shipperListOrders } from "../../Redux/Action/shipperActions";

const OrderMain = () => {
  const dispatch = useDispatch()

  const orderListShipper = useSelector((state) => state.orderListShipper);
  const { loading, error, orders } = orderListShipper;

  useEffect(() => {
    dispatch(shipperListOrders())
  }, [dispatch])
  
  
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Orders</h2>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <Orders orders={orders} />
          )}
        </div>
      </div>
    </section>
  );
};
export default OrderMain;
