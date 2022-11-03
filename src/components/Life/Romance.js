import React from "react";
import PageComp from "../PageComp";
import { romanceData } from "../DataFiles/RomanceData";
import CardModule from "../CardModule";
import { carouselData } from "../DataFiles/CarouselData";

const Romance = () => {
  const pageData = romanceData;
  const data = carouselData;
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      {/* Main comp  */}
      <PageComp title={`Romance`} pageData={pageData} url="/romance" />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <div className="lg:mt-16"></div>
        <CardModule title="Trending Posts" data={data} url="/trending" />
      </div>
    </div>
  );
};

export default Romance;
