import React from 'react';
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { Box, Icon } from "@chakra-ui/react";

const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <Box as="span" key={idx} color="#e59819" mr="2px" fontSize="13px">
        {rating_star >= idx + 1 ? (
          <Icon as={BsStarFill} />
        ) : rating_star >= val ? (
          <Icon as={BsStarHalf} />
        ) : (
          <Icon as={BsStar} />
        )}
      </Box>
    );
  });

  return <Box display="flex" alignItems="center">{stars}</Box>;
};

export default StarRating;
