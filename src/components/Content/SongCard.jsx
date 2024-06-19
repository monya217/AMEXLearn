import React, { useState, useEffect } from "react";
import { Box, Image, Button, Heading, Text, Flex } from "@chakra-ui/react";
import { Icon } from "../../assets/icons/Icon";

const SongCard = ({ song, togglePlayPause, isPlayingGlobal, currentSongId }) => {
  const [isPlaying, setIsPlaying] = useState(song.isPlaying);

  useEffect(() => {
    if (currentSongId !== song.id) {
      setIsPlaying(false);
    }
  }, [currentSongId, song.id]);

  const handlePlayPause = () => {
    togglePlayPause(song);
    setIsPlaying(!isPlaying);
  };

  return (
    <Box
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
          w="250px" // Set fixed width
          h="250px" // Set fixed height
          objectFit="cover"
          shadow="2xl"
          position="relative"
          rounded="lg"
        >
          <Image
            w="full"
            h="full"
            objectFit="cover"
            src={song.image}
            alt={`${song.title}`}
            rounded="lg"
          />
          <Button
            onClick={handlePlayPause}
            display={isPlaying ? "flex" : "none"}
            _groupHover={{ display: "flex" }}
            bg="brandColor"
            rounded="full"
            p={2}
            transition="all 0.3s"
            position="absolute"
            bottom={1}
            right={1}
          >
            <Icon name={isPlaying ? "pause" : "playerGreen"} />
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
  );
};

export default SongCard;
