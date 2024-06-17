import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/course_context';

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <Box py="40px">
      <Container maxW="container.xl">
        <VStack spacing="1" align="start">
          <Heading as="h2" size="1rem">A Wealth of Financial Knowledge</Heading>
          <Text fontSize="1.8rem">Explore a wide range of online courses and interactive games designed to boost your financial literacy and money management skills</Text>
        </VStack>

        <Box mt="8">
          <Tabs courses={courses} />
        </Box>
      </Container>
    </Box>
  );
}

export default CourseList;
