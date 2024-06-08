import React, { useState } from 'react';
import { Box, Flex, Text, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

export const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18} mt={2}>
          {!liked ? <AiOutlineLike size={25}/> : <AiOutlineLike size={25}  color='#007bff'/>}
        </Box>
        <Box cursor={"pointer"} fontSize={18} mt={2}>
          <FaRegComment size={24} />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      <Text fontSize='sm' color={"gray"}>
        View all 1,000 comments
      </Text>
      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <InputGroup>
          <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
          <InputRightElement>
            <Button
              fontSize={14}
              color="blue.500"
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};


