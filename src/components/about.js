import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-dark-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Daman Garg, nice to meet you. Please take a
                look around my portfolio. Hope you like it!
              </p>
            </div>
            <div>
              <p>
                {" "}
                After completing my secondary education, I pursued a Bachelor's degree in Computer Science at VIT College. 
                Throughout my academic journey, I've been captivated by the problem-solving nature of programming. 
                The satisfaction of untangling complex challenges and crafting effective solutions fuels my passion. 
                As I approach the end of my studies, I'm eager to transition into the professional world and apply my skills 
                and knowledge as an intern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;