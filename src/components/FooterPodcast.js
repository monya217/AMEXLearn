import React, { useEffect, useState, useRef } from "react";
import { Box, Flex, Image, Button, HStack, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { Icon } from "../assets/icons/Icon";
import { useAudioPlayer } from "../components/Content/audioPlayerService";

const FooterPodcast = () => {
  const { current, playing, playSong, pauseSong, togglePlayPause } = useAudioPlayer();
  const [heartIcon, setHeartIcon] = useState("heart");
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [current, playing]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
  }, [volume, muted]);

  const handleHeartClick = () => {
    setHeartIcon(heartIcon === "heart" ? "heartFilled" : "heart");
  };

  const handleVolumeClick = () => {
    setMuted(!muted);
  };

  const handleSeek = (value) => {
    const newPosition = (value * audioRef.current.duration) / 100;
    audioRef.current.currentTime = newPosition;
  };

  const volumeIcon = React.useMemo(() => {
    if (muted || volume === 0) {
      return "volumeMuted";
    } else if (volume > 0 && volume < 0.33) {
      return "volumeLow";
    } else if (volume >= 0.33 && volume < 0.66) {
      return "volumeNormal";
    }
    return "volumeFull";
  }, [volume, muted]);

  const secondToTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Box
      w="full"
      h="24"
      display="flex"
      flexShrink="0"
      bg="white"
      position="fixed"
      bottom="0"
      left="0"
      zIndex="20"
      mt="6"
    >
      <Flex
        as="footer"
        bg="white"
        h="full"
        flexDirection="column"
        borderTop="1px"
        borderColor="gray.200"
        minW="620px"
        w="full"
      >
        <Flex alignItems="center" justifyContent="space-between" px="6" py="2" w="full">
          {/* Left Section */}
          <Box minW="200px" w="30%" h="16">
            {current && (
              <HStack spacing="4">
                <Image
                  boxSize="60px"
                  src={current?.image}
                  alt={current?.title}
                  borderRadius="md"
                />
                <Box>
                  <Text fontSize="md" fontWeight="bold" noOfLines={1}>
                    {current.title}
                  </Text>
                  <Text fontSize="sm" color="gray.500" noOfLines={1}>
                    {current.artist}
                  </Text>
                </Box>
                <HStack spacing="2">
                  <Button
                    onClick={handleHeartClick}
                    variant="ghost"
                    colorScheme={heartIcon === "heart" ? "gray" : "red"}
                  >
                    <Icon name={heartIcon} size={20} />
                  </Button>
                  <Button variant="ghost" colorScheme="gray">
                    <Icon name="pictureInPicture" size={20} />
                  </Button>
                </HStack>
              </HStack>
            )}
          </Box>
          {/* Left Section */}

          {/* Player */}
          <Box minW="772px" w="40%">
            <Flex flexDirection="column" alignItems="center" justifyContent="center">
              {/* Upper Controls */}
              <HStack mb="3" spacing="4">
                <Button size="sm" variant="ghost">
                  <Icon name="shuffle" size={20} />
                </Button>
                <Button size="sm" variant="ghost">
                  <Icon name="playerPrev" size={20} />
                </Button>
                <Button
                  onClick={() => togglePlayPause(current)}
                  size="sm"
                  variant="solid"
                  bg="white"
                  _hover={{ bg: "gray.100" }}
                  borderRadius="full"
                  title={playing ? "Pause" : "Play"}
                >
                  <Icon name={playing ? "pause" : "play"} size={20} />
                </Button>
                <Button size="sm" variant="ghost">
                  <Icon name="playerNext" size={20} />
                </Button>
                <Button size="sm" variant="ghost">
                  <Icon name="repeat" size={20} />
                </Button>
              </HStack>
              {/* Upper Controls */}
              {/* Progress Slider */}
              <Slider
                aria-label="audio progress"
                value={(audioRef.current?.currentTime / audioRef.current?.duration) * 100 || 0}
                onChange={handleSeek}
                min={0}
                max={100}
              >
                <SliderTrack bg="gray.200">
                  <SliderFilledTrack bg="blue.400" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
              </Slider>
              {/* Progress Slider */}
              {/* Lower Controls */}
              <Flex w="full" alignItems="center" justifyContent="space-between" px="4">
                <Text fontSize="xs" minW="40px" textAlign="right">
                  {secondToTime(audioRef.current?.currentTime || 0)}
                </Text>
                <Box flex="1" mx="4">
                  <Slider
                    step={0.1}
                    min={0}
                    max={audioRef.current?.duration || 1}
                    value={audioRef.current?.currentTime || 0}
                    onChange={(value) => (audioRef.current.currentTime = value)}
                  >
                    <SliderTrack bg="gray.200">
                      <SliderFilledTrack bg="blue.400" />
                    </SliderTrack>
                    <SliderThumb boxSize={4} />
                  </Slider>
                </Box>
                <Text fontSize="xs" minW="40px" textAlign="left">
                  {secondToTime(audioRef.current?.duration || 0)}
                </Text>
              </Flex>
              {/* Lower Controls */}
            </Flex>
          </Box>
          {/* Player */}

          {/* Right Section */}
          <Flex minW="200px" w="30%" justifyContent="flex-end" alignItems="center" pr="4">
            <Button size="sm" variant="ghost">
              <Icon name="lyrics" size={20} />
            </Button>
            <Button size="sm" variant="ghost">
              <Icon name="queue" size={20} />
            </Button>
            <Button size="sm" variant="ghost">
              <Icon name="device" size={20} />
            </Button>
            <Flex alignItems="center" ml="4">
              <Button onClick={handleVolumeClick} size="sm" variant="ghost">
                <Icon name={volumeIcon} size={20} />
              </Button>
              <Box w="24" ml="2">
                <Slider
                  step={0.1}
                  min={0}
                  max={1}
                  value={muted ? 0 : volume}
                  onChange={(value) => setVolume(value)}
                >
                  <SliderTrack bg="gray.200">
                    <SliderFilledTrack bg="blue.400" />
                  </SliderTrack>
                  <SliderThumb boxSize={4} />
                </Slider>
              </Box>
            </Flex>
            <Button size="sm" variant="ghost">
              <Icon name="fullScreen" size={20} />
            </Button>
          </Flex>
          {/* Right Section */}
        </Flex>
      </Flex>
      <audio ref={audioRef} />
    </Box>
  );
};

export default FooterPodcast;
