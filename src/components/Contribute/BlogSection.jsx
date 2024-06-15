import React, { useState } from 'react';
import { Box, Text, Heading, Button, Image, IconButton, Flex, useToast } from "@chakra-ui/react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, deleteDoc } from 'firebase/firestore';
import { firestore, auth } from '../../firebase/firebase';
import Spinner from '../../components/Contribute/Spinner';

const BlogSection = ({ blogs }) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  if (!blogs || blogs.length === 0) {
    return <Text>No blogs available</Text>;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(firestore, "blogs", id));
        toast({
          title: "Blog deleted.",
          description: "The blog has been deleted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        toast({
          title: "Error deleting blog.",
          description: "An error occurred while deleting the blog.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      }
    }
  };

  return (
    <Box p={5} display="flex" flexWrap="wrap" justifyContent="center" >
      {loading ? (
        <Spinner />
      ) : (
        blogs.map((blog) => (
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
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
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
            </Box>
            <Flex justifyContent="space-between" alignItems="center">
              <Link to={`/blog/${blog.id}`}>
                <Button variant="outline" colorScheme="teal">
                  Read More
                </Button>
              </Link>
              {user && user.uid === blog.userId && (
                <Box>
                  <Link to={`/contribute/post?blogId=${blog.id}`}>
                    <IconButton
                      aria-label="Edit"
                      icon={<FaEdit />}
                      mr={2}
                    />
                  </Link>
                  <IconButton
                    aria-label="Delete"
                    icon={<FaTrash />}
                    onClick={() => handleDelete(blog.id)}
                  />
                </Box>
              )}
            </Flex>
          </Box>
        ))
      )}
    </Box>
  );
};

export default BlogSection;
