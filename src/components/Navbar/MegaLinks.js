import React, { useState } from "react";
import { Link } from "react-router-dom";
import { megaLinks } from "./MyLinks";

const MegaLinks = ({ toggleNav }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubheading] = useState("");
  return (
    <>
      {megaLinks.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left lg:cursor-pointer group ">
            <h1
              key={index}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubheading("");
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
                  <div className="bg-slate-600 p-5 grid grid-cols-6 justify-items-center">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-sm mb-2 font-poppins text-gray-900 font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className="text-xs text-gray-300 my-1"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-naija transition duration-200"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
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
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubheading(slinks.Head)
                        : setSubheading("")
                    }
                    className="py-2 pl-7 text-gray-300 font-semibold flex justify-between items-center lg:pr-0 pr-5"
                  >
                    {slinks.Head}
                    <span className="text-xl lg:mt-1 lg:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "lg:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <li className="py-3 pl-14" key={index}>
                        <Link
                          className="hover:text-naija text-gray-300 transition duration-200"
                          to={slink.link}
                          onClick={toggleNav}
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
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

export default MegaLinks;
