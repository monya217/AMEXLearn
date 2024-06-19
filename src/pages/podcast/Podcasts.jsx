import React from 'react';
import LowerSection from "../../components/Content/LowerSection";
import FooterPodcast from "../../components/FooterPodcast";
import { Box, Flex } from "@chakra-ui/react"; // Import Box from Chakra UI

const Podcasts = () => {
  return (
    <Box flex="1" flexDirection="column" minH="100vh">
        <Box flex="1">
          <LowerSection />
        </Box>
        <Box mx="7" mt="10">
          <FooterPodcast />
          <Box mb="8" />
        </Box>
      </Box>
    
  );
};

export default Podcasts;
