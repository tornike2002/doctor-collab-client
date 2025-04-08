import React from "react";
import BlogHero from "../components/Blog/BlogAboutHero/BlogHero";
import BlogCarousel from "../components/Blog/BlogCarousel/BlogCarousel";
import BlogAdd from "../components/Blog/BlogAdd/BlogAdd";

export default function Blog() {
  return (
    <div>
      <BlogHero />
      <BlogAdd />
      <BlogCarousel />
    </div>
  );
}
