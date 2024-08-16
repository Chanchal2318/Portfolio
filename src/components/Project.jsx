import React from "react";
import Books from "../../public/Books.jpg";
import Simon from "../../public/Simon.jpeg";
import Zerodha from "../../public/Zerodha.svg";
import Scissor from "../../public/Scissor.jpeg";
import WanderLust from "../../public/WanderLust.jpg";

function Project() {
  const cardItem = [
    {
      id: 1,
      logo: Books,
      name: "Bookstore App",
      description:"It is a frontend react based project that shows various courses related to different learning program.",
      technologies:"Reactjs, TailwindCSS, etc. "
    },
    {
      id: 2,
      logo: Simon,
      name: "Simon Says Game",
      description:"It is a fun memory challenge where players must mimic a sequence of colors.",
      technologies:"Html , CSS , Javascript "
    },
    {
      id: 3,
      logo: Zerodha,
      name:"Zerodha Clone",
      description: "It  offers low-cost trading and investment services with a focus on technology and innovation.",
      technologies:"Reactjs , MongoDB , Nodejs ,Expressjs ,Bootstrap, etc."
    },
    {
      id: 4,
      logo: Scissor,
      name: "Stone, Paper and Scissors",
      description:"It is a classic hand game where players choose between rock, paper, or scissors ",
      technologies:"Html , CSS , JS "
    },
    {
      id: 5,
      logo: WanderLust,
      name: "WanderLust",
      description:"It is a Full Stack Web project that offers information, booking options, and virtual tours.",
      technologies:"Html , CSS , JS , MongoDB , Nodejs ,Expressjs , etc."
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-white"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, technologies }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] ml-20"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 ml-10">{name}</div>
                <p className=" text-gray-700">{description}</p>
                <p className=" text-gray-700"><span className="text-yellow-500 underline">Technologies:-</span> {technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
