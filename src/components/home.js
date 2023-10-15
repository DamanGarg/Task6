import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../image/me.jpg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Web Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        I am an enthusiastic full-stack web developer with a strong passion for frontend development.
        I find joy in creating captivating and intuitive user interfaces, and I'm committed to advancing 
        in this exciting journey in the dynamic field of web development.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-3/4 md:w-3/4"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;