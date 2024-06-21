import React, { useContext, useState } from 'react';
import { Box, Flex, Text, Icon, List, ListItem } from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';
import { CoinsContext } from '../../context/CoinsContext';

const CoinsWidget = () => {
  const { coins } = useContext(CoinsContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <Box
      position="fixed"
      top="50px"
      right="0"
      p={2}
      bg="rgba(0, 0, 0, 0.5)"  // Black background with 50% opacity
      color="white"  // Text color
      boxShadow="lg"
      borderRadius="0 0 0 5px"  // Different radius for each corner
      zIndex="99"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      cursor="pointer"  // Add cursor pointer to indicate hoverable area
    >
      <Flex alignItems="center">
        <Icon as={FaCoins} boxSize="20px" color="yellow.400" mr={1} />  
        <Text fontSize="md" fontWeight="bold">{coins} Coins</Text>
      </Flex>

      {showTooltip && (
        <Box
          p={2}
          bg="rgba(0, 0, 0, 0.7)"  // Black background with 70% opacity
          color="white"  // Text color
          borderRadius="5px 0 0 5px"
          fontSize="sm"
          fontFamily="Lato, sans-serif"
          position="absolute"
          top="43px"  // Adjust top position based on your layout
          right="0"
          zIndex="98"  // Ensure it's below CoinsWidget
          minWidth="295px"  // Ensure tooltip width is sufficient
        >
          <Box mb={2}>
            <Text fontWeight="bold" fontSize="17px">How you can earn coins:</Text>
            <List spacing={0.5}>
              <ListItem fontSize="14px">
                <Icon as={FaCoins} boxSize="13px" color="yellow.400" mr={1} />
                By playing games.
              </ListItem>
              <ListItem fontSize="14px">
                <Icon as={FaCoins} boxSize="13px" color="yellow.400" mr={1} />
                Completing courses, lectures, assignments, and quizzes.
              </ListItem>
            </List>
          </Box>
          <Box mt={2}>
            <Text fontWeight="bold" fontSize="17px">How to use these coins:</Text>
            <List spacing={2}>
              <ListItem fontSize="14px">
                <Icon as={FaCoins} boxSize="13px" color="yellow.400" mr={1} />
                Redeem coins to get discounts on sessions with consultants.
              </ListItem>
            </List>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CoinsWidget;





