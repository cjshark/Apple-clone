import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Apple",
  description: "Discover Authentic Aplle Products",
  icons: {
    icon: "/images/logo.png",
  },
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main" />
        <Nav />
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Rootlayout;
