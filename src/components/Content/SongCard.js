// SongCard.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../redux/player/playerSlice";
import {
  Box,
  Image,
  Grid,
  Button,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "../../assets/icons/Icon";

const SongCard = ({ songs }) => {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  const imageStyle = (item) => {
    switch (item.type) {
      case "album":
        return "xl";
      case "artist":
        return "full";
      case "playlist":
        return "lg";
      default:
        return "base";
    }
  };

  const updateCurrent = (item) => {
    if (current && current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6} overflowY="hidden" w="full" h="full">
      {songs.map((song) => (
        <Box
          key={song.id}
          bg="bgFooter"
          flex="1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rounded="lg"
          p={4}
          w="full"
          cursor="pointer"
          _hover={{ bg: "bgSettingsHover" }}
          transition="background-color 0.3s"
          position="relative"
          className="group"
        >
          <Flex alignItems="center" justifyContent="center" mb={4}>
            <Box
              bg="bgShadow"
              w="songRem"
              h="songRem"
              objectFit="cover"
              shadow="2xl"
              position="relative"
              rounded={imageStyle(song)}
            >
              <Image
                w="full"
                h="full"
                objectFit="cover"
                src={song.image}
                alt={`${song.title} şarkısı`}
                rounded={imageStyle(song)}
              />
              <Button
                onClick={() => updateCurrent(song)}
                display={current && current.id === song.id ? "flex" : "none"}
                _groupHover={{ display: "flex" }}
                bg="brandColor"
                rounded="full"
                p={2}
                transition="all 0.3s"
                position="absolute"
                bottom={1}
                right={1}
              >
                <Icon
                  name={current && current.id === song.id && playing ? "pause" : "playerGreen"}
                />
              </Button>
            </Box>
          </Flex>
          <Box textAlign="center">
            <Heading as="h3" size="sm" fontWeight="bold" isTruncated>
              {song.title}
            </Heading>
            <Text color="bgHorizontalCard" mt={1} fontSize="sm" noOfLines={2}>
              {song.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default SongCard;
