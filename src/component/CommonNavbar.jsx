import React, { useState, useEffect } from "react";
import tprpLogo from "../assets/tprp_logo.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const CommonNavbar = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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

  return (
    <div className="font-source">
      <nav className="bg-white fixed w-full z-40 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <NavLink to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={tprpLogo}
              className="h-16 w-20"
              alt="Flowbite Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              TPRP
            </span> */}
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavLink to={"/cart"} className="flex">
            <ShoppingCartIcon class="h-9 w-auto text-gray-500" />
            <span className="bg-red-400 px-2 rounded-2xl self-end text-white">{props.cnt}</span>
            </NavLink>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <NavLink
                  to={'/'}
                  className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                to={"/about"}
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                to={"/courses"}
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                to={"/contact"}
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default CommonNavbar
