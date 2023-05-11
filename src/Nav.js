import React from "react";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

function Nav(props) {
  const { openCart, goToFooter } = props;
  const goToF = () => {
    goToFooter.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <nav
        className="py-4 px-20 flex justify-between fixed top-0 left-0 w-full 
            bg-[#000000c8] items-center shadow-2xl"
      >
        <div className="">
          <img src={logo} alt="logo"></img>
        </div>
        <ul className="flex text-white text-xl">
          <li className="pl-4 cursor-pointer" onClick={openCart}>
            Cart
          </li>

          <li className="pl-4 cursor-pointer">Brands</li>
          <li className="pl-4 cursor-pointer">
            <Link to="../team">Team</Link>
          </li>
          <li className="pl-4 cursor-pointer">About Us</li>
          <li onClick={goToF} className="pl-4 cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
