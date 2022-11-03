import React from "react";
import BigCardModule from "../BigCardModule";
import { sportsData } from "../DataFiles/SportData";

const Sports = () => {
  const data = sportsData.slice(0, 4);
  return (
    <>
      <BigCardModule title="Sports" data={data} url="/sports" />
    </>
  );
};

export default Sports;
