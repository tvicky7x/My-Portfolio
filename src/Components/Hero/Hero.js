import React from "react";
import webDeveloper from "../../Assets/Hand coding-bro-min.png";

function Hero() {
  return (
    <div
      id="Home"
      className="mt-1 flex flex-wrap justify-between items-center sm:py-20 md:py-24"
    >
      <div className="sm:w-1/2 sm:order-1 order-first w-full flex">
        <img src={webDeveloper} alt="" className="sm:w-full w-72 mx-auto" />
      </div>
      <div className="sm:w-1/2">
        {/* <h1 className="headFont flex flex-col sm:text-5xl text-4xl font-semibold">
          Frontend Design
          <span className=" text-2xl sm:text-4xl font-medium italic lowercase">
            Meets
          </span>
          Backend Power
        </h1>  */}
        <h1 className="headFont flex flex-col sm:text-5xl text-4xl font-semibold">
          Designing Digital
          <span className=" text-2xl sm:text-4xl font-medium italic lowercase">
            Wonders
          </span>
        </h1>
        {/* <p className="sm:mt-4 mt-3 text-lg">
          Hi👋, I'm a{" "}
          <span className=" bg-yellow-200 px-1 text-slate-950">
            Full Stack Developer
          </span>{" "}
          <span className="underline decoration-sky-500 italic">
            passionate
          </span>{" "}
          about creating web{" "}
          <span className="underline decoration-pink-500 italic">
            solutions
          </span>{" "}
          that work seamlessly from{" "}
          <span className=" text-slate-950 font-medium">
            Front <span className=" font-normal">to</span> Back.
          </span>
        </p> */}
        <p className="sm:mt-4 mt-3 text-lg">
          Hi👋, I'm a{" "}
          <span className="bg-yellow-200 px-1 text-slate-950">
            Frontend Developer,
          </span>{" "}
          and I'm{" "}
          <span className="underline decoration-lime-500 italic">
            passionate
          </span>{" "}
          about making <span className="font-medium">websites</span> come to
          life with{" "}
          <span className="underline decoration-rose-500 italic">
            beautiful designs
          </span>{" "}
          and{" "}
          <span className="underline decoration-sky-500 italic">
            seamless interactions
          </span>
          .
        </p>
        <div className="flex sm:mt-6 mt-4">
          <a
            target="_blank"
            href="/T Vicky Frontend Resume.pdf"
            className="flex items-center bg-slate-800 text-white py-1 px-2 rounded hover:scale-105 transition-all duration-150 ease-in-out"
          >
            Resume{" "}
            <span className="material-symbols-outlined ms-1">description</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
