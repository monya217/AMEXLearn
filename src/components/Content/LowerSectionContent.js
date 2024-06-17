import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import LowerSectionHeader from "../Content/LowerSectionHeader";
import SongCard from "../Content/SongCard";
import { useAudioPlayer } from "./audioPlayerService";

const LowerSectionContent = ({ songs, title }) => {
  const { togglePlayPause, current, playing } = useAudioPlayer();

  const handleTogglePlayPause = (song) => {
    togglePlayPause(song);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box w="full">
      <LowerSectionHeader title={title} />
      <Slider {...settings}>
        {songs.map((song) => (
          <Box key={song.id} p={2}>
            <SongCard
              song={{
                ...song,
                isPlaying: current && current.id === song.id && playing,
              }}
              togglePlayPause={handleTogglePlayPause}
              isPlayingGlobal={playing}
              currentSongId={current ? current.id : null}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LowerSectionContent;
