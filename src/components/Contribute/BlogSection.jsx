import React from 'react';
import { Box, Text, Heading, Button, Image, IconButton, Flex } from "@chakra-ui/react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const BlogSection = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <Text>No blogs available</Text>;
  }

  const handleEdit = (id) => {
    console.log(`Edit blog with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete blog with id: ${id}`);
  };

  return (
    <Box p={5} display="flex" flexWrap="wrap" justifyContent="center" paddingTop="250px">
      {blogs.map((blog) => (
        <Box
          key={blog.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mb={4}
          p={5}
          boxShadow="md"
          width="300px"
          margin="10px"
        >
          <Image
            src={blog.imgUrl}
            alt={blog.title}
            objectFit="cover"
            height="200px"
            width="100%"
            mb={4}
          />
          <Box mb={2}>
            <Text as="span" bg="blue.500" color="white" px={2} py={1} borderRadius="md">
              {blog.category}
            </Text>
          </Box>
          <Heading as="h3" size="md" mb={2}>
            {blog.title}
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={2}>
            {blog.author} - {new Date(blog.Timestamp.seconds * 1000).toLocaleDateString()}
          </Text>
          <Text noOfLines={3} mb={4}>
            {blog.overview}
          </Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Link to={`/blog/${blog.id}`}>
            <Button variant="outline" colorScheme="teal">
                Read More
              </Button>
            </Link>
            <Box>
              <IconButton
                aria-label="Edit"
                icon={<FaEdit />}
                mr={2}
                onClick={() => handleEdit(blog.id)}
              />
              <IconButton
                aria-label="Delete"
                icon={<FaTrash />}
                onClick={() => handleDelete(blog.id)}
              />
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default BlogSection;
