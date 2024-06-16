// LowerSection.js
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import LowerSectionContent from "../Content/LowerSectionContent";
import { randomArrayShuffle } from "../../utils/utils";
import { Box } from "@chakra-ui/react";

const LowerSection = () => {
  const [newPodcasts, setNewPodcasts] = React.useState([]);
  const [mostPopular, setMostPopular] = React.useState([]);
  const [beginnerFriendly, setBeginnerFriendly] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "podcasts"));
      const podcasts = querySnapshot.docs.map((doc) => doc.data());
      const shuffledPodcasts = randomArrayShuffle(podcasts);
      const chunkSize = 4;

      setNewPodcasts(shuffledPodcasts.slice(0, chunkSize));
      setMostPopular(shuffledPodcasts.slice(chunkSize, chunkSize * 2));
      setBeginnerFriendly(shuffledPodcasts.slice(chunkSize * 2, chunkSize * 3));
    };

    fetchData();
  }, []);

  return (
    <Box
      mt="6"
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
