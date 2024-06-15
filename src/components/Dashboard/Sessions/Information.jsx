import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Information = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1">
      <Heading size="md" mb={4}>
        Information
      </Heading>
      <Text fontWeight="bold">
        Number of Sessions Booked: 
        <Text as="span" fontSize="xl" color="blue.500" ml={2}>
          4
        </Text>
      </Text>
      <Text fontWeight="bold" mt={4}>
        Time to Next Session: 
        <Text as="span" fontSize="xl" color="blue.500" ml={2}>
          2 days, 5 hours
        </Text>
      </Text>
    </Box>
  );
};

export default Information;
