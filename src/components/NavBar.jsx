import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../assets/img/svg/logoImg.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="my_container py-4 w-100 " style={{ zIndex: "99" }}>
        <div className="d-flex justify-content-between align-items-center pt-1 px-0">
          <div>
            <button className="bg-transparent p-0 border-0">
              <img src={logoImg} alt="logoImg" />
            </button>
          </div>

          <nav className="order-md-0 order-3">
            <ul
              className={`align-items-md-center gap-xl-5 d-flex gap-lg-4 pe-4 hamburger_menu 
                ${!isOpen ? "hideSideBar" : "showSidebar"}
              `}
            >
              <li>
                <Link
                  to="/"
                  className="fs_md fw-medium  text-white border_effect"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Pages"
                  className="fs_md fw-medium  text-white border_effect"
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  to="/Menu"
                  className="fs_md fw-medium  text-white border_effect"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/Order"
                  className="fs_md fw-medium  text-white border_effect"
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  to="/Blog"
                  className="fs_md fw-medium  text-white border_effect"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="fs_md fw-medium  text-white border_effect"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className="fs_md fw-medium  text-white border_effect"
                >
                  Shop
                </Link>
              </li>
              <li className="position-absolute top-0 end-0 pe-4 pt-4">
                <button
                  className=" d-md-none bg-transparent text-white border-0"
                  onClick={() => setIsOpen(false)}
                >
                  ✖ Close
                </button>
              </li>
            </ul>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger d-md-none"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>

          <div className="order-md-0 order-2">
            <button className="fs_md fw-medium  reservation_btn">
              RESERVATION
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
