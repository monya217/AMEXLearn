import { Box, Flex, Text, Button } from "@chakra-ui/react";

const ProfileTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Button
        variant={selectedTab === 'posts' ? 'solid' : 'outline'}
        colorScheme="blue"
        onClick={() => setSelectedTab('posts')}
      >
        <Text fontSize={12} display={{ base: "block", sm: "block" }}>
          My Posts
        </Text>
      </Button>

      <Button
        variant={selectedTab === 'achievements' ? 'solid' : 'outline'}
        colorScheme="blue"
        onClick={() => setSelectedTab('achievements')}
      >
        <Text fontSize={12} display={{ base: "block", sm: "block" }}>
          My Blogs
        </Text>
      </Button>
    </Flex>
  );
};

export default ProfileTabs;
