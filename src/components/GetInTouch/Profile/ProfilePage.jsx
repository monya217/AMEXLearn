import { Container, Flex, Link, Text } from "@chakra-ui/react";
import ProfileHeader from "./GITProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";
import useGetUserProfileByUsername from "../../../hooks/useGetUserProfileByUsername";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useState } from 'react';
import { SkeletonCircle, VStack,Skeleton } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import { PageLayout } from "../../../GetInTouchLayouts/PageLayout/PageLayout";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);
  const [selectedTab, setSelectedTab] = useState('posts');

  const userNotFound = !isLoading && !userProfile;
  if (userNotFound) return <UserNotFound />;

   
  return (
    <Flex>
      <Sidebar />
      <Container maxW='container.lg' py={5} flex="1">
        <Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
          {!isLoading && userProfile && <ProfileHeader userProfile={userProfile} />}
          {isLoading && <ProfileHeaderSkeleton />}
        </Flex>
        <Flex
          px={{ base: 2, sm: 4 }}
          maxW={"full"}
          mx={"auto"}
          borderTop={"1px solid"}
          borderColor={"whiteAlpha.300"}
          direction={"column"}
        >
          <ProfileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <ProfilePosts selectedTab={selectedTab} userProfile={userProfile} />
        </Flex>
      </Container>
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

