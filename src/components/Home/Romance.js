import React from "react";
import BigCardModule from "../BigCardModule";
import { romanceData } from "../DataFiles/RomanceData";

const Romance = () => {
  const data = romanceData.slice(0, 4);
  return (
    <>
      <BigCardModule title="romance" data={data} url="/romance" />
    </>
  );
};

export default Romance;
