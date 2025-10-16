import React from "react";
import Hero from "../components/home/Hero";
import FeaturedCourses from "../components/home/FeaturedCourses";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Offers from "../components/home/Offers";
import Testimonials from "../components/home/Testimonials";
import ContactPreview from "../components/home/ContactPreview";
import FAQ from "../components/home/FAQ"; 
import AboutSection from "./AboutSection";
import HomeBlogSection from "./HomeBlogSection"


export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <WhyChooseUs />
      <FeaturedCourses />
      <HomeBlogSection />
      <Testimonials />
      <FAQ /> 
      <AboutSection />
      <ContactPreview />
    </>
  );
}
