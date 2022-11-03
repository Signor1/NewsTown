import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const Dropdown = ({ toggleNav }) => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left lg:cursor-pointer group ">
            <h1
              key={index}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
              className="py-4 text-gray-300 hover:text-naija transition duration-200 flex justify-between items-center lg:pr-0 pr-5 group"
            >
              {link.name}
              <span className="text-xl lg:hidden lg:mt-1 lg:ml-2 inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl lg:block hidden  lg:mt-1 lg:ml-2 group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-16 w-full right-0 hidden group-hover:lg:block hover:lg:block">
                  <div className="bg-slate-600 px-5 py-8 flex justify-center flex-wrap gap-5">
                    {link.sublinks.map((mysublinks, index) => (
                      <li key={index} className="text-xs text-gray-300 my-1">
                        <Link
                          to={mysublinks.link}
                          className="hover:text-naija transition duration-200"
                        >
                          {mysublinks.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Mega menu  */}
          <div className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <div>
                    <li className="py-3 pl-14">
                      <Link
                        className="hover:text-naija text-gray-300 transition duration-200"
                        to={slinks.link}
                        onClick={toggleNav}
                      >
                        {slinks.name}
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Dropdown;
