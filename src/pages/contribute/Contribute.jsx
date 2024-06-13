import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, ListIcon, Text, useBreakpointValue } from "@chakra-ui/react";
import { Firestore, collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase';
import BlogSection from '../../components/Contribute/BlogSection';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';
import contribute_header from '../../images/contribute_header.png'
import Spinner from '../../components/Contribute/Spinner';

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
        setLoading(false);
      },(error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  },[]);
  if(loading){
    return <Spinner/>
  }

  console.log("blogs",blogs);
  
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
          height="250px"
        >
          <BlogSection blogs={blogs} />
        </Box>
      </Box>
    </Flex>
  );
}

export default Contribute;
