import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-5 fixed top-0 left-0 w-full z-20">
      <div className="navbar-start  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/">
            <img className=" w-[50px] h-[50-px]  " src={logo} alt="" />
          </Link>
          <Link to="/" className="text-2xl font-bold text-[#632EE3] ">
            PetCare
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{links}</ul>
      </div>
      <div className="navbar-end ">
        <NavLink
          to="https://github.com/shahidur-rahman18"
          className="btn"
          style={{
            background: "linear-gradient(to right, #632EE3 0%, #9F62F2 100%)",
          }}
        > 
          <span className="rounded-4xl bg-white w-[30-px] h-[30-px] p-1 "> <CgProfile /></span>
          <span className="text-white"> Contribute</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
