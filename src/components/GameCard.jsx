import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';

const GameCardWrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  
  .item-body {
    margin: 14px 0;
    padding: 4px 18px;

    .item-name {
      font-size: 15px;
      line-height: 1.4;
      font-weight: 900;
    }

    .item-creator {
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }

    .rating-star-val {
      margin-bottom: 1px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
    }

    .rating-count {
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }

    .item-price-new {
      font-weight: 700;
      font-size: 15px;
    }

    .item-price-old {
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
    }
  }

  .item-btns {
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;

    .item-btn {
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.play-btn {
        background-color: var(--primary-hue);
        color: white;
        border: 1px solid black;
        margin-right: 5px;

        &:hover {
          background-color: white;
          color: black;
        }
      }

      &.buy-btn {
        background-color: var(--primary-hue);
        color: white;
        border: 1px solid black;
        margin-right: 5px;

        &:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }
`;

const GameCard = ({ gameName, imageUrl, playUrl, rating, price, isBuy }) => {
  return (
    <GameCardWrapper>
      <div className="item-img">
        <img src={imageUrl} alt={gameName} className="game-image" />
      </div>
      <div className="item-body">
        <h5 className="item-name">{gameName}</h5>
        <div className="item-rating flex">
          <span className="rating-star-val">{rating}</span>
          <StarRating rating_star={rating} />
          <span className="rating-count">({rating} Ratings)</span>
        </div>
        <div className="item-price">
          <span className="item-price-new">₹{price}</span>
        </div>
      </div>
      <div className="item-btns flex">
        {isBuy ? (
          <button className="item-btn buy-btn" onClick={() => alert("Buy Game")}>
            Buy
          </button>
        ) : (
          <button className="item-btn play-btn" onClick={() => window.open(playUrl, '_blank')}>
            Play
          </button>
        )}
      </div>
    </GameCardWrapper>
  );
};

export default GameCard;



