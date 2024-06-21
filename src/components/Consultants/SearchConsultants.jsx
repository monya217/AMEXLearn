import React from 'react';
import { Box, Input, Button, VStack, Text } from '@chakra-ui/react';
import Sidebar from '../GetInTouch/Sidebar/Sidebar';

const SearchConsultants = () => {
  return (
    <Box p={30}>
        <Sidebar />
      <Text fontSize="2xl" mb={4}>Search Consultants</Text>
      <VStack spacing={4} align="start">
        <Input placeholder="Enter consultant's name" />
        <Button colorScheme="blue">Search</Button>
      </VStack>
    </Box>
  );
};

export default SearchConsultants;
