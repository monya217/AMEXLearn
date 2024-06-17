import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Flex, Button } from '@chakra-ui/react';
import StarRating from '../components/StarRating';

const Course = (props) => {
  const {
    id,
    image,
    course_name,
    creator,
    actual_price,
    discounted_price,
    rating_count,
    rating_star,
    category,
  } = props;

  return (
    <Box
      mb="20px"
      border="1px solid rgba(0, 0, 0, 0.1)"
      boxShadow="rgba(149, 157, 165, 0.1) 0px 8px 24px"
      display="flex"
      flexDirection="column"
    >
      <Box className="item-img">
        <Image src={image} alt={course_name} />
      </Box>
      <Box className="item-body" mt="14px" mb="14px" px="18px">
        <Text className="item-name" fontSize="15px" lineHeight="1.4" fontWeight="900">
          {course_name}
        </Text>
        <Text className="item-creator" fontSize="12.5px" fontWeight="500" color="rgba(0, 0, 0, 0.6)">
          {creator}
        </Text>
        <Flex className="item-rating" alignItems="center" mt="4px">
          <Text className="rating-star-val" mb="1px" fontSize="14px" fontWeight="800" color="#b4690e" mr="6px">
            {rating_star}
          </Text>
          <StarRating rating_star={rating_star} />
          <Text className="rating-count" fontSize="12.5px" ml="3px" fontWeight="500" opacity="0.8">
            ({rating_count} Ratings)
          </Text>
        </Flex>
        <Flex className="item-price" mt="4px" alignItems="center">
          <Text className="item-price-new" fontWeight="700" fontSize="15px">
            ₹{discounted_price}
          </Text>
          <Text className="item-price-old" opacity="0.8" fontWeight="500" textDecoration="line-through" fontSize="15px" ml="8px">
            ₹{actual_price}
          </Text>
        </Flex>
      </Box>
      <Flex className="item-btns" alignSelf="flex-start" px="22px" pb="10px" mt="auto">
        <Button
          as={Link}
          to={`/learn/courses/${id}`}
          className="item-btn see-details-btn"
          fontSize="16px"
          display="inline-block"
          px="16px"
          py="6px"
          fontWeight="700"
          transition="all 300ms linear"
          whiteSpace="nowrap"
          bg="transparent"
          border="1px solid black"
          mr="5px"
          _hover={{ bg: 'var(--primary-hue)', color: 'white' }}
        >
          See details
        </Button>
        <Button
          as={Link}
          to={`/learn/courses/${id}`}
          className="item-btn enroll-btn"
          fontSize="16px"
          display="inline-block"
          px="16px"
          py="6px"
          fontWeight="700"
          transition="all 300ms linear"
          whiteSpace="nowrap"
          bg="var(--primary-hue)"
          color="white"
          border="1px solid black"
          mr="5px"
          _hover={{ bg: 'white', color: 'black' }}
        >
          Enroll Now
        </Button>
      </Flex>
    </Box>
  );
};

export default Course;
