import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Service = () => {
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
        <span className="font-semibold">Service Delivery</span>
      </div>

      <div className="py-16 px-5">
        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">1. Enrollment Process:</h3>
          <p className="text-base">
            Candidates can enroll through our website{" "}
            <a href="https://www.tprpindia.com">www.tprpindia.com.</a>
            <br></br>Our professional coaches will guide candidates through the
            enrollment process.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">
            2. Initial Assessment and Course Selection:
          </h3>

          <h5 className="text-lg font-bold text-[#808080]">
            Virtual Screening:
          </h5>
          <p className="text-base">
            We collaborate with highly skilled experts and former professors
            from renowned universities who work with us as freelancers, who will
            connect with candidates virtually.
          </p>
          <p className="text-base">
            They assess candidates' knowledge and understanding, identifying
            areas for improvement.
          </p>

          <h5 className="text-lg font-bold text-[#808080]">
            Course Selection:
          </h5>
          <p className="text-base">
            Based on the assessment, candidates can either choose courses
            themselves or rely on our professionals' recommendations.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">
            3. Payment and Study Material Release:
          </h3>

          <h5 className="text-lg font-bold text-[#808080]">Fee Submission:</h5>
          <p className="text-base">
            Candidates submit their fees through our portal or make payments to
            the TPRP India direct bank account.
          </p>
          <p className="text-base">
            Upon successful payment, an invoice is shared via email.
          </p>

          <h5 className="text-lg font-bold text-[#808080]">
            Study Material Provision:
          </h5>
          <p className="text-base">
            Study materials are released to candidates based on the courses
            they've selected or were recommended.
          </p>
          <p className="text-base">
            Materials are customized to match the chosen courses.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">
            4. Time Table and Weekly Classes:
          </h3>

          <h5 className="text-lg font-bold text-[#808080]">
            Customized Schedule:
          </h5>
          <p className="text-base">
            A timetable is decided for each candidate based on their
            availability.
          </p>

          <h5 className="text-lg font-bold text-[#808080]">Weekly Classes:</h5>
          <p className="text-base">
            We provide weekly classes, each lasting 2 hours, conducted via video
            conference.
          </p>
          <p className="text-base">
            This ensures minimal impact on candidates' work life while
            facilitating continuous learning.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">5. Course Duration:</h3>

          <h5 className="text-lg font-bold text-[#808080]">
            Flexible Timelines:
          </h5>
          <p className="text-base">
            Course durations vary: Some courses can be completed within 30 days.
          </p>
          <p className="text-base">
            Others extend up to 90 days. The duration depends on course content
            and the candidate's pace..
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">6. Your Rights:</h3>

          <h5 className="text-lg font-bold text-[#808080]">
            Post-Completion Test:
          </h5>
          <p className="text-base">
            After course completion, candidates undergo a comprehensive test.
          </p>

          <h5 className="text-lg font-bold text-[#808080]">
            Comparison with Initial Knowledge:
          </h5>
          <p className="text-base">
            Our professionals compare the acquired knowledge with the
            candidate's initial understanding.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">7. Certificate Issuance:</h3>

          <h5 className="text-lg font-bold text-[#808080]">
            Successful Completion:
          </h5>
          <p className="text-base">
            Upon passing the test, candidates receive a certificate from TPRP.
          </p>

          <h5 className="text-lg font-bold text-[#808080]">
            Professional Credential:
          </h5>
          <p className="text-base">
            This certificate enhances their professional growth.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">8. Refund Policy:</h3>

          <h5 className="text-lg font-bold text-[#808080]">
            Full Refund Option:
          </h5>
          <p className="text-base">
            If we receive a refund request on the same day within 24 hours, we
            will initiate your refund. However, such requests will not be
            entertained after enrollment *T&C If you decide to cancel your
            order, you are entitled to get a full refund. To process this,
            please inform us of your decision, and we will initiate a refund to
            your original source of payment or the same payment method you used.
            The refund process may take 10 to 15 business days to complete.
          </p>

          <p className="text-base font-bold py-3">At TPRP, we are committed to nurturing personal development and empowering individuals to achieve their professional goals.</p>

          <p className="text-base"><span className="font-bold">Disclaimer:</span> The pricing for the same course may vary for different candidates based on factors such as the number of days and hours required for training. These variables are determined by the candidate's skillset and learning needs, which will be assessed and managed by our professional instructors to tailor the training duration accordingly.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
