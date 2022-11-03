import React from "react";
import CardModule from "../CardModule";
import { carouselData } from "../DataFiles/CarouselData";
import { useParams } from "react-router-dom";
import { latestData } from "../DataFiles/LatestData";
import SinglePost from "../SinglePost";

//Component
const LatestDetails = () => {
  //trending data
  const data = carouselData.slice(6, 17);

  //geting the param ID converting it to an integer
  const { id } = useParams();
  const idNum = parseInt(id);

  const singleData = latestData.filter((Post) => Post.id === idNum);
  const relatedData = latestData.filter((Post) => Post.id !== idNum);

  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      <SinglePost title="Latest News" singleData={singleData} />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <CardModule title="Related Posts" data={relatedData} url="/latest" />
        <div className="my-12"></div>
        <CardModule title="Trending Posts" data={data} url="/trending" />
      </div>
    </div>
  );
};

export default LatestDetails;
