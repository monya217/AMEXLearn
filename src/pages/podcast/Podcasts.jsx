import React from 'react';

import UpperSection from "../../components/Content/UpperSection";
import LowerSection from "../../components/Content/LowerSection";
import FooterPodcast from "../../components/FooterPodcast";
import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import AddPodcastForm from '../GetinTouchProfile/addpodcast';


const Podcasts = () => {
  return (
    <Box mx="7" mt="10"> {/* Adjust mx for left and right margin */}
      <Box my="7"> {/* Optional: Adjust my for top and bottom margin */}
      {/* <AddPodcastForm/> */}
        <UpperSection  />
        <LowerSection />
      </Box>
      {/* <Footer/> */}
      <FooterPodcast />
      <Box mb="8" /> {/* Increase bottom margin */}
    </Box>
  );
};

export default Podcasts;
