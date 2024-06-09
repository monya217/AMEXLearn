import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ContributeSidebar from './ContributeSidebar'; // Importing ContributeSidebar

export const ContributeLayout = ({ children }) => {
  return (
    <Flex>
      {/* Sidebar content on the left */}
      <Box w={{ base: '70px', md: "240px" }}>
        <ContributeSidebar />
      </Box>
      {/* Page content */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};
