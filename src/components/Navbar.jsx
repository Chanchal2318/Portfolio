import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import {Link} from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="max-w-screen-2xl conatiner mx-auto px-4 md:px-20 h-16 shadow-md md:fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 ">
            <img
              src="public/photo.avif"
              className="mt-2 h-12 w-12 rounded-full"
              alt=""
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Chancha<span className="text-green-500 text-2xl">l</span>
              <p className="text-sm ml-1">Web Developer</p>
            </h1>
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to="/">Home</Link></li>
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to="/about">About</Link></li>
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to="/portfolio">Portfolio</Link></li>
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to='/experience'>Experience</Link></li>  
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to='/project'>Project</Link></li>      
              {/* <li className="hover:scale-105 duration-200 cursor-pointer ">Resume</li> */}
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to='contact'>Contacts</Link></li>
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24}/> : <AiOutlineMenu  size={24} />}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
       {
        menu && (
            <div className="bg-white">
            <ul className="md:hidden flex flex-col items-center h-screen justify-center space-y-4 text-xl ">
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to="/">Home</Link></li>
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to="/about">About</Link></li>
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to="/portfolio">Portfolio</Link></li>
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to='/experience'>Experience</Link> </li>
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to ="/project">Project</Link></li>
              {/* <li className="hover:scale-105 duration-200 cursor-pointer ">Resume</li> */}
              <li className="hover:scale-105 duration-200 cursor-pointer "><Link to='/contact'>Contacts</Link></li>
            </ul>
          </div>
        )
       }
      </div>
    </>
  );
}

export default Navbar;
