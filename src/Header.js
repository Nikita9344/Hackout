import React from "react";
//import logo from "./images/Bizino-data-science-logo.jpg";
//import vid from "./images/Website-Background-Video.mp4";
//import Offerings from "./Offerings";
//import offerings from "./offerings-data";

const Header = () => {
    
    
  return (
    <header className='header'>
      {/* <video autoplay muted loop className='header'>
        <source
          src='./images/Website-Background-Video'
          type='video/mp4'
        ></source>
      </video> */}
      <div className='banner'>
        <h1>who are you?</h1>
        <button className="header-btn">
          <h2>Individual</h2>
        </button>
        <button className="header-btn">
          <h2>ngo</h2>
        </button>
      </div>
      
    </header>
  );
};

export default Header;
