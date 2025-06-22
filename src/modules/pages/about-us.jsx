import React from "react";
import { WorkingProcess } from "../core/process/working-process";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { FaqSection } from "../core/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { AboutUsHeader } from "../core/about/about-us-header";
import { AboutSection } from "../core/about/about-section";
import { CoreValuesSection } from "../core/core-value-section";
import { CommercialBanner } from "../core/commercial-banner";

export function AboutUs() {
  return (
    <>
      <AboutUsHeader />
      <AboutSection />
      <CoreValuesSection />
      <CommercialBanner />
      <WorkingProcess />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
