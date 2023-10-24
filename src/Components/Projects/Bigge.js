import React from "react";
import biggE from "../../Assets/3-min.png";

function Bigge() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="sm:w-1/2 w-full">
        <img src={biggE} alt="" className="sm:w-full w-80 mx-auto" />
      </div>
      <div className="sm:w-1/2 w-full sm:ps-4">
        <h3 className="headFont sm:text-2xl text-xl font-semibold">BiggE</h3>
        <h4 className=" italic -mt-1 text-slate-500">
          Restaurant Website (Frontend)
        </h4>
        <ul className="list-disc ms-7">
          <li>
            A dynamic frontend project for a{" "}
            <span className="italic underline decoration-orange-500">
              burger restaurant website,
            </span>{" "}
            named <span className="font-medium">BiggE</span>.
          </li>
          <li>
            Developed using <span className="font-medium">React</span> to create
            an engaging and{" "}
            <span className="italic underline decoration-rose-500">
              responsive user interface.
            </span>
          </li>
          <li>
            Utilizes <span className="font-medium">Firebase</span> for storing
            user-added orders to the cart in{" "}
            <span className="italic underline decoration-violet-500">
              real-time.
            </span>
          </li>
          {/* <li>
            Features an intuitive and interactive design, providing customers
            with a delightful browsing and ordering experience.
          </li> */}
          <li>
            Explore the synergy of React and Firebase in creating a modern and
            user-friendly restaurant website with real-time order updates.
          </li>
        </ul>
        <div className="flex">
          <a
            href="https://tvicky7x.github.io/BiggE-Website/"
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

export default Bigge;
