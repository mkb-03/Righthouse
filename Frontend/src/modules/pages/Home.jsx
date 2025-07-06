import React from "react";
import { HeroSection } from "../core/hero-section";
import { Booking } from "../core/booking/booking";
import { WhyChooseUs } from "../core/why-choose-us";
import { FaqSection } from "../core/faq/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { PortfolioSection } from "../core/portfolio/portfolio-section";
import { ServicesSection } from "../core/services/services-section";
import { WorkingProcess } from "../core/process/working-process";
import { faqData } from "../core/faq/faqData";
import flatRoofing from "../../assets/flat-roofing.jpg";
import faq1 from "../../assets/faq-1.jpg";

export function Home() {
  return (
    <>
      <HeroSection />
      <Booking />
      <WhyChooseUs />
      <ServicesSection />

      <PortfolioSection
        title="Portfolio"
        subtitle="We're proud of the Same works"
      />
      <WorkingProcess />
      <TestimonialsSection />
      <FaqSection
        faqData={faqData}
        showImages={true}
        images={[
          { src: faq1, alt: "FAQ 1" },
          { src: flatRoofing, alt: "Flat Roofing", class: "flex self-end" },
        ]}
      />
      <ContactSection />
    </>
  );
}
