import React from "react";

const Footer = () => {
  return (
    <footer className="max-h-screen bg-gray-100 text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-5 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Shop and Learn</h3>
            <ul className="space-y-2">
              <li className="hover:cursor-pointer hover:underline">Mac</li>
              <li className="hover:cursor-pointer hover:underline">iPad</li>
              <li className="hover:cursor-pointer hover:underline">iPhone</li>
              <li className="hover:cursor-pointer hover:underline">Watch</li>
              <li className="hover:cursor-pointer hover:underline">TV</li>
              <li className="hover:cursor-pointer hover:underline">Music</li>
              <li className="hover:cursor-pointer hover:underline">AirPods</li>
              <li className="hover:cursor-pointer hover:underline">HomePod</li>
              <li className="hover:cursor-pointer hover:underline">
                iPod touch
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Accessory
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Gift Card
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:cursor-pointer hover:underline">
                Apple Music
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple TV+
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Arcade
              </li>
              <li className="hover:cursor-pointer hover:underline">iCloud</li>
              <li className="hover:cursor-pointer hover:underline">
                Apple One
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Pay
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Books
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Podcasts
              </li>
              <li className="hover:cursor-pointer hover:underline">
                App Store
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li className="hover:cursor-pointer hover:underline">
                Manage Your Apple ID
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Store Account
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Apple Store</h3>
            <ul className="space-y-2">
              <li className="hover:cursor-pointer hover:underline">
                Find a Store
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Shop Online
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Genius Bar
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Today at Apple
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Camp
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Store App
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Refurbished and Clearance
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Financing
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Apple Trade In
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Order Status
              </li>
              <li className="hover:cursor-pointer hover:underline">
                Shopping Help
              </li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-2 justify-start items-center mt-30 mb-6">
          <p className="text-sm text-gray-500">More ways to shop:</p>
          <p className="underline text-blue-700 hover:cursor-pointer" href="#">
            Find an Apple Store
          </p>
          <p className="text-sm text-gray-500">or</p>
          <p className="underline text-blue-700 hover:cursor-pointer" href="#">
            other Retailer
          </p>
          <p className="text-sm text-gray-500">near you. Or call</p>
          <p className="underline text-blue-700 hover:cursor-pointer" href="#">
            1-800-MY-APPLE
          </p>
          <p className="text-sm text-gray-500">(1-800-692-7753)</p>
        </div>
        <div className="w-full border-t border-gray-300 pt-5">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-sm text-gray-500">
              Copyright © 2025 Apple Inc. All rights reserved.
            </div>
            <div className="flex md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline hover:cursor-pointer mr-3"
              >
                Privacy Policy
              </a>
              <p className="mr-2">|</p>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline hover:cursor-pointer mr-3"
              >
                Terms of Use
              </a>
              <p className="mr-2">|</p>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline hover:cursor-pointer mr-3"
              >
                Sales and Refunds
              </a>
              <p className="mr-2">|</p>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline hover:cursor-pointer mr-3"
              >
                Legal
              </a>
              <p className="mr-2">|</p>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline hover:cursor-pointer"
              >
                Site Map
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 hover:text-gray-700 hover:underline hover:cursor-pointer">
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
