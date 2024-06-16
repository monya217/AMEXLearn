import {
  Container,
  Flex,
  Link,
  Text,
  Skeleton,
  SkeletonCircle,
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import ActivityHeader from "./Activity/ActivityHeader";
import ActivityProfileTabs from "./Activity/ActivityProfileTabs";
import ActivityProfilePosts from "./Activity/ActivityProfilePosts";
import ActivityProfileBlogs from "./Activity/ActivityProfileBlogs"; // Import the new component
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import ProfileHeader from "./Learn/ProfileHeader";

const Activity = () => {
  const { username } = useParams();
  const { isLoading, userProfile, error } =
    useGetUserProfileByUsername(username); // Include error handling if possible
  const [selectedTab, setSelectedTab] = useState("posts");

  if (isLoading) return <ProfileHeaderSkeleton />;

  if (error) {
    return (
      <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
        <DashboardSidebar />
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

  const userNotFound = !userProfile;
  if (userNotFound) return <UserNotFound />;

  return (
    <Flex>
      <DashboardSidebar />
      <Box p={5} mt={10} flex="1" ml={0}>
        {" "}
        {/* Adjusted margin-left to 0 */}
        <ProfileHeader />
        <Heading size="lg">Your Activity</Heading>
        <Container maxW="100%" px={0} ml={0}>
          <Flex py={10} px={4} w="full" flexDirection="column">
            <ActivityHeader userProfile={userProfile} />
          </Flex>
          <Flex
            px={{ base: 2, sm: 4 }}
            w="full"
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
            flexDirection="column"
          >
            <ActivityProfileTabs
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            {selectedTab === "posts" ? (
              <ActivityProfilePosts userProfile={userProfile} />
            ) : (
              <ActivityProfileBlogs userProfile={userProfile} />
            )}
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};

export default Activity;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size="24" />

      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go home
      </Link>
    </Flex>
  );
};
