import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import DashboardSidebar from './DashboardSidebar';
import ProfileHeader from './Learn/ProfileHeader';
import UpcomingSessions from './Sessions/UpcomingSessions';
import Information from './Sessions/Information';
import SessionsHistory from './Sessions/SessionsHistory';


const SessionsSection = () => {
  return (
    <Flex>
      <DashboardSidebar />
      <Box p={5} mt={10} flex="1">
        <ProfileHeader />
        <Heading size="lg" mb={5}>
          Sessions
        </Heading>

        <Flex flexDirection={{ base: 'column', md: 'row' }} gap={10}>
          <UpcomingSessions />
          <Information />
        </Flex>

        <Box mt={10}>
          <Heading size="md" mb={5}>
            Sessions History
          </Heading>
          <SessionsHistory />
        </Box>
      </Box>
    </Flex>
  );
};

export default SessionsSection;
