import React from 'react';
import { Box, Image, Skeleton, SkeletonText, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { FaEllipsisH, FaRegFrown, FaExclamationTriangle } from 'react-icons/fa'; // Import necessary icons
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import useGetUserProfileById from '../../hooks/useGetUserProfileById'; // Adjust the import as per your project structure

const FeedPost = ({ post }) => {
  const { userProfile, isLoading } = useGetUserProfileById(post.createdBy);

  const handleReport = () => {
    console.log(`Reporting post: ${post.id}`);
    // Implement your report functionality here
  };

  const handleMarkAsSpam = () => {
    console.log(`Marking post as spam: ${post.id}`);
    // Implement your mark as spam functionality here
  };

  if (isLoading) {
    return (
      <Box 
        border="1px solid" 
        borderColor="gray.200"
        borderRadius="md" 
        overflow="hidden" 
        bg={"white"}
        mb={5} 
        p={4} 
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
      borderColor="gray.200"
      borderRadius="md" 
      overflow="hidden" 
      mb={5} 
      p={4}
      bg={"white"}
      _hover={{ bg: "gray.100" }} // Adjust hover effect to a light bluish tone
    >
      <PostHeader post={post} creatorProfile={userProfile} />
      {post.imageURL && ( // Render Image component only if imageURL exists
        <Box my={2}>
          <Image src={post.imageURL} alt={userProfile?.username} />
        </Box>
      )}
      <PostFooter post={post} />

      {/* Menu for additional actions */}
      <Menu>
        <MenuButton as={IconButton} icon={<FaEllipsisH />} variant="ghost" size="sm" aria-label="Options" />
        <MenuList>
          <MenuItem icon={<FaRegFrown color='orange' />} onClick={handleReport}>Not interested</MenuItem>
          <MenuItem icon={<FaExclamationTriangle color='red' />} onClick={handleMarkAsSpam}>Harmful or Spam</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default FeedPost;
