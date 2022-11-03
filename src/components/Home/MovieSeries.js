import React from "react";
import BigCardModule from "../BigCardModule";
import { movieSeriesData } from "../DataFiles/MovieSeriesData";

const MovieSeries = () => {
  const data = movieSeriesData.slice(0, 4);
  return (
    <>
      <BigCardModule title="Series" data={data} url="/series" />
    </>
  );
};

export default MovieSeries;
