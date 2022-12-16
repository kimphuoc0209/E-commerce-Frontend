import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Action/userActions";
// import moment from "moment";
import { listShipperOrders } from "../Redux/Action/shipperActions";
import OrdersShipper from "../components/profileComponents/OrdersShipper";
import Header from "../components/ShipperComponents/Header";
import Sidebar from "../components/ShipperComponents/Sidebar";

const ShipperProfileScreen = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const shipperOrderList = useSelector((state) => state.shipperOrderList);
  const { loading, error, orders } = shipperOrderList;

  useEffect(() => {
    dispatch(listShipperOrders());
    dispatch(getUserDetails("profile"));
  }, [dispatch]);
  console.log(shipperOrderList);

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <section className="content-main" style={{ maxWidth: "1600px" }}>
          <div className="container mt-lg-12 mt-3">
            <div className="row align-items-start">
              {/* panels */}
              <div
                class="tab-content col-lg-12 pb-5 pt-lg-0 pt-3"
                id="v-pills-tabContent"
              >
                <div
                  class="tab-pane fade show active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <OrdersShipper
                    orders={orders}
                    loading={loading}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ShipperProfileScreen;
