import React from "react";
import Banner from "../components/home/banner/banner";
import DoctorBio from "../components/home/doctorinfo/DoctorBio";
import Hero from "../components/home/Hero/Hero";
import ServiceCard from "../components/home/ServiceCard/ServiceCard";

import BlogCarousel from "../components/Blog/BlogCarousel/BlogCarousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <ServiceCard />
      <DoctorBio />
      <BlogCarousel />
    </div>
  );
}
