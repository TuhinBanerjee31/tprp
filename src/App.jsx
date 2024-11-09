import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Overview from "./component/Overview";
import Course from "./component/Course";
import FormCustom from "./component/FormCustom";
import Footer from "./component/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);


  return (
    <>
      <Navbar cnt= {cart.length} />
      {/* <Header /> */}
      <Overview />
      <Course />
      <FormCustom />
      <Footer />
    </>
  );
}

export default App;
