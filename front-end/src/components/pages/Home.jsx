import React from "react";
import AppNavbar from "../organisms/AppNavbar";
import AppCards from "../organisms/AppCards";
import Carousel from "../organisms/Carousel";
import Footer from "../organisms/Footer";


export default function Home() {
  return (
    <div>
      <div>
        <AppNavbar />
      </div>

      <div>
        <Carousel />
      </div>

      <div>
        <AppCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
