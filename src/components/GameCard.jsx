import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import StarRating from '../components/StarRating';

const GameCard = ({ gameName, imageUrl, playUrl, rating, price, isBuy }) => {
  return (
    <Box
      mb="20px"
      border="1px solid rgba(0, 0, 0, 0.1)"
      boxShadow="rgba(149, 157, 165, 0.1) 0px 8px 24px"
      display="flex"
      flexDirection="column"
    >
      <Box className="item-img">
        <Image src={imageUrl} alt={gameName} className="game-image" />
      </Box>
      <Box className="item-body" my="14px" p="4px 18px">
        <Text fontSize="15px" lineHeight="1.4" fontWeight="900" className="item-name">{gameName}</Text>
        <Flex align="center" className="item-rating" mt="2">
          <Text fontSize="14px" fontWeight="800" color="#b4690e" mr="6px" className="rating-star-val">{rating}</Text>
          <StarRating rating_star={rating} />
          <Text fontSize="12.5px" fontWeight="500" opacity="0.8" ml="3px" className="rating-count">({rating} Ratings)</Text>
        </Flex>
        <Box className="item-price" mt="2">
          <Text fontWeight="700" fontSize="15px" className="item-price-new">₹{price}</Text>
        </Box>
      </Box>
      <Flex className="item-btns" p="4px 8px 30px 18px" mt="auto" align="center">
        {isBuy ? (
          <Button
            className="item-btn buy-btn"
            bg="var(--primary-hue)"
            color="white"
            border="1px solid black"
            mr="5px"
            _hover={{ bg: 'white', color: 'black' }}
            onClick={() => alert("Buy Game")}
          >
            Buy
          </Button>
        ) : (
          <Button
            className="item-btn play-btn"
            bg="var(--primary-hue)"
            color="white"
            border="1px solid black"
            mr="5px"
            _hover={{ bg: 'white', color: 'black' }}
            onClick={() => window.open(playUrl, '_blank')}
          >
            Play
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default GameCard;




