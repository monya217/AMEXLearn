import React from 'react';
import { Link } from "react-router-dom";
import { Box, Image, Text, VStack } from '@chakra-ui/react';

const Category = ({ image, category }) => {
  return (
    <Link to={`/category/${category}`}>
      <VStack
        bg="aliceblue"
        p="20px"
        border="1px solid transparent"
        transition="all 0.3s"
        _hover={{ borderColor: "purple.500" }}
      >
        <Box className="category-item-img">
          <Image src={image} alt={category} maxW="110px" />
        </Box>
        <Box className="category-item-name" mt="24px">
          <Text as="h6" fontSize="15px">{category}</Text>
        </Box>
      </VStack>
    </Link>
  );
}

export default Category;
