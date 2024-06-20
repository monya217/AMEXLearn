import React, { useContext } from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';
import { CoinsContext } from '../../context/CoinsContext';

const CoinsWidget = () => {
  const { coins } = useContext(CoinsContext);

  return (
    <Box
      position="fixed"
      top="50px"
      right="2px"
      p={2}  // Reduced padding
      bg="white"
      color="black"
      boxShadow="lg"
      borderRadius="md"
      zIndex="99"
    >
      <Flex alignItems="center">
        <Icon as={FaCoins} boxSize="20px" color="yellow.400" mr={1} />  
        <Text fontSize="md" fontWeight="bold">{coins} Coins</Text>
      </Flex>
    </Box>
  );
};

export default CoinsWidget;
