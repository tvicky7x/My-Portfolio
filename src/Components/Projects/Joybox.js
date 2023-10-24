import React from "react";
import joyBox from "../../Assets/1-min.png";

function Joybox() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="sm:w-1/2 w-full">
        <img src={joyBox} alt="" className="sm:w-full w-80 mx-auto" />
      </div>
      <div className="sm:w-1/2 w-full sm:ps-4">
        <h3 className="headFont sm:text-2xl text-xl font-semibold">JoyBox</h3>
        <h4 className=" italic -mt-1 text-slate-500">
          Mailbox Client (Frontend)
        </h4>
        <ul className="list-disc ms-7">
          <li>
            <span className="font-medium">React-powered</span> mailbox client
            project.
          </li>
          <li>
            Utilizes <span className="font-medium">Firebase</span> as the
            backend for{" "}
            <span className=" italic underline decoration-red-500">
              real-time updates
            </span>{" "}
            and{" "}
            <span className=" italic underline decoration-green-500">
              secure authentication
            </span>
            .
          </li>
          <li>
            <span className=" font-medium">User-friendly</span>,{" "}
            <span className="font-medium">responsive</span>, and intuitive
            design.
          </li>
          <li>Effortless email management with JoyBox.</li>
          <li>
            Combines technology and design for a modern mailbox experience.
          </li>
        </ul>
        <div className="flex">
          <a
            href="https://joybox-mail.web.app/"
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

export default Joybox;
