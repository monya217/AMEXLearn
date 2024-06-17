import React, { useState, useEffect } from 'react';
import { Box, Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { collection, onSnapshot, query, where, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';
import BlogSection from '../../components/Contribute/BlogSection';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';
import contribute_header from '../../../src/assets/images/contribute_header.png';
import Spinner from '../../components/Contribute/Spinner';
import Search from '../../components/Contribute/Search';
import { isEmpty } from "lodash";
import { WarningIcon } from '@chakra-ui/icons';

const Contribute = () => {
  const textAlign = useBreakpointValue({ base: "left", lg: "center" });
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleChange = async (e) => {
    const { value } = e.target;
    setSearch(value);

    if (isEmpty(value)) {
      setSearchResults([]);
      return;
    }

    const blogRef = collection(firestore, "blogs");
    const docSnapshot = await getDocs(blogRef);

    const results = docSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const filteredResults = results.filter(doc =>
      doc.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <Flex>
      <ContributeSidebar />
      <Box flex="1">
        <Box
          className="bg-black"
          backgroundImage={contribute_header}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          paddingTop="60px"
          marginTop="40px"
          display="flex"
          justifyContent="center"
          height="450px"
        />
        <Box px="100px" width="100%" paddingTop="20px" flex="1" ml={{ base: 10, md: 14 }} p={4}>
          <Search search={search} handleChange={handleChange} />
        </Box>
        <Box width="100%" px="20px">
          {search ? (
            searchResults.length > 0 ? (
              <BlogSection blogs={searchResults} />
            ) : (
              <Flex align="center" justify="center" direction="column" mt="20px">
                <Icon as={WarningIcon} w={10} h={10} color="red.500" />
                <Text fontSize="xl" color="gray.500" mt="10px">
                  No search results found
                </Text>
              </Flex>
            )
          ) : (
            <BlogSection blogs={blogs} />
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default Contribute;
