import React from "react";
import ShopSection from "../components/HomeComponent/ShopSection";
import CalltoActionSection from "../components/HomeComponent/CalltoActionSection";
import ContactInfo from "../components/HomeComponent/ContactInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  const { keyword } = useParams()
  const { pagenumber } = useParams()

  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber}/>
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
