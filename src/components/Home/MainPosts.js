import React from "react";
import Celebrity from "./Celebrity";
import Governance from "./Governance";
import LatestList from "./LatestLists";
import MovieSeries from "./MovieSeries";
import Politics from "./Politics";
import Romance from "./Romance";
import SocialMedia from "./SocialMedia";
import Sports from "./Sports";

const MainPosts = () => {
  return (
    <div className="w-full lg:col-span-2 py-8 md:pl-8 lg:pr-0 md:pr-8">
      <LatestList />
      <Celebrity />
      <Romance />
      <SocialMedia />
      <Sports />
      <Politics />
      <Governance />
      <MovieSeries />
    </div>
  );
};

export default MainPosts;
