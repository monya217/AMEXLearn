import React from "react";
import songsData from "../../assets/data/songs.json";
import HorizontalCard from "../Content/HorizontalCard";
import { randomArrayShuffle } from "../../utils/utils";
import Title from "../Title";
import { Box } from "@chakra-ui/react";

const UpperSection = ({ title }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(randomArrayShuffle(songsData, true));
  }, []);

  React.useLayoutEffect(() => {
    // Reset body and html margins and paddings
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
  }, []);

  return (
    <Box w="full" p={0}> {/* Ensure padding is set to 0 */}
      <Title title={title} size="xl" />
      
      <HorizontalCard items={items} />
    </Box>
  );
};

export default UpperSection;
