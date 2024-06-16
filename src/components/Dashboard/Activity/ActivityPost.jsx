import React, { useState, useEffect } from 'react';
import {
  Box,
  Divider,
  Flex,
  Text,
  Avatar,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { AiOutlineLike } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import useAuthStore from '../../../store/authStore';
import useUserProfileStore from '../../../store/userProfileStore';
import usePostComment from '../../../hooks/usePostComment';
import useLikePost from '../../../hooks/useLikePost';
import { deleteObject, ref } from 'firebase/storage';
import { firestore, storage } from '../../../firebase/firebase';
import { arrayRemove, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import usePostStore from '../../../store/postStore';
import useShowToast from '../../../hooks/useShowToast';

const ActivityPost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore((state) => state.deletePost);
  const decrementPostsCount = useUserProfileStore((state) => state.deletePost);

  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);

  const { isCommenting, handlePostComment } = usePostComment();
  const { handleLikePost, isLiked, likes } = useLikePost(post);

  const [commentText, setCommentText] = useState('');
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [comments, setComments] = useState([]);

  const handleDeletePost = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    if (isDeleting) return;

    setIsDeleting(true);

    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);

      const userRef = doc(firestore, 'users', authUser.uid);
      await deleteDoc(doc(firestore, 'posts', post.id));
      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });

      deletePost(post.id);
      decrementPostsCount(post.id);

      showToast('Success', 'Post deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting post:', error);
      showToast('Error', error.message, 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSubmitComment = async () => {
    try {
      await handlePostComment(post.id, commentText);
      setCommentText('');
      showToast('Success', 'Comment added successfully', 'success');
    } catch (error) {
      console.error('Error adding comment:', error);
      showToast('Error', error.message, 'error');
    }
  };

  useEffect(() => {
    setLikesCount(post.likes.length);
  }, [post.likes]);

  const fetchComments = async () => {
    try {
      const postDocRef = doc(firestore, 'posts', post.id);
      const postDocSnap = await getDoc(postDocRef);
      if (postDocSnap.exists()) {
        const postData = postDocSnap.data();
        if (postData.comments) {
          setComments(postData.comments);
        } else {
          setComments([]);
        }
      } else {
        setComments([]);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchComments();
    }
  }, [isOpen]);

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
            <Avatar src={userProfile.profilePicURL} size="sm" name={userProfile.username} />
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
            <Flex alignItems="center" cursor="pointer" onClick={handleLikePost}>
              <AiOutlineLike size={20} color={isLiked ? 'blue' : 'gray'} />
              <Text fontWeight="bold" ml={2}>
                {likes}
              </Text>
            </Flex>

            {/* Comments */}
            <Flex alignItems="center" cursor="pointer" onClick={onOpen}>
              <FaComment size={20} />
              <Text fontWeight="bold" ml={2}>
                {post.comments.length}
              </Text>
            </Flex>

            {/* Post Date */}
            <Text ml={4} fontSize={12} color="gray.500">
              {new Date(post.createdAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>

            {authUser?.uid === userProfile.uid && (
              <Button
                size={'sm'}
                bg={'transparent'}
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

          {/* Add Comment */}
          <InputGroup mt={4}>
            <Input
              variant="flushed"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <InputRightElement width="auto">
              <Button
                colorScheme="blue"
                variant="outline"
                size="sm"
                isLoading={isCommenting}
                onClick={handleSubmitComment}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>

      {/* Modal for displaying comments */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comments</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <Flex key={index} alignItems="center" my={2}>
                  <Avatar src={comment.profilePicURL} size="sm" name={comment.username} />
                  <Text ml={2} fontWeight="bold">
                    {comment.username}
                  </Text>
                  <Text ml={2}>{comment.comment}</Text>
                </Flex>
              ))
            ) : (
              <Text>No comments yet</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ActivityPost;
