import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
// import { navlist } from "../assets/data/data";
import { RiUser3Line } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

const [mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="toggle">
              <button onClick={() => setMobile(!mobile)}>
                {mobile ? (
                  <AiOutlineClose className="close heIcon" />
                ) : (
                  <AiOutlineMenu className="open heIcon" />
                )}
              </button>
            </div>
            <div className="left">
              <img src={logo} alt=""></img>
            </div>
            <div className="center">
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {/* {navlist.map((nav) => (
                  <li key={nav.id}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))} */}
                <li className="text">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Pria</Link>
                </li>
                <li>
                  <Link to="/about">Wanita</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_search">
              <input type="text" placeholder="Search Your Products"></input>
              <BiSearch className="searchIcon heIcon" />
            </div>
            <div className="right_user">
              <Link to='/login'>
                <RiUser3Line className="userIcon userButton" />
              </Link>
              <AiOutlineHeart className="userIcon likeButton" />
            </div>
            <div className="right_user">
              <button className="button">
                <BsBagCheck className="shop heIcon" />
                MY Cart (0)
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
