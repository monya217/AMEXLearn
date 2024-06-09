import React from 'react';
import styled from 'styled-components';

const GameCardWrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;

  .game-details {
    padding: 20px;
    display: flex;
    flex-direction: column;

    .game-image {
      width: 100%;
      height: auto;
    }

    .game-name {
      font-size: 18px;
      font-weight: 900;
      margin: 10px 0;
    }

    .play-button {
      margin-top: auto;
      align-self: flex-start;
      padding: 8px 16px;
      background-color: black;
      color: white;
      border: none;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #333;
      }
    }
  }
`;

const GameCard = ({ gameName, imageUrl, playUrl }) => {
  return (
    <GameCardWrapper>
      <div className="game-details">
        <img src={imageUrl} alt={gameName} className="game-image" />
        <h3 className="game-name">{gameName}</h3>
        <button className="play-button" onClick={() => window.open(playUrl, '_blank')}>
          Play
        </button>
      </div>
    </GameCardWrapper>
  );
};

export default GameCard;



