import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Hero from "../../components/Hero";
import CoursesList from "../../components/CourseList";
import LearnSidebar from "../../components/LearnSidebar";
import CoinsWidget from '../../components/Dashboard/CoinsWidget';

const Learn = () => {
  return (
    <Flex width="100%">
      <LearnSidebar />
      <Flex direction="column" width="100%">
        <Box width="100%">
          <Hero />
        </Box>
        <Flex width="100%">
          <Box fontFamily="body" color="black" fontSize="1.6rem" lineHeight="1.6" flex="1" width="100%">
            <Box p={{ base: '1.8rem', md: '3.4rem', xl: '1rem' }} width="100%">
              <Box display="flex" width="100%">
                <Box flex="1" width="100%">
                  <CoursesList />
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <CoinsWidget />
    </Flex>
  );
};

export default Learn;
