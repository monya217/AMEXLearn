import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import useAuthStore from '../../../store/authStore';
import useUserProfileStore from '../../../store/userProfileStore';

const ActivityPost = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);

  // Format the date (assuming post.createdAt is a JavaScript Date object)
  const formattedDate = new Date(post.createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box w="full" borderRadius={4} overflow="hidden" border="1px solid" borderColor="whiteAlpha.300">
      <Flex w="full" gap={4} p={4}>
        {/* Image section */}
        <Flex
          borderRadius={4}
          overflow="hidden"
          border="1px solid"
          borderColor="whiteAlpha.300"
          flex={1.5}
          justifyContent="center"
          alignItems="center"
        >
          {post.imageURL && <Image src={post.imageURL} alt="profile post" />}
        </Flex>

        {/* Post content section */}
        <Flex flex={1} flexDir="column" px={4}>
          {/* Header with profile picture and username */}
          <Flex alignItems="center" gap={2}>
            <Avatar
              src={userProfile.profilePicURL}
              size="sm"
              name={userProfile.username}
            />
            <Text fontWeight="bold" fontSize={12}>
              {userProfile.username}
            </Text>
          </Flex>

          {/* Caption */}
          <Box mt={2} maxH="120px" overflow="auto">
            <Text>{post.caption}</Text>
          </Box>

          {/* Divider */}
          <Divider my={4} bg="gray.500" />

          {/* Post footer */}
          <Flex alignItems="center" gap={4}>
            {/* Likes */}
            <Flex alignItems="center">
              <AiFillHeart size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.likes.length}
              </Text>
            </Flex>

            {/* Comments */}
            <Flex alignItems="center">
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.comments.length}
              </Text>
            </Flex>

            {/* Post Date */}
            <Text ml={4} fontSize={12} color="gray.500">
              {formattedDate}
            </Text>

            {/* Delete button (visible only to post owner) */}
            {authUser?.uid === userProfile.uid && (
              <Box ml="auto">
                <MdDelete size={20} cursor="pointer" />
              </Box>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ActivityPost;
