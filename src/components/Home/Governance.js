import React from "react";
import BigCardModule from "../BigCardModule";
import { governanceData } from "../DataFiles/GovernanceData";

const Governance = () => {
  const data = governanceData.slice(0, 4);
  return (
    <>
      <BigCardModule title="Governance" data={data} url="/governance" />
    </>
  );
};

export default Governance;
