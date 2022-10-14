import React from "react";
import logo from "./images/logoopt2.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>
              <a href='#services'>Login</a>
            </button>
          </li>

          <li>
            <button className='link-btn'>
              <a href='#industries'>About</a>
            </button>
          </li>
          <li>
            <button className='link-btn'>
              <a href='#about'>Contact</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
