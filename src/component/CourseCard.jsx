import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {

    const handleAddToCart = () => {
        if (props.onAddToCart) {
          props.onAddToCart(props.data); // Pass course data to the function
        }
      };

  return (
    <div className="font-source">
      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={props.data.redirect}>
          <img
            className="rounded-t-lg w-full h-56"
            src={props.data.cover}
            alt=""
          />
        </Link>
        <div className="p-4">
          <Link to={props.data.redirect}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data.title}
            </h5>
          </Link>
          <div className="flex items-center justify-between">
          <div
          onClick={handleAddToCart}
            className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>

          <div
            className="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Request
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
