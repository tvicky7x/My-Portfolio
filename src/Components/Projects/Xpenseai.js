import React from "react";
import xpenseAi from "../../Assets/2-min.png";

function Xpenseai() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="sm:w-1/2 w-full">
        <img src={xpenseAi} alt="" className="sm:w-full w-80 mx-auto" />
      </div>
      <div className="sm:w-1/2 w-full sm:ps-4">
        <h3 className="headFont sm:text-2xl text-xl font-semibold">
          Xpense AI
        </h3>
        <h4 className=" italic -mt-1 text-slate-500">
          Expense Tracker (Frontend)
        </h4>
        <ul className="list-disc ms-7">
          <li>Frontend project for an innovative expense tracker.</li>
          <li>
            Developed using <span className="font-medium">React</span> for a{" "}
            <span className=" italic underline decoration-blue-500">
              responsive user interface.
            </span>
          </li>
          <li>
            <span className=" italic underline decoration-lime-500">
              Real-time updates
            </span>{" "}
            and{" "}
            <span className=" italic underline decoration-yellow-500">
              secure authentication
            </span>{" "}
            powered by <span className="font-medium">Firebase</span>.
          </li>
          <li>Streamlines expense tracking and financial management.</li>
          <li>
            The project exemplifies the fusion of technology and design for
            simplicity.
          </li>
        </ul>
        <div className="flex">
          <a
            href="https://xpense-ai.web.app/"
            rel="noreferrer"
            target="_blank"
            className="flex items-center mt-3 bg-slate-800 text-white py-1 px-2
      rounded hover:scale-105 transition-all duration-150 ease-in-out text-base"
          >
            Visit Site{" "}
            <span className="material-symbols-outlined ms-0.5">
              arrow_right_alt
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Xpenseai;
