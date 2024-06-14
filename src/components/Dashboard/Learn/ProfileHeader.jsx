import React from 'react';
import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FaCoins } from 'react-icons/fa';
import useAuthStore from "../../../store/authStore";

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
      <Flex justify="space-between" align="center">
        <Heading size="xl">{getGreeting()}, {authUser.fullName}!</Heading>
      </Flex>
      <Box
        position="fixed"
        top={50}
        right={2}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        p={2}
        display="flex"
        alignItems="center"
        zIndex={1000}
      >
        <Icon as={FaCoins} boxSize="24px" color="yellow.400" mr={2} />
        <Text fontSize="lg" fontWeight="bold" mr={2}>1,190</Text>
        <Text fontSize="lg" fontWeight="bold">Coins</Text>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
