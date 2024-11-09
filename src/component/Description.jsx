import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Description = (props) => {
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
        <span className="font-semibold">{props.data.title}</span>
      </div>

      <div className="flex flex-col mx-auto items-center gap-8 py-16 max-w-screen-xl">
        <h1 className="text-4xl font-bold">{props.data.title}</h1>

        <div className="max-w-screen-xl px-10 py-4 shadow-md bg-[#F2F4F5]">
          <h4>Categories:</h4>
          <p>Language: English</p>
        </div>

        <div className="max-w-screen-md">
          <img src={props.data.cover} className="w-full h-auto" />
        </div>

        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="max-w-screen-md">{props.data.desc}</p>

        <h3 className="font-bold text-2xl">
          Price: {props.data.price} Per Hour/- INR Incl. GST
        </h3>

        <p className="max-w-screen-md">
          Disclaimer: Each counseling session is scheduled to last for 1 hour.
          If you wish to extend the session beyond the scheduled hour, you may
          do so by making a request during the session. The extension will be
          charged at a rate of ₹200 per 10 minutes. The extended time will be
          billed in addition to the standard session fee and will be calculated
          based on the actual time extended. The additional charges for the
          extended session will be added to your final bill. Payment for the
          extended time must be made in full upon the completion of the
          session.apply for each extra hour spent with the counselor, which will
          be reflected in the final invoice.
        </p>

        <p className="max-w-screen-md">
          Our competitive prices stand out when compared to market standards.
          Course fees vary based on factors such as availability of professional
          counselors and the specific course. Ranging from INR 15,000 to INR 1.5
          lakhs, our offerings become even more attractive if you choose to
          apply for multiple courses.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Description;
