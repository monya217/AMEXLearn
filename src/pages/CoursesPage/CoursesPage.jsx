
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Container } from '@chakra-ui/react';
import Course from '../../components/Course';
import { useCoursesContext } from '../../context/course_context';

const CoursesPage = () => {
  const { category } = useParams();
  const { courses } = useCoursesContext();

  return (
    <Box>
      <Container maxW="1200px" mt="32px">
        <Grid 
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} 
          gap="26px"
        >
          {courses
            .filter(course => course.category === category)
            .map(course => (
              <Course key={course.id} {...course} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesPage;
