import React from 'react';
import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FaCoins } from 'react-icons/fa';
import useAuthStore from "../../../store/authStore";
import './ProfileHeader.css'; // Import CSS for animations

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Day";
  } else {
    return "Good Evening";
  }
};

const ProfileHeader = () => {
  const authUser = useAuthStore(state => state.user);

  return (
    <Box mb={5}>
      <Box
        borderRadius="md"
        p={5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className="profile-header-container" // Add custom class for styling
      >
        <Flex flexDirection="column">
          <Box className="dashboard-title">
            <Text fontSize="md" className="dashboard-text">WELCOME TO YOUR DASHBOARD!</Text>
          </Box>
          <Heading as="h1" size="2xl" fontFamily="Gafata" className="greeting-text">
            {getGreeting()}, {authUser.fullName}!
          </Heading>
        </Flex>

        
      </Box>
    </Box>
  );
};

export default ProfileHeader;
