import React from "react";
import { bluesData } from "../DataFiles/Music/BluesData";
import CardModule from "../CardModule";
import { carouselData } from "../DataFiles/CarouselData";
import PageMusicC from "../PageMusicC";

const Blues = () => {
  const pageData = bluesData;
  const data = carouselData;
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      {/* Main comp  */}
      <PageMusicC title={`Blues`} pageData={pageData} url="/blues" />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <div className="lg:mt-16"></div>
        <CardModule title="Trending Posts" data={data} url="/trending" />
      </div>
    </div>
  );
};

export default Blues;
