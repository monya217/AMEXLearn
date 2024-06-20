import React from 'react';
import LowerSection from '../../components/Content/LowerSection';
import { Box, Flex } from '@chakra-ui/react';
import CoinsWidget from '../../components/Dashboard/CoinsWidget';

const Podcasts = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Box flex="1">
        <LowerSection />
      </Box>
      <CoinsWidget />
    </Flex>
  );
};

export default Podcasts;
