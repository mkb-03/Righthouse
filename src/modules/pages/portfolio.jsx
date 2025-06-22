import React from "react";
import { WorkingProcess } from "../core/process/working-process";
import { TestimonialsSection } from "../core/testimonial/testimonial-section";
import { FaqSection } from "../core/faq-section";
import { ContactSection } from "../core/contact/contact-section";
import { PageHeader } from "../core/page-header";
import { PortfolioSection } from "../core/portfolio/portfolio-section";

export function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolio" />
      <PortfolioSection
        title="Portfolio"
        subtitle="We're proud of the Same works"
        buttonText="LOAD MORE"
      />
      <WorkingProcess />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
