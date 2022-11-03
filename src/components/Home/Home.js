import React from "react";
import Carousel from "./Carousel";
import AsidePosts from "./AsidePosts";
import MainPosts from "./MainPosts";
const Home = () => {
  return (
    <div className="mt-16">
      <Carousel />
      <div className="grid lg:grid-cols-3 lg:gap-6 w-full h-auto px-4 py-4">
        <MainPosts />
        <AsidePosts />
      </div>
    </div>
  );
};

export default Home;
