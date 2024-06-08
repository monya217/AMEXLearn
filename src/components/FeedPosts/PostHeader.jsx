import React from 'react';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export const PostHeader = ({ username, avatar }) => {
  return (
    <Flex flexDirection="column" w={"full"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={avatar} alt='user profile pic' size={"sm"} />
          <Flex flexDirection="column">
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
              {username}
              <Box color={"gray.500"}>.1w</Box>
            </Flex>
          </Flex>
        </Flex>

        <Box cursor={"pointer"}>
          <Text
            fontSize={12}
            color={"blue.500"}
            fontWeight={"bold"}
            _hover={{ color: "red" }}
            transition={"0.2s ease-in-out"}
          >
            Unfollow
          </Text>
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
