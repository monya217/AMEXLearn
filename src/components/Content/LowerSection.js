import React from "react";
import songData from "../../assets/data/songs.json";
import LowerSectionContent from "../Content/LowerSectionContent";
import { randomArrayShuffle } from "../../utils/utils";
import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI

const LowerSection = () => {
  const [newPodcasts, setNewPodcasts] = React.useState([]);
  const [mostPopular, setMostPopular] = React.useState([]);
  const [beginnerFriendly, setBeginnerFriendly] = React.useState([]);

  React.useEffect(() => {
    const shuffledSongs = randomArrayShuffle(songData);
    const chunkSize = 6;

    setNewPodcasts(shuffledSongs.slice(0, chunkSize));
    setMostPopular(shuffledSongs.slice(chunkSize, chunkSize * 2));
    setBeginnerFriendly(shuffledSongs.slice(chunkSize * 2, chunkSize * 3));
  }, []);

  return (
    <Box
      mt="6" // Adjust top margin here
      minH="300px"
      w="full"
      p="4"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="4"
      
    >
      <LowerSectionContent title="New Podcasts" songs={newPodcasts} />
      <LowerSectionContent title="Most Popular" songs={mostPopular} />
      <LowerSectionContent title="Beginner Friendly" songs={beginnerFriendly} />
    </Box>
  );
};

export default LowerSection;
