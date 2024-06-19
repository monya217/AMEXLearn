import React from 'react';
import LowerSection from '../../components/Content/LowerSection';
import FooterPodcast from '../../components/FooterPodcast';
import { Box, Flex } from '@chakra-ui/react';

const Podcasts = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1">
        <LowerSection />
      </Box>
    </Flex>
  );
};

export default Podcasts;
