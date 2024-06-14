import React from 'react';
import { Box, Flex, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import DashboardSidebar from './DashboardSidebar';
import ProfileHeader from './Learn/ProfileHeader';

const SessionsSection = () => {
  // Sample data for upcoming session
  const upcomingSession = {
    consultantName: 'John Doe',
    sessionDate: '2024-06-20',
    sessionTime: '10:00 AM',
    bookedOn: '2024-06-15',
  };

  // Sample data for session history
  const sessionHistory = [
    {
      consultantName: 'Jane Smith',
      sessionDate: '2024-06-15',
      sessionTime: '2:00 PM',
      bookedOn: '2024-06-10',
    },
    {
      consultantName: 'Michael Johnson',
      sessionDate: '2024-06-10',
      sessionTime: '11:00 AM',
      bookedOn: '2024-06-05',
    },
    {
      consultantName: 'Emily Davis',
      sessionDate: '2024-06-05',
      sessionTime: '3:00 PM',
      bookedOn: '2024-05-30',
    },
  ];

  return (
    <Flex>
      <DashboardSidebar /> 
        <Box p={5} mt={10} flex="1">
        <ProfileHeader />
        <Heading size="lg" mb={5}>
            Sessions
        </Heading>

        <Flex flexDirection={{ base: 'column', md: 'row' }} gap={10}>
                <Box p={5} shadow="md" borderWidth="1px" flex="1">
            <Heading size="md" mb={4}>
                Upcoming Sessions
            </Heading>
            {/* Add consultant image */}
            <Flex alignItems="center" mb={4}>
                <Box
                bgImage="./consultant1.png"
                bgSize="cover"
                borderRadius="full"
                h={20}
                w={20}
                mr={4}
                />
                {/* Consultant name and company */}
                <Box>
                <Text fontWeight="bold">{upcomingSession.consultantName}</Text>
                <Text>Consultant Company</Text>
                </Box>
            </Flex>
            {/* Add rating and experience */}
            <Flex alignItems="center" mb={4}>
                <Text fontWeight="bold" mr={2}>
                Rating: 4.5
                </Text>
                <Text>Experience: 5 years</Text>
            </Flex>
            <Flex alignItems="center" mt={2}>
                <FaCalendarAlt />
                <Text ml={2}>{upcomingSession.sessionDate}</Text>
            </Flex>
            <Flex alignItems="center" mt={2}>
                <FaClock />
                <Text ml={2}>{upcomingSession.sessionTime}</Text>
            </Flex>
            <Text mt={4}>Booked on: {upcomingSession.bookedOn}</Text>
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" flex="1">
            <Heading size="md" mb={4}>
                Information
            </Heading>
            <Text fontWeight="bold">Number of Sessions Booked: 4</Text>
            <Text fontWeight="bold" mt={4}>
                Time to Next Session: 2 days, 5 hours
            </Text>
            </Box>
        </Flex>

        <Box mt={10}>
            <Heading size="md" mb={5}>
            Sessions History
            </Heading>
            <Table variant="simple">
            <Thead>
                <Tr>
                <Th>Consultant Name</Th>
                <Th>Session Date</Th>
                <Th>Session Time</Th>
                <Th>Booked On</Th>
                <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {sessionHistory.map((session, index) => (
                <Tr key={index}>
                    <Td>{session.consultantName}</Td>
                    <Td>{session.sessionDate}</Td>
                    <Td>{session.sessionTime}</Td>
                    <Td>{session.bookedOn}</Td>
                    <Td>
                    <Button colorScheme="blue" size="sm">
                        Rebook
                    </Button>
                    </Td>
                </Tr>
                ))}
            </Tbody>
            </Table>
        </Box>
        </Box>
    </Flex>
  );
};

export default SessionsSection;