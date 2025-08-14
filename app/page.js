"use client";
import { ReactLenis } from "lenis/react";
import HomeHeader from "./Components/Home/HomeHeader";
import RestaurantMenu from "./Components/Home/RestaurantMenu";
import ComingSoonSection from "./Components/Home/ComingSoonSection";
import FoodDeliveryLanding from "./Components/Home/FoodDeliveryLanding";
import OurChefSection from "./Components/Home/OurChefSection";
import ClientFeedbackSection from "./Components/Home/ClientFeedbackSection";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Navbar";
export default function Home() {
  return (
    <ReactLenis root>
      <main className="">
        <Navbar/>
        <HomeHeader />
        <RestaurantMenu/>
        <ComingSoonSection />
        <OurChefSection/>
        <FoodDeliveryLanding/>
        <ClientFeedbackSection/>
        <Footer/>
      </main>
    </ReactLenis>
  );
}
