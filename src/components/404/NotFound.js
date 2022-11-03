import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-slate-900 grid place-items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-naija font-bold font-poppins md:text-9xl text-7xl">
          404
        </h1>
        <h3 className="text-slate-400 md:text-5xl text-3xl">Page Not Found!</h3>
      </div>
    </div>
  );
};

export default NotFound;
