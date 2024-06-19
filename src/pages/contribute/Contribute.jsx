import React, { useState, useEffect } from 'react';
import { Box, Flex, Button, Icon, Text, useColorModeValue,useBreakpointValue } from "@chakra-ui/react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';
import BlogSection from '../../components/Contribute/BlogSection';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';
import contribute_header from '../../../src/images/contribute_banner.webp';
import Spinner from '../../components/Contribute/Spinner';
import { WarningIcon } from '@chakra-ui/icons';
import bannerImg from '../../assets/images/hero_img10.png';

const categories = [
  "All",
  "Debt Management",
  "Investment",
  "Financial Independence",
  "Real Estate",
  "Side Hustles",
  "Budgeting",
  "Retirement",
  "Personal Finance",
  "Credit",
  "Smart Spending",
  "Financial Education",
  "Wealth Building",
  "Entrepreneurship"
];

const Contribute = () => {
  const textAlign = useBreakpointValue({ base: "left", lg: "center" });
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const primaryHue = useColorModeValue('blue.500', 'blue.200');
  const white = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    const unsub = onSnapshot(
      collection(firestore, "blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <Flex width="100%">
      <ContributeSidebar />
      <Flex direction="column" width="100%">
      <Box
          bgImage={contribute_header}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          height="350px"
          width="100%"
          position="relative"
          top={10}
        >
        </Box>
      <Box
        flex="1"
        ml={0} // Adjust margin-left as per the sidebar width
        transition="margin-left 0.2s"
      >
        <Box width="100%" px={{ base: 4, md: 6, lg: 8, xl: 10 }} mt={20}>
          <Flex wrap="wrap" mb="10px"  mt="20px">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                mr="6px"
                mb="10px"
                border="1px solid rgba(0, 0, 0, 0.7)"
                p="10px 13px"
                fontWeight="500"
                fontSize="15px"
                bg={selectedCategory === category ? primaryHue : 'transparent'}
                color={selectedCategory === category ? white : 'inherit'}
                _hover={{
                  backgroundColor: primaryHue,
                  color: white,
                }}
              >
                {category}
              </Button>
            ))}
          </Flex>
          {filteredBlogs.length > 0 ? (
            <BlogSection blogs={filteredBlogs} />
          ) : (
            <Flex align="center" justify="center" direction="column" mt="20px">
              <Icon as={WarningIcon} w={10} h={10} color="red.500" />
              <Text fontSize="xl" color="gray.500" mt="10px" mb="50px">
                No blogs available
              </Text>
            </Flex>
          )}
        </Box>
      </Box>
    </Flex>
    </Flex>
  );
}

export default Contribute;
