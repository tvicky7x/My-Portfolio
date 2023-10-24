import React from "react";
import Joybox from "./Joybox";
import Xpenseai from "./Xpenseai";
import Bigge from "./Bigge";

function Projects() {
  return (
    <div id="Projects" className="sm:mt-12 mt-8">
      <h2 className="headFont sm:text-3xl text-2xl font-semibold">
        Featured Works<span className="ms-1 relative bottom-1">💼</span>
      </h2>
      <p className="mt-1 mb-6">
        Here's a glimpse of my most{" "}
        <span className=" underline decoration-lime-500 italic">exciting</span>{" "}
        and{" "}
        <span className="underline decoration-amber-500 italic">impactful</span>{" "}
        work, where <span className="font-medium">every project</span> has a{" "}
        story😃 to tell.
      </p>
      <Joybox />
      <div className="sm:py-6 py-3"></div>
      <Xpenseai />
      <div className="sm:py-6 py-3"></div>
      <Bigge />
    </div>
  );
}

export default Projects;
