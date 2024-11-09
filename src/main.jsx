import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import About from "./pages/About.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx"
import Cart from "./pages/Cart.jsx";
import Terms from "./pages/Terms.jsx";
import Refund from "./pages/refund.jsx";
import Policy from "./pages/Policy.jsx";
import Service from "./pages/Service.jsx";
import CourseDetails1 from "./pages/CourseDetails1.jsx";
import CourseDetails2 from "./pages/CourseDetails2.jsx";
import CourseDetails3 from "./pages/CourseDetails3.jsx";
import CourseDetails4 from "./pages/CourseDetails4.jsx";
import CourseDetails5 from "./pages/CourseDetails5.jsx";
import CourseDetails6 from "./pages/CourseDetails6.jsx";
import CourseDetails7 from "./pages/CourseDetails7.jsx";
import CourseDetails8 from "./pages/CourseDetails8.jsx";
import CourseDetails9 from "./pages/CourseDetails9.jsx";
import CourseDetails10 from "./pages/CourseDetails10.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Courses />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="terms" element={<Terms />} />
      <Route path="refund" element={<Refund />} />
      <Route path="policy" element={<Policy />} />
      <Route path="service" element={<Service />} />
      <Route path="self-confidence-building-training" element={<CourseDetails1 />} />
      <Route path="resilience-coach-training" element={<CourseDetails2 />} />
      <Route path="motivational-speaker-training" element={<CourseDetails3 />} />
      <Route path="body-language-expert-training" element={<CourseDetails4 />} />
      <Route path="personal-branding-strategist-training" element={<CourseDetails5 />} />
      <Route path="mindset-mastery-training" element={<CourseDetails6 />} />
      <Route path="relationship-coaching-training" element={<CourseDetails7 />} />
      <Route path="decision-making-mastery-training" element={<CourseDetails8 />} />
      <Route path="adaptive-leadership-training" element={<CourseDetails9 />} />
      <Route path="confidence-and-charisma-training" element={<CourseDetails10 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
