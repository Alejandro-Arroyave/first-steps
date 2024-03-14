import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO Contact Page Title",
  description: "SEO Contact Page Description",
  keywords: ["Contact Page", "Information", "SEO Keywords"],
};

const ContactPage = () => {
  return <span className="text-7xl">Contact Page</span>;
};

export default ContactPage;
