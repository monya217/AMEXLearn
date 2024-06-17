import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts"; // Adjust the import as per your project structure

export const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap='2'>
              <SkeletonCircle size='10' />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height='10px' w={"156px"} />
                <Skeleton height='10px' w={"156px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"156px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"blue.400"}>
            It looks like you don't have any friends yet. 😊
          </Text>
          <Text color={"blue.400"}>Take a break and connect with new people! 🌟</Text>
        </>

      )}
    </Container>
  );
};

export default FeedPosts;
