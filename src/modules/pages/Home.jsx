import React from "react";
import HeroSection from "../core/hero-section";
import { Booking } from "../core/booking/booking";
import { WhyChooseUs } from "../core/why-choose-us";
import { PortfolioSection } from "../core/portfolio-section";
import { ServicesSection } from "../core/services/services-section";
import { WorkingProcess } from "../core/process/working-process";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Booking />
      <WhyChooseUs />
      <ServicesSection />
      <PortfolioSection />
      <WorkingProcess />
    </>
  );
};

export default Home;
