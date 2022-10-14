import React from "react";

const individual1 = () => {
    
    
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
        <a href="./individual1.js">
          <button className="header-btn">
            <h2>Individual</h2>
          </button>
        </a>
        
        <a href="./ngo1.js">
          <button className="header-btn">
            <h2>NGO</h2>
          </button>
        </a>
      </div>
      
    </header>
  );
};

export default Header;
