import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <div>
        {/*div 1*/}
        <div className="flex justify-around  bg-blue-500">
          <NavLink to="/students">Students</NavLink>
          <NavLink to="facultystaff">Faculty & Staff</NavLink>
          <NavLink to="parents">Parents</NavLink>
          <NavLink to="/visitors">Visitors</NavLink>
          <NavLink to="/examinations">Examinations</NavLink>
          <NavLink to="/alumini">Alumini</NavLink>
          <NavLink to="/campus">
            <div className="flex justify-center items gap-x-1">
              <p>Campus</p>
              <p className="bottom-0"><FaChevronDown /></p>
            </div>
          </NavLink>
        </div>
        <div className="flex justify-around items-center  bg-slate-300">
          {" "}
          {/*div 2*/}
          <div>
            <img
              src="https://iiitvadodara.ac.in/assets/images/IIIT_VADODARA_LOGO.png"
              width={"100px"}
              height={"150px"}
            />
          </div>
          <div className="flex justify-between space-x-10">
            <NavLink to="/news">News</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/contactus">ContactUS</NavLink>
            <NavLink to="/admissions">Admissions</NavLink>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly bg-red-300 ml-40 mr-40">
        {/*div 3*/}
        <div className="flex justify-center items-center gap-x-1">
          <p>Academics</p>
          <FaChevronDown />

        </div>
        <div className="flex justify-center items-center gap-x-1">
          <p>Research</p>
          <FaChevronDown />

        </div>
        <div className="flex justify-center items-center gap-x-1">
          <p>Calender</p>
          <FaChevronDown />

        </div>
        <div className="flex justify-center items-center gap-x-1">
          <p>International</p>
          <FaChevronDown />

        </div >
        <div className="flex justify-center items-center gap-x-1">
          <p>About</p>
          <FaChevronDown />

        </div>
        <div className="mt-1">
        <IoIosSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
