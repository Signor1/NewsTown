import React from "react";
import PageComp from "../PageComp";
import { worldData } from "../DataFiles/News/WorldData";
import CardModule from "../CardModule";
import { latestData } from "../DataFiles/LatestData";

const World = () => {
  const pageData = worldData;
  const data = latestData;
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      {/* Main comp  */}
      <PageComp title={`World News`} pageData={pageData} url="/world" />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <div className="lg:mt-16"></div>
        <CardModule title="Latest Posts" data={data} url="/latest" />
      </div>
    </div>
  );
};

export default World;
