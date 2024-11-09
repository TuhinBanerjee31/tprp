import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import { courseData } from "../data/courseData";
import CourseCard from "../component/CourseCard";
import Footer from "../component/Footer"

const Courses = () => {

  const [cart, setCart] = useState([]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart data to local storage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const handleAddToCart = (course) => {
    const updatedCart = [...cart, course];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // const handleRemoveFromCart = (courseTitle) => {
  //   const updatedCart = cart.filter((item) => item.title !== courseTitle);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  return (
    <div>
      <CommonNavbar cnt= {cart.length} />
      <div className="bg-common min-h-[50vh]"></div>
      <div className="bg-[#808080] text-white py-3 text-center">
        <Link to={"/"}>Home</Link> /{" "}
        <span className="font-semibold">Courses</span>
      </div>

      <div className="flex flex-wrap max-w-screen-xl mx-auto gap-6 justify-center items-center py-20">
        {courseData.map((item) => (
          <Link to={item.redirect} key={item.id}>
            <CourseCard data={item} onAddToCart={handleAddToCart} />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
