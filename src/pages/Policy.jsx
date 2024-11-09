import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Policy = () => {

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
        <span className="font-semibold">Privacy Policy</span>
      </div>

      <div className="py-16 px-5">
        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">1. Introduction:</h3>
          <p className="text-base">Welcome to our educational organization's website! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data. By using our website, you agree to the terms described herein.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">2. Information We Collect:</h3>

          <h5 className="text-lg font-bold text-[#808080]">2.1. Personal Information:</h5>
          <p className="text-base">- When you register for our courses or interact with our website, we may collect personal information such as your name, email address, phone number, and location.</p>
          <p className="text-base">- We use this information to provide our Product Overview, communicate with you, and improve our offerings.</p>

          <h5 className="text-lg font-bold text-[#808080]">2.2. Usage Data:</h5>
          <p className="text-base">- We collect data on how you use our website, including pages visited, time spent, and interactions.</p>
          <p className="text-base">- This helps us enhance user experience and optimize our content.</p>

          <h5 className="text-lg font-bold text-[#808080]">2.3. Cookies and Tracking Technologies:</h5>
          <p className="text-base">- Our website uses cookies and similar technologies to track user behavior and preferences.</p>
          <p className="text-base">- You can manage cookie preferences through your browser settings.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">3. How We Use Your Information:</h3>

          <h5 className="text-lg font-bold text-[#808080]">3.1. Course Enrollment and Communication:</h5>
          <p className="text-base">- We use your personal information to process course registrations, provide access to course materials, and communicate with you regarding updates or changes.</p>

          <h5 className="text-lg font-bold text-[#808080]">3.2. Improving Product Overview:</h5>
          <p className="text-base">- Usage data helps us analyze trends, identify popular content, and enhance our offerings.</p>
          <p className="text-base">- We may use aggregated data for research and statistical purposes.</p>

          <h5 className="text-lg font-bold text-[#808080]">3.3. Marketing and Promotions:</h5>
          <p className="text-base">- With your consent, we may send promotional emails related to our courses, events, or special offers.</p>
          <p className="text-base">- You can opt out of marketing communications at any time.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">4. Data Security:</h3>

          <h5 className="text-lg font-bold text-[#808080]">4.1. Protection Measures:</h5>
          <p className="text-base">- We implement security measures to protect your personal information from unauthorized access, disclosure, or alteration.</p>
          <p className="text-base">- However, no method of transmission over the internet is entirely secure. We cannot guarantee absolute security.</p>

        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">5. Third-Party Product Overview:</h3>

          <h5 className="text-lg font-bold text-[#808080]">5.1. External Links:</h5>
          <p className="text-base">- Our website may contain links to external websites. We are not responsible for their privacy practices.</p>
          <p className="text-base">- Please review the privacy policies of those sites.</p>

        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">6. Your Rights:</h3>

          <h5 className="text-lg font-bold text-[#808080]">6.1. Access and Correction:</h5>
          <p className="text-base">- You have the right to access, update, or correct your personal information.</p>
          <p className="text-base">- Contact us if you need assistance.</p>

          <h5 className="text-lg font-bold text-[#808080]">6.2. Data Retention:</h5>
          <p className="text-base">- We retain your information as long as necessary for the purposes outlined in this policy.</p>
          <p className="text-base">- You can request deletion of your data.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">7. Changes to this Policy:</h3>

          <h5 className="text-lg font-bold text-[#808080]">7.1. Updates:</h5>
          <p className="text-base">- We may update this Privacy Policy periodically.</p>
          <p className="text-base">- Check our website for the latest version.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">8. Contact Us:</h3>

          <p className="text-base">If you have any questions or concerns About our Privacy Policy, please contact us.</p>
          <h5 className="text-lg font-bold text-[#808080]">Email: info@tprpindia.com</h5>
          <h5 className="text-lg font-bold text-[#808080]">Phone: +91-7003423812</h5>
        </div>
        
      </div>

      <Footer />
    </div>
  )
}

export default Policy
