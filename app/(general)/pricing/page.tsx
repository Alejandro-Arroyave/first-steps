import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO Pricing Page Title",
  description: "SEO Pricing Page Description",
  keywords: ["About Page", "Information", "SEO Keywords"],
};

const PricingPage = () => {
  return <span className="text-7xl">Pricing Page</span>;
};

export default PricingPage;
