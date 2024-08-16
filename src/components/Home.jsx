import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";
import  Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import {Toaster} from "react-hot-toast";

function Home() {
  return (
    <>
    <div>
    <Navbar/>
      <div
      name="Home"
       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-3 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1>Hello , I'm a </h1>
              {/* <span className="text-red-700 font-bold">
                Full Stack Developer
              </span> */}
              <ReactTyped className="text-red-700 font-bold"
                strings={["Full Stack Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-md md:text-md text-justify">
              "As a passionate and results-driven developer, I specialize in
              crafting efficient, scalable, and high-performance solutions. With
              a strong foundation in both front-end and back-end technologies, I
              thrive on transforming complex problems into elegant,
              user-friendly applications. My experience spans various
              industries, and I’m committed to continuous learning and
              innovation. Explore my portfolio to see how I turn ideas into
              reality through clean code and creative problem-solving."
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-center md:justify-between ">
              <div>
                <h1 className="text-2xl mb-2">Available on </h1>
                <ul className="flex space-x-6">

                  <li >
                    <a href='https://github.com/Chanchal2318' target="_blank">
                    <FaGithub className="text-2xl cursor-pointer hover:scale-125 duration-200 " />
                    </a>
                    </li>
                  <li>
                    <a href='https://www.linkedin.com/in/chanchal-rajput-/ ' target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 duration-200 " />
                    </a>
                    </li>
                  <li>
                    <a href='https://www.youtube.com/' target='_blank'>
                    <FaYoutube className="text-2xl cursor-pointer hover:scale-125 duration-200 " />
                    </a>
                    </li>
                  <li>
                    <FaTelegramPlane className="text-2xl cursor-pointer hover:scale-125 duration-200 " />
                  </li>
                </ul>
              </div>
              {/* working technology */}
              <div className="mt-2">
                <h1 className="text-2xl mb-2">Currently Working On </h1>
                <ul className="flex space-x-10">
                  <li>
                  <a href='https://www.mongodb.com/' target='_blank'>
                  <SiMongodb className="text-2xl cursor-pointer hover:scale-125 duration-200 " />
                  </a>
                  </li>
                  <li>
                  <a href='https://expressjs.com/'>
                  <SiExpress className="text-2xl cursor-pointer hover:scale-125 duration-200  " />
                  </a>
                  </li>
                  <li>
                  <a href='https://react.dev/'>
                  <RiReactjsLine className="text-2xl cursor-pointer hover:scale-125 duration-200 " />
                  </a>
                  </li>
                  <li>
                  <a href='https://nodejs.org/en'>
                  <IoLogoNodejs className="text-2xl cursor-pointer hover:scale-125 duration-200 " />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2 w-[200px] h-[200px] ml-20 mt-10">
               <img src='public/photo.avif' className="mt-2 md:w-[420px] md:h-[420px] rounded-full" alt=''/> 
          </div>
        </div>
      </div>
      <hr/>
      <About/>
      <hr/>
      <Portfolio/>
      <hr/>
      <Experience/>
      <hr/>
      <Project/>
      <hr/>
      <Contact/>
      <hr/>
      <Footer/>
      </div>
      <Toaster/>
    </>
  );
}

export default Home;
