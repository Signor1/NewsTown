import React from "react";
import CardModule from "../CardModule";
import { latestData } from "../DataFiles/LatestData";
import { useParams } from "react-router-dom";
import { socialMediaData } from "../DataFiles/SocialMediaData";
import SinglePost from "../SinglePost";

const SocialMediaDetail = () => {
  //trending data
  const data = latestData;

  //geting the param ID converting it to an integer
  const { id } = useParams();
  const idNum = parseInt(id);

  const singleData = socialMediaData.filter((Post) => Post.id === idNum);
  const relatedData = socialMediaData.filter((Post) => Post.id !== idNum);
  return (
    <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4 mt-16">
      <SinglePost title="Social Media" singleData={singleData} />
      <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8 mt-4">
        <CardModule
          title="Related Posts"
          data={relatedData}
          url="/social-media"
        />
        <div className="my-12"></div>
        <CardModule title="Latest Posts" data={data} url="/latest" />
      </div>
    </div>
  );
};

export default SocialMediaDetail;
