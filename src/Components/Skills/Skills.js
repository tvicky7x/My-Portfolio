import React from "react";

function Skills() {
  // const skillSet = [
  //   "HTML5",
  //   "CSS3",
  //   "JavaScript",
  //   "React",
  //   "Node.js",
  //   "GitHub",
  //   "FireBase",
  //   "Responsive Web Design",
  //   "User Interface (UI) Design",
  //   "Database Design",
  //   "API Development",
  // ];
  const skillSet = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "GitHub",
    "FireBase",
    "Responsive Web Design",
    "User Interface (UI) Design",
  ];

  return (
    <div className="sm:mt-0 mt-12">
      <h2 className="headFont sm:text-3xl text-2xl font-semibold">
        My Toolbox<span className="ms-1 relative bottom-1">🧰</span>
      </h2>
      {/* <p className="mt-1">
        As a full stack developer, I <span className=" line-through">like</span>{" "}
        <span className=" underline decoration-wavy decoration-red-500">
          love
        </span>{" "}
        crafting elegant code. These are the{" "}
        <span className="font-medium">tools</span> I rely on to bring your
        ideas💡 to{" "}
        <span className=" px-1 bg-rose-200 text-slate-950">life.</span>
      </p> */}
      <p className="mt-1">
        As a <span className="font-medium">frontend developer</span>, I have a{" "}
        <span className="underline decoration-wavy decoration-red-500">
          passion
        </span>{" "}
        for creating{" "}
        <span className="underline decoration-fuchsia-500 italic">
          visually appealing
        </span>{" "}
        and{" "}
        <span className="underline decoration-orange-500 italic">
          user-friendly designs
        </span>
        . These are the <span className="font-medium">tools</span> I use to turn
        your ideas💡 into digital art🎨.
      </p>
      <ul className="mt-6 flex flex-wrap sm:text-lg">
        {skillSet.map((skill) => {
          return (
            <li
              key={skill}
              className=" bg-slate-200 font-medium px-2 py-0.5 rounded sm:mr-2.5 mr-2 mb-2 sm:mb-2.5"
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
