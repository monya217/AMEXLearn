import { Box, Flex, Skeleton, Text, VStack } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../../hooks/useGetUserPosts";

const ProfilePosts = () => {
  const { isLoading, posts } = useGetUserPosts();

  if (isLoading) {
    return (
      <Box w="full">
        <VStack align="stretch" spacing={4} py={4}>
          {[0, 1, 2].map((_, idx) => (
            <Skeleton key={idx} height="300px" w="full">
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          ))}
        </VStack>
      </Box>
    );
  }

  if (posts.length === 0) {
    return (
      <Flex flexDir="column" textAlign="center" mx="auto" mt={10}>
        <Text fontSize="2xl">No Posts Found🤔</Text>
      </Flex>
    );
  }

  return (
    <Box w="full">
      <VStack align="stretch" spacing={12} py={4} w="full">
        {posts.map((post) => (
          <ProfilePost key={post.id} post={post} />
        ))}
      </VStack>
    </Box>
  );
};

export default ProfilePosts;
