import './Podcasts.css'
import React from 'react';
import styled from 'styled-components';

const Podcasts = () => {
  return (
    <PodcastsWrapper>
      <div className="container">
        <h1>Podcasts</h1>
        <p>Explore our latest podcasts.</p>
        {/* Add your podcast content here */}
      </div>
    </PodcastsWrapper>
  );
}

const PodcastsWrapper = styled.div`
  .container {
    padding: 20px;
  }
`;

export default Podcasts;