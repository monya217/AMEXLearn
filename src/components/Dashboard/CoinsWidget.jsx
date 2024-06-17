import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';

const CoinsWidget = () => {
  return (
    <Box
      position="fixed"
      top="50px"
      right="20px"
      p={3}
      bg="white"
      color="black"
      boxShadow="lg"
      borderRadius="md"
      zIndex="99" // Ensure it's above other content
    >
      <Flex alignItems="center">
        <Icon as={FaCoins} boxSize="24px" color="yellow.400" mr={2} />
        <Text fontSize="lg" fontWeight="bold">1,190 Coins</Text>
      </Flex>
    </Box>
  );
};

export default CoinsWidget;
