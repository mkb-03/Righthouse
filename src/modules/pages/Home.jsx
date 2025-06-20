import React from "react";
import { HeroSection } from "../core/hero-section";
import { Booking } from "../core/booking/booking";
import { WhyChooseUs } from "../core/why-choose-us";
import { FaqSection } from "../core/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { TestimonialsSection } from "../core/testimonial-section";
import { PortfolioSection } from "../core/portfolio-section";
import { ServicesSection } from "../core/services/services-section";
import { WorkingProcess } from "../core/process/working-process";

export function Home() {
  return (
    <>
      <HeroSection />
      <Booking />
      <WhyChooseUs />
      <ServicesSection />
      <PortfolioSection />
      <WorkingProcess />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
