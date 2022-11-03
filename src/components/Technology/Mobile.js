import React from "react";
import PageComp from "../PageComp";
import { mobileData } from "../DataFiles/Technology/MobileData";
import CardModule from "../CardModule";
import { carouselData } from "../DataFiles/CarouselData";

const Mobile = () => {
  const pageData = mobileData;
  const data = carouselData;
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      {/* Main comp  */}
      <PageComp title={`Mobile`} pageData={pageData} url="/mobile" />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <div className="lg:mt-16"></div>
        <CardModule title="Trending Posts" data={data} url="/trending" />
      </div>
    </div>
  );
};

export default Mobile;
