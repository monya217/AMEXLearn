import React from 'react';
import { Avatar, Box, Button, Flex, Text, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaEllipsisH, FaRegFrown, FaExclamationTriangle } from 'react-icons/fa';
import useFollowUser from '../../hooks/useFollowUser'; // Adjust the import as per your project structure
import { timeAgo } from '../../utils/timeAgo';
import useAuthStore from '../../store/authStore'; // Import your auth store or hook

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post?.createdBy);
  const currentUser = useAuthStore((state) => state.user); // Adjust as per your auth store

  if (!post || !post.createdBy) {
    return <Box>Post data is not available.</Box>;
  }

  // Check if the creatorProfile is the current user's profile
  const isCurrentUser = currentUser && creatorProfile && currentUser.uid === creatorProfile.uid;

  const handleReport = () => {
    console.log(`Reporting post: ${post.id}`);
    // Implement your report functionality here
  };

  const handleMarkAsSpam = () => {
    console.log(`Marking post as spam: ${post.id}`);
    // Implement your mark as spam functionality here
  };

  return (
    <Flex flexDirection="column" w="full">
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Flex alignItems="center" gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              <Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size="sm" />
            </Link>
          ) : (
            <Avatar size="sm" />
          )}

          <Flex flexDirection="column">
            <Flex fontSize={12} fontWeight="bold" gap={2}>
              {creatorProfile ? (
                <Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
              ) : (
                <Box w="100px" h="10px" bg="gray.200" />
              )}
              <Box color="gray.500">• {timeAgo(post.createdAt)}</Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex alignItems="center">
          {/* Render Follow/Unfollow button only if it's not the current user's post */}
          {!isCurrentUser && (
            <>
              <Button
                size="xs"
                bg="transparent"
                fontSize={12}
                color="blue.500"
                fontWeight="bold"
                _hover={{ color: 'blue.700' }}
                transition="0.2s ease-in-out"
                onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
              <Menu>
                <MenuButton as={IconButton} icon={<FaEllipsisH />} variant="ghost" size="sm" ml={2} />
                <MenuList>
                  <MenuItem icon={<FaRegFrown color='orange' />} onClick={handleReport}>Not interested</MenuItem>
                  <MenuItem icon={<FaExclamationTriangle color='red' />} onClick={handleMarkAsSpam}>Harmful or Spam</MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Flex>
      </Flex>

      {/* Caption */}
      <Box mt={2}>
        <Text fontSize={14} color="gray.800">
          {post.caption}
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
