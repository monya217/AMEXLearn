import React, { useState } from "react";
import SongCard from "./SongCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useAudioPlayer } from "./audioPlayerService";

const LowerSectionContent = ({ songs }) => {
  console.log(`Rendering LowerSectionContent`, songs);

  const { togglePlayPause, current, playing } = useAudioPlayer();
  const [currentSongId, setCurrentSongId] = useState(null);

  const handleTogglePlayPause = (song) => {
    togglePlayPause(song);
    setCurrentSongId(song.id);
  };

  return (
    <Box w="full">
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
        spacing={4} 
        minChildWidth="300px" // Ensures wrapping at smaller sizes
      >
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
      </SimpleGrid>
    </Box>
  );
};

export default LowerSectionContent;
