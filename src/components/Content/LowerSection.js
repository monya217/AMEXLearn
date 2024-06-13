import React from "react";
import songData from "../../assets/data/songs.json";
import LowerSectionContent from "../Content/LowerSectionContent";
import { randomArrayShuffle } from "../../utils/utils";

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
    <div className="min-h-[300px] w-full p-4 flex flex-col items-center gap-y-4">
      <LowerSectionContent title="New Podcasts" songs={newPodcasts} />
      <LowerSectionContent title="Most Popular" songs={mostPopular} />
      <LowerSectionContent title="Beginner Friendly" songs={beginnerFriendly} />
    </div>
  );
};

export default LowerSection;

