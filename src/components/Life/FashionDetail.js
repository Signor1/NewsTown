import React from "react";
import CardModule from "../CardModule";
import { carouselData } from "../DataFiles/CarouselData";
import { useParams } from "react-router-dom";
import { fashionData } from "../DataFiles/Life/FashionData";
import SinglePost from "../SinglePost";

const FashionDetail = () => {
  //trending data
  const data = carouselData;

  //geting the param ID converting it to an integer
  const { id } = useParams();
  const idNum = parseInt(id);

  const singleData = fashionData.filter((Post) => Post.id === idNum);
  const relatedData = fashionData.filter((Post) => Post.id !== idNum);
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      <SinglePost title="Fashion" singleData={singleData} />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <CardModule title="Related Posts" data={relatedData} url="/fashion" />
        <div className="my-12"></div>
        <CardModule title="Trending Posts" data={data} url="/trending" />
      </div>
    </div>
  );
};

export default FashionDetail;
