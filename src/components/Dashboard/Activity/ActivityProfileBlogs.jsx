// ActivityProfileBlogs.jsx
import React from 'react';
import { Box, Flex, Skeleton, Text, VStack } from "@chakra-ui/react";
import ActivityBlog from "./ActivityBlog";
import useGetUserBlogs from "../../../hooks/useGetUserBlogs";

const ActivityProfileBlogs = () => {
  const { isLoading, blogs } = useGetUserBlogs();

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

  if (blogs.length === 0) {
    return (
      <Flex flexDir="column" textAlign="center" mx="auto" mt={10}>
        <Text fontSize="2xl">No Blogs Found🤔</Text>
      </Flex>
    );
  }

  return (
    <Box w="full">
      <VStack align="stretch" spacing={12} py={4} w="full">
        {blogs.map((blog) => (
          <ActivityBlog key={blog.id} blog={blog} />
        ))}
      </VStack>
    </Box>
  );
};

export default ActivityProfileBlogs;
