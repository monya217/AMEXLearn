import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Heading,
  HStack,
  Divider,
  SimpleGrid,
  Image,
  Center,
} from '@chakra-ui/react';
import { FeedPosts } from '../../components/FeedPosts/FeedPosts';
import { StarIcon } from '@chakra-ui/icons';
import { FeedPost } from '../../components/FeedPosts/FeedPost';

import { PageLayout } from '../../GetInTouchLayouts/PageLayout/PageLayout';
import Sidebar from '../../components/GetInTouch/Sidebar/Sidebar';

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState('posts');

  const achievements = [
    { title: 'Advanced Financial Plannings', rating: 5, image: '/Certificate1.jpg' },
    { title: 'Basics of Stock Marketing', rating: 4, image: '/Certificate2.png' },
    { title: 'Advanced SIPs', rating: 5, image: '/Certificate3.jpg' },
    // Add more achievements as needed
  ];

  return (
    <Flex>
      <Sidebar />
      <Box flex={1} p={5} mt={0}>
        {/* Profile Header Section */}
        <Flex alignItems="center" mb={8}>
          <Avatar mt={89} size="2xl" name="John Doe" src="/consultant1.png" mr={5} />
          <VStack align="start">
            <Heading mt={89} as="h2" size="lg">John Doe</Heading>
            <Text fontSize="md">Organization: Tech Innovators Inc.</Text>
            <Text fontSize="md">Profession: Software Engineer</Text>
            <Button mt={4} colorScheme="blue">Edit Profile</Button>
          </VStack>
        </Flex>

        {/* Tab Navigation */}
        <HStack spacing={4} mb={8}>
          <Button
            colorScheme={selectedTab === 'posts' ? 'blue' : 'gray'}
            onClick={() => setSelectedTab('posts')}
          >
            Your Posts
          </Button>
          <Button
            colorScheme={selectedTab === 'achievements' ? 'blue' : 'gray'}
            onClick={() => setSelectedTab('achievements')}
          >
            Your Achievements
          </Button>
        </HStack>

        {/* Tab Content */}
        {selectedTab === 'posts' ? (
          <Box>
            <Heading as="h3" size="md" mb={4}>Your Posts</Heading>
            <Center>
              <FeedPost img='/post1.jpg' username='John Doe' avatar='/img.png' />
            </Center>
          </Box>
        ) : (
          <Box>
            <Heading as="h3" size="md" mb={4}>Your Achievements</Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {achievements.map((achievement, index) => (
                <Box
                  key={index}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="md"
                  p={4}
                  boxShadow="md"
                >
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    borderRadius="md"
                    mb={4}
                    objectFit="cover"
                  />
                  <Text fontSize="lg" fontWeight="bold">{achievement.title}</Text>
                  <HStack spacing={1} mt={2}>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < achievement.rating ? 'yellow.400' : 'gray.300'}
                        />
                      ))}
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ProfilePage;
