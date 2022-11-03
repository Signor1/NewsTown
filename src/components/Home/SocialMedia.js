import React from "react";
import BigCardModule from "../BigCardModule";
import { socialMediaData } from "../DataFiles/SocialMediaData";

const SocialMedia = () => {
  const data = socialMediaData.slice(0, 4);
  return (
    <>
      <BigCardModule title="Social Media" data={data} url="/social-media" />
    </>
  );
};

export default SocialMedia;
