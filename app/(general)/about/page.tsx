import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO About Page Title",
  description: "SEO About Page Description",
  keywords: ["About Page", "Information", "SEO Keywords"],
};

const AboutPage = () => {
  return <span className="text-7xl">About Page</span>;
};

export default AboutPage;
