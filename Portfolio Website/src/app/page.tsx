import React from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Offer from "@/components/Offer";
import Product from "@/components/Product";
import Progressive from "@/components/Progressive";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import Shopping from "@/components/Shopping";
import Items from "@/components/Items";
import Card from "@/components/Card";
import Reservation from "@/components/Reservation";


export default function page() {
  return (
    <div className="bg-gray-800 min-h-screen text-white ">
      <Navbar />
      <Slider />
      <Progressive />
      <Product />
      
      <br />
      <Banner />
      <Shopping />
      <Items/>
      <Offer />
       <Card/>
      <Reservation/>
      <Footer />
    </div>
  );
}
