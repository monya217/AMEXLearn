import React from 'react';
import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useFollowUser from '../../hooks/useFollowUser'; // Adjust the import as per your project structure
import { timeAgo } from '../../utils/timeAgo';

const PostHeader = ({ post, creatorProfile }) => {
  // Ensure useFollowUser is called unconditionally
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post?.createdBy);

  if (!post || !post.createdBy) {
    return <Box>Post data is not available.</Box>;
  }

  return (
    <Flex flexDirection="column" w={"full"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              <Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size={"sm"} />
            </Link>
          ) : (
            <SkeletonCircle size='10' />
          )}

          <Flex flexDirection="column">
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
              {creatorProfile ? (
                <Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
              ) : (
                <Skeleton w={"100px"} h={"10px"} />
              )}
              <Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
            </Flex>
          </Flex>
        </Flex>

        <Box cursor={"pointer"}>
          <Button
            size={"xs"}
            bg={"transparent"}
            fontSize={12}
            color={"blue.500"}
            fontWeight={"bold"}
            _hover={{
              color: "white",
            }}
            transition={"0.2s ease-in-out"}
            onClick={handleFollowUser}
            isLoading={isUpdating}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        </Box>
      </Flex>

      {/* Image description */}
      <Box mt={2}>
        <Text fontSize={12} color={"gray.600"}>
          Calling all Finance enthusiasts in the finance festival.
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
