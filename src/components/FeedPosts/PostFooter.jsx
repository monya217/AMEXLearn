import React, { useRef, useState } from 'react';
import { Box, Flex, Text, InputGroup, Input, InputRightElement, Button, Avatar, useToast } from '@chakra-ui/react';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import usePostComment from '../../hooks/usePostComment';
import useLikePost from '../../hooks/useLikePost';
import useAuthStore from '../../store/authStore';
import { timeAgo } from '../../utils/timeAgo';

const PostFooter = ({ post, isProfilePage }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false); 
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const toast = useToast();

  const handleSubmitComment = async () => {
    if (comment.trim() === "") {
      toast({
        title: "Comment cannot be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    await handlePostComment(post.id, comment);
    setComment("");
  };

  const handleToggleComments = () => {
    setShowComments(!showComments); 
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <AiOutlineLike size={25}/> : <AiOutlineLike size={25} color='#007bff'/>}
        </Box>

        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
          <FaRegComment size={24} onClick={handleToggleComments} /> 
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>

      {isProfilePage && (
        <Text fontSize='12' color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}

      {post.comments.length > 0 && (
        <Text fontSize='sm' color={"gray"} cursor={"pointer"} onClick={handleToggleComments}>
          View all {post.comments.length} comments
        </Text>
      )}

      {showComments && (
        <Box mt={4}>
          {post.comments.map((comment, index) => (
            <Flex key={index} alignItems={"center"} mt={2}>
              <Avatar src={comment.avatar} size="sm" />
              <Box ml={2}>
                <Text fontSize={"sm"} fontWeight={"bold"}>{comment.username}</Text>
                <Text fontSize={"sm"}>{comment.comment}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      )}

      {authUser && (
        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "blue.700" }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
