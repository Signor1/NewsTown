import React from "react";
import PageComp from "../PageComp";
import { celebrityData } from "../DataFiles/CelebrityData";
import CardModule from "../CardModule";
import { latestData } from "../DataFiles/LatestData";

const Celebrity = () => {
  const pageData = celebrityData;
  const data = latestData;
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      {/* Main comp  */}
      <PageComp
        title={`Celebrity Gists`}
        pageData={pageData}
        url="/celebrity"
      />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <div className="lg:mt-16"></div>
        <CardModule title="Latest Posts" data={data} url="/latest" />
      </div>
    </div>
  );
};

export default Celebrity;
