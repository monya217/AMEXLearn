import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Center } from '@chakra-ui/react';
import ProfileHeader from '../../components/Dashboard/Learn/ProfileHeader';
import LeaderboardChart from '../../components/Dashboard/Learn/LeaderboardChart';
import LearningHoursChart from '../../components/Dashboard/Learn/LearningHoursChart';
import CourseList from '../../components/Dashboard/Learn/CourseList';
import GameList from '../../components/Dashboard/Learn/GameList';
import Certifications from '../../components/Dashboard/Learn/Certifications';
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar'; 

const ProfilePage = () => {
  return (
    <Flex>
      <DashboardSidebar /> 
      <Box p={5} mt={10} flex="1">
        <ProfileHeader />

        <Heading size="lg" mb={5}>Courses and Games</Heading>

        <Center mb={5}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg="white"
              textAlign="center"
              // Center alignment added
              mx="auto"
            >
              <Stat>
                <StatLabel fontSize="lg" fontWeight="bold">Courses Completed</StatLabel>
                <StatNumber fontSize="3xl" color={"blue.500"} fontWeight="bold">4</StatNumber>
              </Stat>
            </Box>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg="white"
              textAlign="center"
              // Center alignment added
              mx="auto"
            >
              <Stat>
                <StatLabel fontSize="lg" fontWeight="bold">Courses in Progress</StatLabel>
                <StatNumber fontSize="3xl" color={"blue.500"} fontWeight="bold">5</StatNumber>
              </Stat>
            </Box>
          </SimpleGrid>
        </Center>

        <Flex flexDirection={{ base: 'column', md: 'row' }} gap={10}>
          <LeaderboardChart />
          <LearningHoursChart />
        </Flex>

        <Heading size="md" mb={3} mt={10}>Courses</Heading>
        <CourseList />

        <Heading size="md" mb={3} mt={10}>Games</Heading>
        <GameList />

        <Certifications />
      </Box>
    </Flex>
  );
};

export default ProfilePage;
