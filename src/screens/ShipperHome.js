import React from "react";
import Header from "../components/ShipperComponents/Header";
import Sidebar from "../components/ShipperComponents/Sidebar";
import OrderMain from "../components/ShipperComponents/OrderMain";

const ShipperHome = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain />
      </main>
    </>
  );
};

export default ShipperHome;
