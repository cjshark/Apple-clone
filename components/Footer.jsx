import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-5 border-t border-gray-200">
        {/* Top Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Shop and Learn</h3>
            <ul className="space-y-2">
              {[
                "Mac",
                "iPad",
                "iPhone",
                "Watch",
                "TV",
                "Music",
                "AirPods",
                "HomePod",
                "iPod touch",
                "Accessory",
                "Gift Card",
              ].map((item) => (
                <li key={item} className="hover:cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Apple Music",
                "Apple TV+",
                "Apple Arcade",
                "iCloud",
                "Apple One",
                "Apple Pay",
                "Apple Books",
                "Apple Podcasts",
                "App Store",
              ].map((item) => (
                <li key={item} className="hover:cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              {["Manage Your Apple ID", "Apple Store Account"].map((item) => (
                <li key={item} className="hover:cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Apple Store</h3>
            <ul className="space-y-2">
              {[
                "Find a Store",
                "Shop Online",
                "Genius Bar",
                "Today at Apple",
                "Apple Camp",
                "Apple Store App",
                "Refurbished and Clearance",
                "Financing",
                "Apple Trade In",
                "Order Status",
                "Shopping Help",
              ].map((item) => (
                <li key={item} className="hover:cursor-pointer hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 mt-8 pt-5">
          {/* More Ways to Shop */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <p className="text-gray-500">More ways to shop:</p>
            <a
              className="underline text-blue-700 hover:cursor-pointer"
              href="#"
            >
              Find an Apple Store
            </a>
            <p className="text-gray-500">or</p>
            <a
              className="underline text-blue-700 hover:cursor-pointer"
              href="#"
            >
              other Retailer
            </a>
            <p className="text-gray-500">near you. Or call</p>
            <a
              className="underline text-blue-700 hover:cursor-pointer"
              href="#"
            >
              1-800-MY-APPLE
            </a>
            <p className="text-gray-500">(1-800-692-7753)</p>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center text-sm">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2025 Apple Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 items-center">
              {[
                "Privacy Policy",
                "Terms of Use",
                "Sales and Refunds",
                "Legal",
                "Site Map",
              ].map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 hover:underline"
                  >
                    {link}
                  </a>
                  {index !== 4 && <span className="hidden md:inline">|</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 hover:text-gray-700 hover:underline hover:cursor-pointer">
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
