import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import ProfileHeader from "./GITProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";
import ProfileBlogs from "./ProfileBlogs";
import useGetUserProfileByUsername from "../../../hooks/useGetUserProfileByUsername";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useState } from 'react';
import { SkeletonCircle, VStack, Skeleton } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile, error } = useGetUserProfileByUsername(username);
  const [selectedTab, setSelectedTab] = useState('posts');

  if (isLoading) return <ProfileHeaderSkeleton />;

  if (error) {
    return (
      <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
        <Sidebar />
        <Text fontSize={"2xl"}>Error: {error.message}</Text>
        <Link
          as={RouterLink}
          to={"/"}
          color={"blue.500"}
          w={"max-content"}
          mx={"auto"}
          mt={10}
        >
          Go home
        </Link>
      </Flex>
    );
  }

  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

  return (
    <Flex>
    
      <Box p={5} mt={10} flex="1" ml={0}>
      <Container maxW="100%" px={0} ml={0} mt={-10}>
          <Flex py={10} px={4} w="full" flexDirection="column">
            <ProfileHeader userProfile={userProfile} />
          </Flex>
          <Flex
            px={{ base: 2, sm: 4 }}
            w="full"
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
            flexDirection="column"
          >
            <ProfileTabs
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            {selectedTab === "posts" ? (
              <ProfilePosts userProfile={userProfile} />
            ) : (
              <ProfileBlogs userProfile={userProfile} />
            )}
          </Flex>
        </Container>
        </Box>
    </Flex>
  );
};

export default ProfilePage;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size='24' />

      <VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
        <Skeleton height='12px' width='150px' />
        <Skeleton height='12px' width='100px' />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir='column' textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link as={RouterLink} to={"/get-in-touch"} color={"blue.500"} w={"max-content"} mx={"auto"}>
        Go home
      </Link>
    </Flex>
  );
};
