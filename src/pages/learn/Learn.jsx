/*import './learn.css'
import Hero from "../../components/Hero";
import CoursesList from "../../components/CourseList";

const Learn = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
    </div>
  )
}*/



// Learn.jsx
// pages/Learn.js
import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Hero from "../../components/Hero";
import CoursesList from "../../components/CourseList";
import LearnSidebar from "../../components/LearnSidebar"; // Import the sidebar component

const Learn = () => {
  return (
    <Box fontFamily="body" color="black" fontSize="1.6rem" lineHeight="1.6">
      <Container maxW="1700px" p={{ base: '1.8rem', md: '3.4rem', xl: '1rem' }}>
        <Box display="flex">
          <LearnSidebar /> {/* Include the sidebar component */}
          <Box flex="1" ml={4}> {/* Adjust margin-left as per the sidebar width */}
            <Hero />
            <CoursesList />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Learn;




