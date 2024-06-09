import React from 'react';
import { Flex, Box, Text } from "@chakra-ui/react";
import DashboardCards from '../../components/Dashboard/DashboardCards';
import DashboardChart from '../../components/Dashboard/DashboardChart';
import DashboardTable from '../../components/Dashboard/DashboardTable';
import DashboardPieChart from '../../components/Dashboard/DashboardPieChart';
import DashboardCreditScore from '../../components/Dashboard/DashboardCreditScore';
import DashboardCourseProgress from '../../components/Dashboard/DashboardCourseProgress';
import useAuthStore from "../../store/authStore";

const Dashboard = () => {
  const authUser = useAuthStore(state => state.user);
  if (!authUser) return null;

  return (
    <Flex
      as="main"
      minHeight="100vh"
      bg="gray.50"
      p={8}
      flexDirection="column"
      alignItems="center"
    >
      <Box mb={8} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mt={10}>
          Welcome to your Dashboard, {authUser.fullName}!
        </Text>
      </Box>
      <Flex
        maxW="1200px"
        w="full"
        gap={8}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box flex={{ lg: 3 }} display="flex" flexDirection="column" gap={6}>
          <DashboardCards />
          <DashboardChart />
          <DashboardCreditScore />
        </Box>
        <Box flex={{ lg: 2 }} display="flex" flexDirection="column" gap={6}>
          <DashboardPieChart />
          <DashboardTable />
          <DashboardCourseProgress />
          <Box bg="white" borderRadius="xl" boxShadow="md" p={6}>
            <Text fontSize="xl" fontWeight="bold">
              Sessions History
            </Text>
            <Text mt={4} color="gray.500">
              No scheduled sessions found. Please schedule a new session.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
