import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Refund = () => {
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
        <span className="font-semibold">Refund Policy</span>
      </div>

      <div className="py-16 px-5">
        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-lg text-[#777777]">
            If you decide to cancel your order, you have the right to receive a
            full refund. Here's how the process works:
          </h3>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">5. Refunds:</h3>
          <p className="text-base">
            If we receive a refund request on the same day within 24 hours, we
            will initiate your refund. However, such requests will not be
            entertained after enrollment *T&C
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">5.1 Inform Us:</h3>
          <p className="text-base">
            First, you need to inform us of your decision to cancel the order.
            This can typically be done by contacting our customer service
            department or through the cancellation process on our website.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">5.2 Refund Initiation:</h3>
          <p className="text-base">
            If you decide to cancel your order, we will review your refund
            request as per given term and condition. If your refund request will
            be approved, you are entitled to get a full refund. To process this,
            please inform us of your decision, and we will initiate a refund to
            your original source of payment or the same payment method you used.
            The refund process may take 10 to 15 business days to complete.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">5.3 Processing Time:</h3>
          <p className="text-base">
            Please note that the refund process may take some time. Typically,
            it will take between 10 to 15 business days for the refund to be
            completed. This timeframe includes the processing time by our
            financial institution as well as any processing time required by
            your payment provider. In summary, if you decide to cancel your
            order, you are entitled to a full refund. Just inform us of your
            decision, and we will initiate the refund process back to your
            original payment method, though it may take up to 10 to 15 business
            days to complete.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <p className="text-base">
            <span className="font-bold">Disclaimer:</span> The pricing for the
            same course may vary for different candidates based on factors such
            as the number of days and hours required for training. These
            variables are determined by the candidate's skillset and learning
            needs, which will be assessed and managed by our professional
            instructors to tailor the training duration accordingly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Refund;
