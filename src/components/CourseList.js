import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useCoursesContext } from '../context/course_context';
import Tabs from './Tabs'; // Import Tabs component

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <Box py="40px">
      <Container maxW="container.xl">
        <VStack spacing="1" align="start">
          <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={5}>A Wealth of Financial Knowledge</Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }}>Explore a wide range of online courses designed to boost your financial literacy and money management skills</Text>
        </VStack>

        <Box mt="8">
          <Tabs courses={courses} />
        </Box>

      </Container>
    </Box>
  );
}

export default CourseList;
