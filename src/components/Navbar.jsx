import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";

const Navbar = () => {
  const handleSignout = () => {};
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allservices">Services</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className=" navbar bg-base-100 shadow-sm md:px-5  border-b border-b-slate-300 fixed top-0 left-0 w-full z-50 ">
      
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to="/allservices">Services</MyLink>
          </li>
          <MyLink to="/my-profile">My Profile</MyLink>
          {/*  {user && (
            <li>
              <MyLink to={"/profile"}>Profile</MyLink>
            </li>
          )} */}
        </ul>
        {/* 
        {loading ? (
          <ClockLoader color="#e74c3c" />
        ) : user ? ( */}
        <div className="text-center space-y-3">
          {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
          {/* For TSX uncomment the commented types below */}
          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
          >
            <img
              src={/* user?.photoURL ||  */ "https://via.placeholder.com/88"}
              className="h-[40px] w-[40px] rounded-full mx-auto"
              alt=""
            />
          </button>

          <div
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={
              { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
            }
          >
            <h2 className="text-xl font-semibold">
              {/* {user?.displayName} */}Name
            </h2>
            <p className="text-white/80">{/* {user?.email} */}email</p>
            <button onClick={handleSignout} className="my-btn">
              Sign Out
            </button>
          </div>
        </div>
        {/* ) : ( */}
        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
        {/* )} */}
      </MyContainer>
    </div>
  );
};

export default Navbar;
