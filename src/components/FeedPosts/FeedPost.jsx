import React from 'react';
import { Box, Image, Skeleton, SkeletonText } from '@chakra-ui/react';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import useGetUserProfileById from '../../hooks/useGetUserProfileById'; // Adjust the import as per your project structure

const FeedPost = ({ post }) => {
  const { userProfile, isLoading } = useGetUserProfileById(post.createdBy);

  if (isLoading) {
    return (
      <Box 
        border="1px solid" 
        borderColor="blue.300" // Set the border color to a bluish tone
        borderRadius="md" 
        overflow="hidden" 
        mb={5} 
        p={4} 
        bg="blue.50" // Set the background color to a light bluish tone
      >
        <Skeleton height="40px" mb={4} />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        {post.imageURL && <Skeleton height="200px" mt="4" />} {/* Only show image skeleton if imageURL exists */}
      </Box>
    );
  }

  if (!post) {
    return <Box>Post data is not available.</Box>;
  }

  return (
    <Box 
      border="1px solid" 
      borderColor="blue.300" // Set the border color to a bluish tone
      borderRadius="md" 
      overflow="hidden" 
      mb={5} 
      p={4}
      bg="blue.50" // Set the background color to a light bluish tone
      _hover={{ bg: "blue.100" }} // Adjust hover effect to a light bluish tone
    >
      <PostHeader post={post} creatorProfile={userProfile} />
      {post.imageURL && ( // Render Image component only if imageURL exists
        <Box my={2}>
          <Image src={post.imageURL} alt={userProfile?.username} />
        </Box>
      )}
      <PostFooter post={post} />
    </Box>
  );
};

export default FeedPost;
