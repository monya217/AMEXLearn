import React from "react";
import songsData from "../../assets/data/songs.json";
import HorizontalCard from "../Content/HorizontalCard";
import { randomArrayShuffle } from "../../utils/utils";
import Title from "../Title";
import { Box } from "@chakra-ui/react";

const UpperSection = ({ title }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const shuffledItems = randomArrayShuffle(songsData, true);
    console.log("Shuffled items in UpperSection:", shuffledItems);
    setItems(shuffledItems);
  }, []);

  return (
    <Box w="full" p={0}>
      <Title title={title} size="xl" />
      <HorizontalCard items={items} />
    </Box>
  );
};

export default UpperSection;
