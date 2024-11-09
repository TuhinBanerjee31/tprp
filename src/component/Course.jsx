import React from "react";
import c1 from "../assets/courseImg/mmt.png"
import c2 from "../assets/courseImg/mst.jpg"
import c3 from "../assets/courseImg/rct.jpeg"
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="font-source">
      <h3 className="uppercase text-2xl text-center">Our Courses</h3>

      <div className="flex justify-around flex-wrap gap-4 my-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-80"
              src={c1}
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">
              Mindset Mastery Training
              </h5>
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-80"
              src={c2}
              alt=""
            />
          </a>
          <div className="p-2">
            <a href="#">
              <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">
              Motivational Speaker Training
              </h5>
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-80"
              src={c3}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">
              Mindset Mastery Training
              </h5>
            </a>
          </div>
        </div>
      </div>

     <div className="flex justify-center">
     <Link to={"/courses"} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore More</Link>
     </div>
    </div>
  );
};

export default Course;
