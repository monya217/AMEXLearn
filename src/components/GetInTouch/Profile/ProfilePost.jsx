import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { deleteObject, ref } from 'firebase/storage';
import { deleteDoc, doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { firestore, storage } from '../../../firebase/firebase';
import usePostStore from '../../../store/postStore';
import useUserProfileStore from '../../../store/userProfileStore';
import useAuthStore from '../../../store/authStore';
import useShowToast from '../../../hooks/useShowToast';
import Caption from '../Comment/Caption';
import Comment from '../Comment/Comment';
import PostFooter from '../../FeedPosts/PostFooter';

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore((state) => state.deletePost);
  const decrementPostsCount = useUserProfileStore((state) => state.decrementPostsCount);

  const handleDeletePost = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    if (isDeleting) return;

    try {
      setIsDeleting(true);

      // Delete post image from storage
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);

      // Delete post document from firestore
      await deleteDoc(doc(firestore, 'posts', post.id));

      // Update user's posts array
      const userRef = doc(firestore, 'users', authUser.uid);
      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });

      // Update local state and show success toast
      deletePost(post.id);
      decrementPostsCount();
      showToast('Success', 'Post deleted successfully', 'success');
    } catch (error) {
      showToast('Error', error.message, 'error');
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  return (
    <>
      {/* GridItem for displaying the post preview */}
      <GridItem
        cursor="pointer"
        borderRadius={4}
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.300"
        position="relative"
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        {/* Overlay to show on hover */}
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.700"
          transition="all 0.3s ease"
          zIndex={1}
          justifyContent="center"
        >
          <Flex alignItems="center" justifyContent="center" gap={50}>
            {/* Likes */}
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.likes.length}
              </Text>
            </Flex>

            {/* Comments */}
            <Flex>
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Image of the post */}
        {post.imageURL && (
          <Image src={post.imageURL} alt="profile post" w="100%" h="100%" objectFit="cover" />
        )}

        {/* You can add a placeholder or skip if no imageURL */}
      </GridItem>

      {/* Modal for full post view */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: '3xl', md: '5xl' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg="black" pb={5}>
            {/* Post details */}
            <Flex gap="4" w={{ base: '90%', sm: '70%', md: 'full' }} mx="auto" maxH="90vh" minH="50vh">
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
              <Flex flex={1} flexDir="column" px={10} display={{ base: 'none', md: 'flex' }}>
                {/* Header with profile picture and username */}
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex alignItems="center" gap={4}>
                    <Avatar src={userProfile.profilePicURL} size="sm" name={userProfile.username} />
                    <Text fontWeight="bold" fontSize={12}>
                      {userProfile.username}
                    </Text>
                  </Flex>

                  {/* Delete button (visible only to post owner) */}
                  {authUser?.uid === userProfile.uid && (
                    <Button
                      size="sm"
                      bg="transparent"
                      _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }}
                      borderRadius={4}
                      p={1}
                      onClick={handleDeletePost}
                      isLoading={isDeleting}
                    >
                      <MdDelete size={20} cursor="pointer" />
                    </Button>
                  )}
                </Flex>

                {/* Divider */}
                <Divider my={4} bg="gray.500" />

                {/* Caption and comments */}
                <VStack w="full" alignItems="start" maxH="350px" overflowY="auto">
                  {post.caption && <Caption post={post} />}
                  {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </VStack>

                {/* Divider */}
                <Divider my={4} bg="gray.8000" />

                {/* Post footer */}
                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
