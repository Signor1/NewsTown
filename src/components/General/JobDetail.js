import React from "react";
import CardModule from "../CardModule";
import { carouselData } from "../DataFiles/CarouselData";
import { useParams } from "react-router-dom";
import { jobsData } from "../DataFiles/General/JobsData";
import SinglePost from "../SinglePost";

const JobDetail = () => {
  //trending data
  const data = carouselData;

  //geting the param ID converting it to an integer
  const { id } = useParams();
  const idNum = parseInt(id);

  const singleData = jobsData.filter((Post) => Post.id === idNum);
  const relatedData = jobsData.filter((Post) => Post.id !== idNum);
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      <SinglePost title="Jobs/Vacancies" singleData={singleData} />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <CardModule title="Related Posts" data={relatedData} url="/jobs" />
        <div className="my-12"></div>
        <CardModule title="Trending Posts" data={data} url="/trending" />
      </div>
    </div>
  );
};

export default JobDetail;
