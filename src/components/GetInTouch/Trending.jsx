import React from 'react';
import { Box, Text, VStack, HStack, Link } from '@chakra-ui/react';

const trendingTopics = [
  { rank: "#1 on Trending", title: "Sensex Rises by 734 points" },
  { rank: "#2 on Trending", title: "#MoneyMatters" },
  { rank: "#3 on Trending", title: "#Investing101" },
  // Add more trending topics as needed
];

const TrendingCard = ({ rank, title }) => (
  <Box
    border="1px solid"
    borderColor="gray.200"
    borderRadius="md"
    p={4}
    mb={4}
    _hover={{ boxShadow: "md" }}
  >
    <VStack align="start" spacing={1}>
      <Text fontWeight="bold" fontSize="sm">{rank}</Text>
      <Text fontSize="md">{title}</Text>
    </VStack>
  </Box>
);

const Trending = () => (
  <Box p={4}>
    <Text fontSize="lg" fontWeight="bold" mb={4}>What’s Trending</Text>
    {trendingTopics.map((topic, index) => (
      <TrendingCard key={index} {...topic} />
    ))}
    <HStack justify="center" mt={4}>
      <Link href="#" fontWeight="bold" color="blue.500">View More</Link>
    </HStack>
  </Box>
);

export default Trending;
