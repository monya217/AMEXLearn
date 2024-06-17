import styled from 'styled-components';

const CardWrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  .item-img {
    width: 100%;
    height: auto;
  }
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

      &.play-btn,
      &.buy-btn,
      &.see-details-btn,
      &.enroll-btn {
        background-color: var(--primary-hue);
        color: white;
        border: 1px solid black;
        margin-right: 5px;

        &:hover {
          background-color: white;
          color: black;
        }
      }

      &.see-details-btn {
        background-color: transparent;
        border: 1px solid var(--clr-black);

        &:hover {
          background-color: var(--primary-hue);
          color: var(--clr-white);
        }
      }
    }
  }
`;

export default CardWrapper;
