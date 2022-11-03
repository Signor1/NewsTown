import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const LatestNews = ({ title, data }) => {
  return (
    <div className="w-full">
      <h1 className="font-semibold pb-8 text-naija flex items-center gap-2 tracking-wide md:text-4xl text-2xl uppercase font-poppins">
        {title}
      </h1>
      {data && (
        <ol className="relative border-l border-gray-400">
          {data.map((list, index) => (
            <li className="mb-8 ml-4" key={index}>
              <div className="absolute w-3 h-3 bg-naija rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <Fade direction="up" duration={500}>
                <time className="text-md font-serif flex items-center gap-2 font-normal leading-none text-gray-400">
                  <ion-icon name="time-outline"></ion-icon>
                  {list.time}
                </time>
                <h4 className="text-md my-2 font-serif flex items-center gap-2 font-normal leading-none text-gray-400">
                  <ion-icon name="folder-outline"></ion-icon>
                  {list.type}
                </h4>
                <h3 className="md:text-2xl text-xl my-4 font-semibold text-gray-300">
                  {list.title}
                </h3>
                <p className="mb-2 text-lg text-justify font-normal text-gray-500 dark:text-gray-400">
                  {list.body.slice(0, 150)}...
                </p>
                <Link
                  to={`/latest/${list.id}`}
                  className="inline-flex hover:underline hover:gap-1 items-center text-sm font-medium text-naija"
                >
                  Read <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
              </Fade>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default LatestNews;
