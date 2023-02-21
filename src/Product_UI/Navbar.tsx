import {
  FavoriteBorder,
  HeadsetMic,
  PersonOutlined,
  PinDrop,
  WorkOutlined,
} from "@mui/icons-material";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <header className="navbar">
        <div className="navbar_top">
          <p>20% Off! Code:SPRING21-Terms apply*</p>
        </div>
        {/* middle navbar */}
        <div className="navbar__middle">
          <div>
            <ul className="navbar__logo">
              <li>
                <img src="Logo-lockup.png" height="30px" width="150px" />
              </li>
              <li></li>
              <li className="navbar__logo__mid">
                <HeadsetMic fontSize="small" />
                <span>Support</span>
                <PinDrop fontSize="small" />
                <span>Find a store</span>
              </li>
              <li>
                <FavoriteBorder />
                <PersonOutlined />
                <WorkOutlined />
              </li>
            </ul>
          </div>
          <div className="navbar__mid">
            <ul className="navbar__mid__navleft">
              <li>
                <span className="">WOMEN</span>
              </li>
              <li>MEN</li>
              <li>KIDS</li>
            </ul>
          </div>
          
          <div className="navbar__mid__bottom">
            <ul className="navbar__mid__navleft">
              <li> SALE</li>
              <li>NEW IN</li>
              <li>CLOTHING</li>
              <li>SHOES</li>
              <li>ACCESSORIES</li>
              <li>BRANDS</li>
            </ul>
            <div className="navbar__mid__navright">
              <i className="bi bi-search"></i>
              <input className="navbar__input" placeholder="search product,article,faq..."/>
              <i className="bi bi-mic"></i><span>|</span>
              <i className="bi bi-camera"></i>
            </div>
          </div>
        </div>
          {/* banner */}
          <div className="banner">
            <h1 className="">NEW</h1>
            <h1>COLLECTION</h1>
            <h5>SPRING/SUMMER2021</h5>
          </div>
      </header>
    
    </>
  );
};

export default Navbar;
