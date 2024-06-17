import React from 'react';
import { Box, Flex, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { FaClock, FaCalendarAlt, FaBookmark, FaStar } from 'react-icons/fa';

const UpcomingSessions = () => {
  // Sample data for upcoming session
  const upcomingSession = {
    consultantName: 'Michael Johnson',
    sessionDate: '2024-06-20',
    sessionTime: '10:00 AM',
    bookedOn: '2024-06-15',
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1">
      <Heading size="md" mb={4}>
        Upcoming Sessions
      </Heading>
      {/* Consultant image */}
      <Flex alignItems="center" mb={4}>
        <Image
          src="/consultant3.jpeg"
          borderRadius="10"
          boxSize="90px"
          mr={4}
          w={"18%"}
        />
        {/* Consultant name and company */}
        <Box>
          <Text fontWeight="bold">{upcomingSession.consultantName}</Text>
          <Text>AMEX</Text>
          <Flex alignItems="center" mt={2}>
            <Text mr={1}>
              Rating: 4.8
            </Text>
            <FaStar color="gold" />
            <Text ml={4}>Experience: 6 years</Text>
          </Flex>
        </Box>
      </Flex>
      <SimpleGrid columns={3} spacing={5} mt={4}>
        <Box textAlign="center">
          <Flex alignItems="center" justifyContent="center">
            <FaCalendarAlt />
            <Text ml={2}>Date:</Text>
          </Flex>
          <Text mt={2}>{upcomingSession.sessionDate}</Text>
        </Box>
        <Box textAlign="center">
          <Flex alignItems="center" justifyContent="center">
            <FaClock />
            <Text ml={2}>Time:</Text>
          </Flex>
          <Text mt={2}>{upcomingSession.sessionTime}</Text>
        </Box>
        <Box textAlign="center">
          <Flex alignItems="center" justifyContent="center">
            <FaBookmark />
            <Text ml={2}>Booked On:</Text>
          </Flex>
          <Text mt={2}>{upcomingSession.bookedOn}</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default UpcomingSessions;
