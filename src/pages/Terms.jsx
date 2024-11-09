import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Terms = () => {
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
        <span className="font-semibold">Terms and Conditions</span>
      </div>

      <div className="py-16 px-5">
        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">1. Enrollment and Registration:</h3>
          <p className="text-base">1.1. By enrolling in our courses, you agree to abide by these terms and conditions.</p>
          <p className="text-base">1.2. Registration is complete upon payment of the course fee.</p>
          <p className="text-base">1.3. Participants must provide accurate and up-to-date information during registration.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">2. Course Content and Delivery:</h3>
          <p className="text-base">2.1. Our courses cover topics related to personality development, communication skills, emotional intelligence, and personal growth.</p>
          <p className="text-base">2.2. Course materials, including videos, handouts, and assessments, are provided solely for educational purposes.</p>
          <p className="text-base">2.3. Participants are expected to actively engage in the learning process and complete assignments on time.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">3. Attendance and Participation:</h3>
          <p className="text-base">3.1. Regular attendance is essential for maximizing the benefits of the courses.</p>
          <p className="text-base">3.2. Participants are encouraged to actively participate in discussions, workshops, and group activities.</p>
          <p className="text-base">3.3. Late arrivals or early departures may impact the learning experience.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">4. Code of Conduct:</h3>
          <p className="text-base">4.1. Respectful behavior towards instructors, fellow participants, and staff members is mandatory.</p>
          <p className="text-base">4.2. Discrimination, harassment, or disruptive conduct will not be tolerated.</p>
          <p className="text-base">4.3. Plagiarism or cheating in assignments is strictly prohibited.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">5. Refunds:</h3>
          <p className="text-base">5.1 If we receive a refund request on the same day within 24 hours, we will initiate your refund. However, such requests will not be entertained after enrollment *T&C</p>
          <p className="text-base">5.2 If you decide to cancel your order, you are entitled to get a full refund. To process this, please inform us of your decision, and we will initiate a refund to your original source of payment or the same payment method you used. The refund process may take 10 to 15 business days to complete.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">6. Certification and Assessment:</h3>
          <p className="text-base">6.1. Participants who meet the course requirements will receive a certificate of completion.</p>
          <p className="text-base">6.2. Assessments may include quizzes, projects, and presentations.</p>
          <p className="text-base">6.3. Certification is contingent upon satisfactory performance.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">7. Intellectual Property:</h3>
          <p className="text-base">7.1. All course materials, including videos, slides, and handouts, are protected by copyright.</p>
          <p className="text-base">7.2. Participants may not reproduce, distribute, or share course content without explicit permission.</p>
          <p className="text-base">7.3. Any unauthorized use may result in legal action.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">8. Privacy and Data Protection:</h3>
          <p className="text-base">8.1. Personal information collected during registration will be used solely for course-related purposes.</p>
          <p className="text-base">8.2. We adhere to data protection laws and maintain confidentiality.</p>
          <p className="text-base">8.3. Participants may receive occasional communications related to course updates or relevant events.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">9. Disacknowledgment</h3>
          <p className="text-base">9.1. Our courses provide guidance and tools for personal development but do not guarantee specific outcomes.</p>
          <p className="text-base">9.2. Participants are responsible for applying the knowledge gained in their personal and professional lives.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-4">
          <h3 className="font-bold text-2xl">10. Modification of Terms:</h3>
          <p className="text-base">10.1. These terms and conditions may be updated periodically. Participants will be notified of any changes.</p>
        </div>

        <div className="max-w-screen-xl mx-auto py-6">
          <p className="text-base"><span className="font-bold">Disclaimer:</span> The pricing for the same course may vary for different candidates based on factors such as the number of days and hours required for training. These variables are determined by the candidate's skillset and learning needs, which will be assessed and managed by our professional instructors to tailor the training duration accordingly.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
