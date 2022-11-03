import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="w-full h-screen z-50 bg-slate-900 absolute top-0 left-0 right-0 bottom-0 grid place-items-center">
      <div className="different-directions"></div>
    </div>
  );
};

export default Preloader;
