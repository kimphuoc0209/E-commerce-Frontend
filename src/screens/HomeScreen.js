import React from "react";
import ShopSection from "../components/HomeComponent/ShopSection";
import CalltoActionSection from "../components/HomeComponent/CalltoActionSection";
import ContactInfo from "../components/HomeComponent/ContactInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <ShopSection />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
