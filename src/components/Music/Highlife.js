import React from "react";
import { highlifeMusicData } from "../DataFiles/Music/HighlifeMusicData";
import CardModule from "../CardModule";
import { carouselData } from "../DataFiles/CarouselData";
import PageMusicC from "../PageMusicC";

const Highlife = () => {
  const pageData = highlifeMusicData;
  const data = carouselData;
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      {/* Main comp  */}
      <PageMusicC
        title={`Highlife/Old School`}
        pageData={pageData}
        url="/highlife"
      />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <div className="lg:mt-16"></div>
        <CardModule title="Trending Posts" data={data} url="/trending" />
      </div>
    </div>
  );
};

export default Highlife;
