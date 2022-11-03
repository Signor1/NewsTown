import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const CommentDisplay = ({ commentData }) => {
  const [time, setTime] = useState("");

  const timeFormat = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  useEffect(() => {
    setTime(timeFormat(new Date()));
  }, []);

  return (
    <div className="w-full mt-8">
      <h1 className="md:text-3xl text-xl text-slate-400 font-semibold pt-4 pb-8">
        Comments & Reactions!
      </h1>
      {commentData.length === 0 || null ? (
        <div className="md:text-3xl text-xl text-slate-300 w-full h-14 tracking-widest flex justify-center items-center font-medium">
          No Comments yet!
        </div>
      ) : (
        <ol className="relative border-l border-slate-500 ">
          {commentData.map((comment, index) => (
            <li className="mb-10 ml-6" key={index}>
              <span className="flex absolute -left-4 justify-center items-center w-8 h-8 bg-slate-700 text-slate-200 text-xl rounded-full ring-2 ring-naija">
                <ion-icon name="person"></ion-icon>
              </span>
              <Fade direction="up" duration={500}>
                <div className="p-4 bg-slate-700 rounded-lg border border-slate-500 shadow-sm ">
                  <div className="justify-between items-center mb-3 flex ">
                    <div className="text-sm font-normal text-slate-300 ">
                      {comment.name}
                    </div>
                    <time className="mb-1 text-xs font-normal text-slate-300 sm:order-last sm:mb-0">
                      {time}
                    </time>
                  </div>
                  <div className="p-3 text-xs italic font-normal text-slate-400 bg-slate-800 rounded-lg border border-slate-500 ">
                    {comment.comment}
                  </div>
                </div>
              </Fade>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default CommentDisplay;
