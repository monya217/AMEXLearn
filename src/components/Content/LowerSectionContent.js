import React from "react";
import LowerSectionHeader from "../Content/LowerSectionHeader";
import SongCard from "../Content/SongCard";
const LowerSectionContent = ({ songs, title }) => {  
  return (
    <>
      <LowerSectionHeader title={title} />
      <SongCard songs={songs} />
    </>
  );
};

export default LowerSectionContent;