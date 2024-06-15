import React from 'react';

import UpperSection from "../../components/Content/UpperSection";
import LowerSection from "../../components/Content/LowerSection";
import FooterPodcast from "../../components/FooterPodcast";
import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI

const Podcasts = () => {
  return (
    <Box mx="7" mt="10"> {/* Adjust mx for left and right margin */}
      <Box my="7"> {/* Optional: Adjust my for top and bottom margin */}
        <UpperSection  />
        <LowerSection />
      </Box>
      <FooterPodcast />
      <Box mb="20" /> {/* Increase bottom margin */}
    </Box>
  );
};

export default Podcasts;
