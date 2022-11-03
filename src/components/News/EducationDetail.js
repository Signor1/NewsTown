import React from "react";
import CardModule from "../CardModule";
import { latestData } from "../DataFiles/LatestData";
import { useParams } from "react-router-dom";
import { educationData } from "../DataFiles/News/EducationData";
import SinglePost from "../SinglePost";

const EducationDetail = () => {
  //trending data
  const data = latestData;

  //geting the param ID converting it to an integer
  const { id } = useParams();
  const idNum = parseInt(id);

  const singleData = educationData.filter((Post) => Post.id === idNum);
  const relatedData = educationData.filter((Post) => Post.id !== idNum);
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      <SinglePost title="Educational News" singleData={singleData} />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <CardModule title="Related Posts" data={relatedData} url="/education" />
        <div className="my-12"></div>
        <CardModule title="Latest Posts" data={data} url="/latest" />
      </div>
    </div>
  );
};

export default EducationDetail;
