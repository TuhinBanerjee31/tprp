import React, { useState, useEffect } from "react";
import CommonNavbar from "../component/CommonNavbar";
import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import Footer from "../component/Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (courseId) => {
    const updatedCart = cart.filter((item) => item.id !== courseId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  return (
    <div className="font-source">
      <CommonNavbar cnt={cart.length} />
      <div className="bg-common min-h-[50vh]"></div>
      <div className="bg-[#808080] text-white py-3 text-center">
        <Link to={"/"}>Home</Link> / <span className="font-semibold">Cart</span>
      </div>

      <div className="flex flex-col md:flex-row py-20 items-center">
        <div className="w-full self-start max-w-screen-sm mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 uppercase">
              Checkout List
            </h5>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {cart.map((item) => (
                <li key={item.id} className="py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-40 h-auto"
                        src={item.cover}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-xl font-medium text-gray-900 truncate">
                        {item.title}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <TrashIcon
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="h-6 w-6 text-gray-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="max-w-sm mx-auto my-12 border border-gray-700 rounded-lg p-8 self-start">
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="full-name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label
              for="phone-number"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="mb-5">
            <label
              for="amount"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Amount
            </label>
            <input
              type="tel"
              id="amount"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              I agree with the all the details filled above.
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
