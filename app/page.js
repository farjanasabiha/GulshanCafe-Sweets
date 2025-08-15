"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
import RestaurantMenu from "./Components/Home/RestaurantMenu";
import ComingSoonSection from "./Components/Home/ComingSoonSection";
import FoodDeliveryLanding from "./Components/Home/FoodDeliveryLanding";
import OurChefSection from "./Components/Home/OurChefSection";
import Testimonial from "./Components/Home/Testimonial";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
export default function Home() {
  return (
    <ReactLenis root>
      <main className="">
        <Navbar />
        <HomeHeader />
        <RestaurantMenu />
        <ComingSoonSection />
        <OurChefSection />
        <FoodDeliveryLanding />
        <Testimonial />
        <Footer />
      </main>
    </ReactLenis>
  );
}
