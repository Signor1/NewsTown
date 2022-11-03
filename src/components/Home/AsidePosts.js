import React from "react";
import CardModule from "../CardModule";
import { afroMusicData } from "../DataFiles/AfroMusicData";
import { carouselData } from "../DataFiles/CarouselData";
import { comedyVideosData } from "../DataFiles/ComedyVideosData";
import { hollywoodData } from "../DataFiles/HollywoodData";
import { koreanSeriesData } from "../DataFiles/KoreanSeriesData";
import { movieSeriesData } from "../DataFiles/MovieSeriesData";
import { wrestlingData } from "../DataFiles/WrestlingData";
import TrendingCard from "../TrendingCard";
const AsidePosts = () => {
  const data = carouselData.slice(6, 17);
  const musicData = afroMusicData.slice(0, 6);
  const seriesData = movieSeriesData.slice(0, 6);
  const moviesData = hollywoodData.slice(0, 6);
  const kDrama = koreanSeriesData.slice(0, 6);
  const comedyData = comedyVideosData.slice(0, 6);
  const wrestling = wrestlingData.slice(0, 6);

  return (
    <div className="w-full lg:col-span-1 py-8 md:pr-8 lg:pl-0 md:pl-8">
      <CardModule title="Trending Posts" data={data} url="/trending" />
      <TrendingCard title="K-Drama" data={kDrama} url="/kdrama" />
      <TrendingCard
        title="Comedy Videos"
        data={comedyData}
        url="/comedyvideos"
      />
      <TrendingCard title="Wrestling" data={wrestling} url="/wrestling" />
      <TrendingCard title="Trending Music" data={musicData} url="/afromusic" />
      <TrendingCard title="Trending Series" data={seriesData} url="/series" />
      <TrendingCard title="Trending Movies" data={moviesData} url="/movies" />
    </div>
  );
};

export default AsidePosts;
