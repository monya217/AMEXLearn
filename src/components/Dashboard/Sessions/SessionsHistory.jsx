import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { FaCalendarAlt, FaClock, FaBookmark } from 'react-icons/fa';

const SessionsHistory = () => {
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
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Consultant Name</Th>
          <Th>
            <Box display="flex" alignItems="center">
              <FaCalendarAlt style={{ marginRight: '5px' }} />
              Session Date
            </Box>
          </Th>
          <Th>
            <Box display="flex" alignItems="center">
              <FaClock style={{ marginRight: '5px' }} />
              Session Time
            </Box>
          </Th>
          <Th>
            <Box display="flex" alignItems="center">
              <FaBookmark style={{ marginRight: '5px' }} />
              Booked On
            </Box>
          </Th>
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
  );
};

export default SessionsHistory;
