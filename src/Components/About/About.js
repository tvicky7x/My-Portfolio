import React from "react";
// import selfImage from "../../Assets/SelfImage-min.png";
import selfImage from "../../Assets/T Vicky sharpimag.jpg";

function About() {
  return (
    <div id="About" className=" sm:mt-12 mt-8 sm:flex items-center">
      <div className=" sm:w-1/2 w-full flex">
        <img
          src={selfImage}
          alt=""
          className="aspect-auto sm:w-[80%] w-72 mx-auto rounded"
        />
      </div>
      <div className=" sm:w-1/2 sm:mt-0 mt-5">
        <h2 className="headFont sm:text-3xl text-2xl font-semibold">
          Meet the Developer<span className="ms-1 relative bottom-1">👨‍💻</span>
        </h2>
        {/* <p className="mt-2">
          Hey there! I'm <span className=" font-medium">T Vicky,</span> a{" "}
          <span className=" italic text-indigo-800">
            "full stack developer"
          </span>
          . My passion lies in crafting websites and applications that work{" "}
          <span className=" underline decoration-pink-500 text-slate-950">
            beautifully
          </span>{" "}
          and{" "}
          <span className="underline decoration-fuchsia-600 text-slate-950">
            seamlessly.
          </span>{" "}
          From the way things look and feel on the surface to the inner workings
          that make it all happen, I'm here to make your{" "}
          <span className=" font-medium">digital vision</span>
          💡 a <span className=" font-medium">reality</span>😎. Let's work
          together to bring your{" "}
          <span className=" px-1 bg-lime-200 text-slate-950">
            web dreams to life!
          </span>
        </p> */}
        <p className="mt-2">
          Hey there! I'm <span className="font-medium">T Vicky</span>, a{" "}
          <span className="bg-sky-200 px-1 text-slate-950">
            frontend developer.
          </span>{" "}
          My joy is in creating web designs that captivate and engage. From the{" "}
          <span className="underline decoration-pink-500 italic">
            surface aesthetics
          </span>{" "}
          to{" "}
          <span className="underline decoration-violet-500 italic">
            seamless user experiences
          </span>
          , I'm here to transform your web vision💡 into a reality😎.{" "}
          <span className="font-medium">Let's collaborate</span> to bring your
          <span className="bg-lime-200 px-1 text-slate-950">
            online dreams to life!
          </span>
        </p>
        <div className="flex sm:mt-6 mt-4">
          <a
            target="_blank"
            href="/T Vicky resume Next.js Developer.pdf"
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

export default About;
