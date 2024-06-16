

import React, { useEffect } from "react";
import { useAudio } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying } from "../redux/player/playerSlice";
import { Icon } from "../assets/icons/Icon";
import { secondToTime } from "../utils/utils";
import CustomRange from "./Footer/Player/CustomRange";
import { Box, Flex, Image, Button, Text, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import './FooterPodcast.css'; // Add your custom CSS if needed

const FooterPodcast = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);
  const [heartIcon, setHeartIcon] = React.useState("heart");

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
    autoPlay: false,
  });

  const handleHeartClick = () => {
    setHeartIcon(heartIcon === "heart" ? "heartFilled" : "heart");
  };

  useEffect(() => {
    controls.play();
    setHeartIcon("heart");
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
    dispatch(setControls(controls));
  }, [state.playing]);

  const handleClick = () => {
    if (state.playing) {
      controls.pause();
    } else {
      controls.play();
    }
  };

  const handleVolumeClick = () => {
    if (state.muted) {
      controls.unmute();
    } else {
      controls.mute();
    }
  };

  const volumeIcon = React.useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return "volumeMuted";
    } else if (state.volume > 0 && state.volume < 0.33) {
      return "volumeLow";
    } else if (state.volume >= 0.33 && state.volume < 0.66) {
      return "volumeNormal";
    }
    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <Box w="full" h="24" display="flex" flexShrink="0" bg="white" position="fixed" bottom="0" left="0" zIndex="20" mt="6">
      <Flex as="footer" bg="white" h="full" flexDirection="column" borderTop="1px" borderColor="gray.200" minW="620px" w="full">
        <Flex alignItems="center" justifyContent="space-between" px="6" py="2" w="full">
          {/* Left Section */}
          <Box minW="200px" w="30%" h="16">
            {current && (
              <HStack spacing="4">
                <Image boxSize="60px" src={current?.image} alt={current?.title} borderRadius="md" />
                <Box>
                  <Text fontSize="md" fontWeight="bold" noOfLines={1}>{current.title}</Text>
                  <Text fontSize="sm" color="gray.500" noOfLines={1}>{current.artist}</Text>
                </Box>
                <HStack spacing="2">
                  <Button onClick={handleHeartClick} variant="ghost" colorScheme={heartIcon === "heart" ? "gray" : "red"}>
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
                {audio}
                <Button
                  onClick={handleClick}
                  size="sm"
                  variant="solid"
                  bg="white"
                  _hover={{ bg: "gray.100" }}
                  borderRadius="full"
                  title={state.playing ? "Pause" : "Play"}
                >
                  <Icon name={state.playing ? "pause" : "play"} size={20} />
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
                value={(state.time / state.duration) * 100}
                onChange={(value) => {
                  const newPosition = value * state.duration / 100;
                  controls.seek(newPosition);
                }}
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
                  {secondToTime(state.time)}
                </Text>
                <Box flex="1" mx="4">
                  <CustomRange
                    step={0.1}
                    min={0}
                    max={state?.duration || 1}
                    value={state?.time}
                    onChange={(value) => controls.seek(value)}
                  />
                </Box>
                <Text fontSize="xs" minW="40px" textAlign="left">
                  {secondToTime(state?.duration)}
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
                <CustomRange
                  step={0.1}
                  min={0}
                  max={1}
                  value={state.muted ? 0 : state?.volume}
                  onChange={(value) => controls.volume(value)}
                />
              </Box>
            </Flex>
            <Button size="sm" variant="ghost">
              <Icon name="fullScreen" size={20} />
            </Button>
          </Flex>
          {/* Right Section */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default FooterPodcast;
