import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import FormCustom from "../component/FormCustom";
import Footer from "../component/Footer";


const Contact = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div className="font-source">
      <CommonNavbar cnt={cart.length} />
      <div className="bg-common min-h-[50vh]"></div>
      <div className="bg-[#808080] text-white py-3 text-center">
        <Link to={"/"}>Home</Link> /{" "}
        <span className="font-semibold">Contact</span>
      </div>

      <div className="bg-white py-12 px-4">
        <h3 className="text-center text-lg font-semibold text-blue-900 mb-2">
          A World Full of Possibilities
        </h3>
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
          Our Contact Info
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-gray-700">
          {/* Address */}
          <div className="flex items-center space-x-4 text-center md:text-left">
          <MapPinIcon class="h-10 w-10 text-gray-500" />
            <p className="text-gray-700">
              House No. 37/A, 260 Nagla Padi, Agra, Uttar Pradesh, 282005
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 text-center md:text-left">
          <EnvelopeIcon class="h-10 w-10 text-gray-500" />
            <p className="text-gray-700">info@tprpindia.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 text-center md:text-left">
          <PhoneIcon class="h-10 w-10 text-gray-500" />
            <p className="text-gray-700">+91-7003423812</p>
          </div>
        </div>
      </div>

      <FormCustom />
      <Footer />
    </div>
  );
};

export default Contact;
