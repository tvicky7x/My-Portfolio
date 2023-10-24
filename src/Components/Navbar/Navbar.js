import React, { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  function alterMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <div className="  text-slate-800 pt-2 sm:px-4 px-3">
        <div className=" max-w-4xl mx-auto sm:flex justify-between items-center">
          <div className=" flex justify-between">
            <h1 className="text-2xl font-semibold headFont">T Vicky</h1>
            {!menu && (
              <span
                className="material-symbols-outlined text-3xl sm:hidden"
                onClick={alterMenu}
              >
                menu
              </span>
            )}
            {menu && (
              <span
                className="material-symbols-outlined text-3xl sm:hidden"
                onClick={alterMenu}
              >
                close
              </span>
            )}
          </div>
          <ul className=" text-slate-600 font-semibold hidden sm:flex items-center space-x-6 headFont">
            <li className=" hover:font-bold hover:text-slate-700">
              <a href="#Home">Home</a>
            </li><li className=" hover:font-bold hover:text-slate-700">
              <a href="#Projects">Projects</a>
            </li>
            <li className=" hover:font-bold hover:text-slate-700">
              <a href="#About">About</a>
            </li>
            
          </ul>
          {menu && (
            <ul className="sm:hidden text-right items-center pt-2 space-y-3 headFont font-semibold">
              <li className=" hover:font-semibold">
                <a href="#Home">Home</a>
              </li> <li className=" hover:font-semibold">
                <a href="#Projects">Projects</a>
              </li>
              <li className=" hover:font-semibold">
                <a href="#About">About</a>
              </li>
             
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
