import React from "react";
// import ShopSection from "../components/HomeComponent/ShopSection";
// import CalltoActionSection from "../components/HomeComponent/CalltoActionSection";
// import ContactInfo from "../components/HomeComponent/ContactInfo";
// import Header from "../components/Header"
// import Footer from "../components/Footer";
// import "../App.css";
import ProfileTabs from "../components/profileComponents/ProfileTabs"
import Orders from "../components/profileComponents/Orders"
const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <Header /> */}
      {/* <Footer /> */}
      <ProfileTabs/>
      <Orders/>
      {/* <ShopSection /> */}
      {/* <CalltoActionSection /> */}
      {/* <ContactInfo /> */}
    </div>
  );
};

export default HomeScreen;