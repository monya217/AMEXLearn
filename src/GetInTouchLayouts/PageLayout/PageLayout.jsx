import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../components/GetInTouch/Sidebar/Sidebar'; // Importing Sidebar as default export

import SuggestedConsultants from '../../components/Consultants/SuggestedConsultant';
import Trending from '../../components/GetInTouch/Trending';

export const PageLayout = ({ children }) => {
  return (
    <Flex>
      {/* Sidebar content on the left */}
      <Box w={{ base: '70px', md: "240px" }}>
        <Sidebar />
      </Box>
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>

      {/* Page content on the right */}
      <Box 
        flex={3} 
        mt={{ base: 2, lg: 100}} 
        mr={{ base: 2, lg: 57}} // Adjust margin-right as needed
        display={{ base: "none", lg: "block" }} 
        maxW={"300px"}
      >
        <SuggestedConsultants />
        <Trending />
      </Box>
    </Flex>
  );
};
