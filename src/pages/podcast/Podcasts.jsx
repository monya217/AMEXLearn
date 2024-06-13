import './Podcasts.css';
import React from 'react';
import styled from 'styled-components';
import UpperSection from "../../components/Content/UpperSection";
import LowerSection from "../../components/Content/LowerSection";
import FooterPodcast from "../../components/FooterPodcast";

const Podcasts = () => {
  return (
    <div className="flex flex-col content-wrapper">
      <div className="grid gap-6 pt-6 px-8 content-container">
        <UpperSection title={"İyi akşamlar"} />
        <LowerSection />
      </div>
      <FooterPodcast />
    </div>
  );
};

const PodcastsWrapper = styled.div`
  .container {
    padding: 20px;
  }
`;

export default Podcasts;
