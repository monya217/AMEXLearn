import React, { useState, useEffect } from 'react';
import { ContributeLayout } from '../../components/Contribute/ContributeLayout'; // Importing ContributeLayout
import { Box, Container, Flex, ListIcon, Text, useBreakpointValue } from "@chakra-ui/react";
import { Firestore, collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase';
import BlogSection from '../../components/Contribute/BlogSection';
const Contribute = () => {
  const textAlign = useBreakpointValue({ base: "left", lg: "center" });
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(firestore,"blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()});
        });
        setBlogs(list);
      },(error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  },[]);

  console.log("blogs",blogs);
  
  return (
    <ContributeLayout>
      <Box pt="16"> {/* Padding on the top to avoid navbar overlap */}
        <Container maxW="container.xl" pb="4" pt="4"> {/* Added padding bottom and top */}
          <Flex direction={{ base: "column", lg: "row" }} justifyContent={{ base: "flex-start", lg: "center" }} alignItems="flex-start" mx="auto">
            <Box mr={{ base: "0", lg: "8" }} mb={{ base: "8", lg: "0" }}> {/* Added margin bottom for mobile and margin right for larger screens */}
              <Text as="h2" fontSize="2xl">Trending</Text>
            </Box>
            <Box mr={{ base: "0", lg: "8" }}> {/* Added margin right for larger screens */}
              <BlogSection blogs = {blogs}/>
            </Box>
            <Box>
              <Text as="h2" fontSize="2xl">Tags</Text>
              <Text as="h2" fontSize="2xl">Most Popular</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </ContributeLayout>
  );
}

export default Contribute;
