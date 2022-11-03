import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TrendingCard = ({ title, data, url }) => {
  return (
    <div className="p-2 w-full bg-slate-800 rounded-lg shadow-md sm:p-4 mt-12">
      <div className="mb-4">
        <h5 className="md:text-2xl text-xl font-poppins font-bold uppercase leading-none text-gray-400 pt-3 pl-2">
          {title}
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-slate-400">
          {data.map((post, index) => (
            <li className="py-3 sm:py-4" key={index}>
              <Fade direction="up" duration={500}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 rounded-md border-2 border-slate-400">
                    <img
                      className="h-24 w-28 rounded-md object-cover object-top"
                      src={post.img}
                      alt={post.title}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link to={`${url}/${post.id}`} className="group">
                      <h4 className="text-sm py-1 group-hover:text-naija transition duration-300 font-serif flex items-center gap-2 font-normal leading-none text-slate-400">
                        {post.singer}
                      </h4>
                      <h3 className="text-md group-hover:text-gray-300 transition duration-300 font-serif font-semibold text-slate-400 ">
                        {post.title.length > 60
                          ? post.title.slice(0, 60) + "..."
                          : post.title}
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

export default TrendingCard;
