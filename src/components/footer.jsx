import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex space-x-4">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="text-sm">
          &copy; 2024 QuickCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
