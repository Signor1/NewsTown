import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const BigCardModule = ({ title, data, url }) => {
  return (
    <div className="p-2 w-full bg-slate-700 rounded-lg shadow-md sm:p-4 mb-16">
      <div className="mb-4 bg-slate-800 rounded-t-lg border-b border-naija py-3 pl-4">
        <h5 className="md:text-xl text-lg font-poppins font-bold uppercase leading-none text-gray-300">
          {title}
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-slate-400">
          {data.map((post, index) => (
            <li className="py-3 sm:py-4 md:px-0 px-2" key={index}>
              <Fade direction="up" duration={500}>
                <div className="grid grid-cols-3 align-content-start space-x-4">
                  <div className="col-span-1 md:h-auto  h-24 rounded-md border-2 border-slate-400">
                    <img
                      className="md:h-32 h-24 w-full rounded-md object-cover object-top"
                      src={post.img}
                      alt={post.title}
                    />
                  </div>
                  <div className="col-span-2">
                    <Link to={`${url}/${post.id}`} className="group">
                      {post.author ? (
                        <h4 className="md:text-md text-sm py-1 group-hover:text-naija transition duration-300 font-serif flex items-center gap-1 font-normal leading-none text-slate-400">
                          Author:
                          <span className="flex items-center capitalize gap-1">
                            <ion-icon name="person-outline"></ion-icon>
                            {post.author}
                          </span>
                        </h4>
                      ) : (
                        <h4 className="md:text-md text-sm py-1 group-hover:text-naija transition duration-300 font-serif font-normal leading-none text-slate-400">
                          <span className="flex items-center capitalize gap-1">
                            <ion-icon name="calendar-number-outline"></ion-icon>
                            {post.time}
                          </span>
                        </h4>
                      )}

                      <h3 className="md:text-xl text-md group-hover:text-gray-300 transition duration-300 font-serif font-semibold text-slate-900 ">
                        {post.title}
                      </h3>
                    </Link>
                  </div>
                </div>
              </Fade>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center py-2">
          <Link
            to={url}
            className="text-center font-medium flex items-center transition-all duration-300 md:text-lg text-md font-poppins text-naija hover:underline hover:gap-1"
          >
            See More <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigCardModule;
