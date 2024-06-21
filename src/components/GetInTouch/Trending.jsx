import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { FaEllipsisH } from 'react-icons/fa';
import { FaRegFrown, FaExclamationTriangle } from 'react-icons/fa';

const trendingTopics = [
  { category: 'Finance · Trending', title: 'Investment Tips', posts: '15.3K posts' },
  { category: 'Finance · Trending', title: '#Budget2024', posts: '8,923 posts' },
  { category: 'Economy · Trending', title: 'Stock Market Insights', posts: '12.4K posts' },
  { category: 'Personal Finance · Trending', title: '#SavingHacks', posts: '6,714 posts' },
  { category: 'Cryptocurrency · Trending', title: 'Bitcoin Breaks $40K', posts: '22.1K posts' },
];

const handleReport = (title) => {
  console.log(`Reporting trend: ${title}`);
};

const handleMarkAsSpam = (title) => {
  console.log(`Marking as spam: ${title}`);
};

const TrendingCard = ({ category, title, posts }) => (
  <Box
    p={4}
    borderBottom="1px solid"
    borderColor="gray.200"
    borderRadius={"6"}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    _hover={{ bg: 'gray.100' }}
    _last={{ borderBottom: 'none' }}
  >
    <VStack align="start" spacing={1}>
      <Text fontSize="xs" color="gray.500">
        {category}
      </Text>
      <Text fontWeight="bold" fontSize="sm">
        {title}
      </Text>
      <Text fontSize="xs" color="gray.500">
        {posts}
      </Text>
    </VStack>
    <Menu>
      <MenuButton as={IconButton} icon={<FaEllipsisH />} variant="ghost" size="sm" />
      <MenuList>
        <MenuItem icon={<FaRegFrown color='orange' />} onClick={() => handleReport(title)}>Not interested</MenuItem>
        <MenuItem icon={<FaExclamationTriangle color='red' />} onClick={() => handleMarkAsSpam(title)}>Harmful or Spam</MenuItem>
      </MenuList>
    </Menu>
  </Box>
);

const Trending = () => (
  <Box mt={10}>
    <Text fontSize="lg" fontWeight="bold" mb={4} textAlign={"center"}>
      What's Trending
    </Text>
    <Box p={4} border="1px solid" borderColor="gray.200" borderRadius="lg" bg={"white"}>
      {trendingTopics.map((topic, index) => (
        <TrendingCard key={index} {...topic} />
      ))}
    </Box>
    <HStack justify="center" mt={4}>
      <Link href="#" fontWeight="bold" color="blue.500">
        View more
      </Link>
    </HStack>
  </Box>
);

export default Trending;
