import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { excerpt } from "../../utility";
import './BlogSection.css'

const BlogSection = ({ blogs, user }) => {
  return (
    <Box>
      <Text className="blog-heading" textStyle="h2" py="2" mb="4">
        Daily Blogs
      </Text>
      {blogs?.map((item) => (
        <Flex key={item.id} className="row" pb="4">
          <Box className="col-md-5">
            <Box className="hover-blogs-img">
              <Box className="blogs-img">
                <img src={item.imgUrl} alt={item.title} />
                <div></div>
              </Box>
            </Box>
          </Box>
          <Box className="col-md-7">
            <Box>
              <Text className="category catg-color" fontSize="md">
                {item.category}
              </Text>
              <Text className="title py-2" fontSize="2xl">
                {item.title}
              </Text>
              <Flex className="meta-info">
                <Text className="author" fontSize="sm">
                  {item.author}
                  {item.Timestamp.toDate().toDateString()}
                </Text>
                <Text>-</Text>
                {/* Add date here */}
              </Flex>
            </Box>
            <Box className="short-description">
              <Text>{excerpt(item.description, 120)}</Text>
            </Box>
            <Button className="btn-read" colorScheme="teal">
              <Link to={`/${item.id}`}>Read More</Link>
            </Button>
            <Flex justify="flex-end">
              <Box mr="15px">
                <FaTrash style={{ cursor: "pointer" }} />
              </Box>
              <Box>
                <FaEdit style={{ cursor: "pointer" }}  />
              </Box>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default BlogSection;
