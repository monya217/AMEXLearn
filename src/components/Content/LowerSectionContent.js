import React from "react";
import LowerSectionHeader from "../Content/LowerSectionHeader";
import SongCard from "../Content/SongCard";
import { Box } from "@chakra-ui/react";

const LowerSectionContent = ({ songs, title }) => {
  return (
    <Box w="full">
      <LowerSectionHeader title={title} />
      <SongCard songs={songs} />
    </Box>
  );
};

export default LowerSectionContent;
