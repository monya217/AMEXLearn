import React from 'react';
import { PostHeader } from './PostHeader';
import { Box, Image } from '@chakra-ui/react';
import { PostFooter } from './PostFooter';

export const FeedPost = ({ img, username, avatar }) => {
  return (
    <Box 
      border="1px solid" 
      borderColor="gray.200" 
      borderRadius="md" 
      overflow="hidden" 
       mb={5}
      p={4}
    >
      <PostHeader username={username} avatar={avatar} />
      <Box my={2}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter />
    </Box>
  );
};
