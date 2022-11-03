import React from "react";
import BigCardModule from "../BigCardModule";
import { politicsData } from "../DataFiles/PoliticsData";

const Politics = () => {
  const data = politicsData.slice(0, 4);
  return (
    <>
      <BigCardModule title="Politics" data={data} url="/politics" />
    </>
  );
};

export default Politics;
