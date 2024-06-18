import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import { FaPlay, FaRegCalendarAlt, FaBroadcastTower } from 'react-icons/fa'; // Import necessary icons

const LiveSessionCard = ({ imageUrl, title, person, date, time, isLive, isPast, isUpcoming }) => {
  return (
    <Box
      mb="20px"
      border="1px solid rgba(0, 0, 0, 0.1)"
      boxShadow="rgba(149, 157, 165, 0.1) 0px 8px 24px"
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Box className="item-img" position="relative">
        <Image src={imageUrl} alt={title} className="session-image" width="100%" />
        {isPast && (
          <Box position="absolute" top="0" right="0" bg="blackAlpha.600" color="white" p="2px 8px" fontSize="12px">
            {time}
          </Box>
        )}
      </Box>
      <Box className="item-body" mt="14px" mb="14px" px="18px">
        <Text fontSize="15px" lineHeight="1.4" fontWeight="900" className="item-title">{title}</Text>
        <Text fontSize="12.5px" fontWeight="500" color="rgba(0, 0, 0, 0.6)" className="item-person">{person}</Text>
        <Flex align="center" mt="2" className="item-date" justifyContent="space-between">
          <Flex align="center">
            <FaRegCalendarAlt fontSize="20px" />
            <Text fontSize="15px" fontWeight="600" ml="2">{date}</Text>
          </Flex>
          {isLive && (
            <Flex align="center" color="red.500" ml="4">
              <FaBroadcastTower />
              <Text fontSize="12.5px" fontWeight="600" ml="2">LIVE</Text>
            </Flex>
          )}
        </Flex>
      </Box>
      <Flex className="item-btns" justifyContent="space-between" px="18px" pb="10px" mt="auto">
        {isLive && (
          <Button
            className="item-btn view-btn"
            fontSize={{ base: '14px', md: '16px' }} // Responsive font size
            flex="1" // Ensures button takes available space
            mx="2px" // Margin between buttons
            py={{ base: '4px', md: '6px' }} // Responsive padding
            fontWeight="700"
            transition="all 300ms linear"
            whiteSpace="nowrap"
            bg="var(--primary-hue)"
            color="white"
            border="1px solid black"
            _hover={{ bg: 'white', color: 'black' }}
            textAlign="center" // Ensure text is centered
          >
            Join
          </Button>
        )}
        {isPast && (
          <Button
            className="item-btn play-btn"
            fontSize={{ base: '14px', md: '16px' }} // Responsive font size
            flex="1" // Ensures button takes available space
            mx="2px" // Margin between buttons
            py={{ base: '4px', md: '6px' }} // Responsive padding
            fontWeight="700"
            transition="all 300ms linear"
            whiteSpace="nowrap"
            bg="var(--primary-hue)"
            color="white"
            border="1px solid black"
            _hover={{ bg: 'white', color: 'black' }}
            textAlign="center" // Ensure text is centered
          >
            View
          </Button>
        )}
        {isUpcoming && (
          <Button
            className="item-btn schedule-btn"
            fontSize={{ base: '14px', md: '16px' }} // Responsive font size
            flex="1" // Ensures button takes available space
            mx="2px" // Margin between buttons
            py={{ base: '4px', md: '6px' }} // Responsive padding
            fontWeight="700"
            transition="all 300ms linear"
            whiteSpace="nowrap"
            bg="var(--primary-hue)"
            color="white"
            border="1px solid black"
            _hover={{ bg: 'white', color: 'black' }}
            textAlign="center" // Ensure text is centered
          >
            Schedule
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default LiveSessionCard;
