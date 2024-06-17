import React, { useState } from "react";
import Slider from "react-slick";
import LowerSectionHeader from "../Content/LowerSectionHeader";
import SongCard from "../Content/SongCard";
import { Box } from "@chakra-ui/react";
import { useAudioPlayer } from "./audioPlayerService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LowerSectionContent = ({ songs, title }) => {
  console.log(`Rendering LowerSectionContent for title: ${title}`);
  console.log("Songs received:", songs);

  const { togglePlayPause, current, playing } = useAudioPlayer();
  const [currentSongId, setCurrentSongId] = useState(null);

  const handleTogglePlayPause = (song) => {
    togglePlayPause(song);
    setCurrentSongId(song.id);
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
