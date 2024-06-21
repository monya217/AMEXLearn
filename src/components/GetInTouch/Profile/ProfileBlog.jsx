import React, { useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  Text,
  Avatar,
  Image,
  Button,
} from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import useAuthStore from '../../../store/authStore';
import useUserProfileStore from '../../../store/userProfileStore';
import { deleteObject, ref } from 'firebase/storage';
import { firestore, storage } from '../../../firebase/firebase';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import useShowToast from '../../../hooks/useShowToast';
import { useToast } from "@chakra-ui/react";

const ActivityBlog = ({ blog }) => {
  const showToast = useToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteBlog = useUserProfileStore((state) => state.deleteBlog);

  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteDoc(doc(firestore, "blogs", id));
        showToast({
          title: "Blog deleted.",
          description: "The blog has been deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        window.location.reload();
      } catch (err) {
        console.error(err);
        showToast({
          title: "Error deleting blog.",
          description: "An error occurred while deleting the blog.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp?.seconds * 1000); 
    if (isNaN(date)) {
      return 'Invalid Date';
    }
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
          {blog.imgUrl && (
            <Image
              src={blog.imgUrl}
              alt="profile blog"
              maxW="90%"
              maxH="90%"
              htmlWidth="auto"
              htmlHeight="auto"
            />
          )}
        </Flex>

        <Flex flex={1} flexDir="column" px={4}>
          <Flex alignItems="center" gap={2}>
            <Avatar src={userProfile.profilePicURL} size="sm" name={userProfile.username} />
            <Text fontWeight="bold" fontSize={12}>
              {userProfile.username}
            </Text>
          </Flex>

          {/* Caption */}
          <Box mt={2} maxH="150px" overflow="auto">
            <Text fontWeight="bold">{blog.title}</Text>
            <Text>{blog.overview}</Text> 
          </Box>

          {/* Divider */}
          <Divider my={4} bg="gray.500" />

          {/* Blog footer */}
          <Flex alignItems="center" gap={4}>
            {/* Blog Date */}
            <Text ml={4} fontSize={12} color="gray.500">
              {formatDate(blog.Timestamp)}
            </Text>

            {authUser?.uid === userProfile.uid && (
              <Button
                size={'sm'}
                bg={'transparent'}
                _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }}
                borderRadius={4}
                p={1}
                onClick={() => handleDelete(blog.id)}
                isLoading={isDeleting}
              >
                <MdDelete size={20} cursor="pointer" />
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ActivityBlog;
