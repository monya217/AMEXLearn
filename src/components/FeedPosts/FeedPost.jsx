import React from 'react';
import { Box, Image, Skeleton, SkeletonText } from '@chakra-ui/react';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import useGetUserProfileById from '../../hooks/useGetUserProfileById'; // Adjust the import as per your project structure

const FeedPost = ({ post }) => {
  const { userProfile, isLoading } = useGetUserProfileById(post.createdBy);

  if (isLoading) {
    return (
      <Box border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden" mb={5} p={4}>
        <Skeleton height="40px" mb={4} />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <Skeleton height="200px" mt="4" />
      </Box>
    );
  }

  if (!post) {
    return <Box>Post data is not available.</Box>;
  }

  return (
    <Box 
      border="1px solid" 
      borderColor="gray.200" 
      borderRadius="md" 
      overflow="hidden" 
      mb={5}
      p={4}
    >
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2}>
        <Image src={post.imageURL} alt={userProfile?.username} />
      </Box>
      <PostFooter post={post} />
    </Box>
  );
};

export default FeedPost;
