import React from "react";
import BigCardModule from "../BigCardModule";
import { celebrityData } from "../DataFiles/CelebrityData";

const Celebrity = () => {
  const data = celebrityData.slice(0, 4);
  return (
    <>
      <BigCardModule title="celebrity Gists" data={data} url="/celebrity" />
    </>
  );
};

export default Celebrity;
