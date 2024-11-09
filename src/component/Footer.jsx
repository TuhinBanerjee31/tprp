import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#808080] text-white py-8">
        <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@tprpindia.com"
                className="text-gray-200 hover:underline"
              >
                info@tprpindia.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+917003428312"
                className="text-gray-200 hover:underline"
              >
                +91-7003423812
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to={"/terms"} className="text-gray-200 hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to={"/refund"} className="text-gray-200 hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to={"/policy"} className="text-gray-200 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"/service"} className="text-gray-200 hover:underline">
                  Service Delivery
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">Subscribe To Newsletter</h3>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter email"
                className="px-4 py-2 rounded-l text-black border border-gray-400 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="text-center py-6 bg-white">
        <p className="text-black">© 2024 All rights reserved By TPRP</p>
      </div>
    </div>
  );
};

export default Footer;
