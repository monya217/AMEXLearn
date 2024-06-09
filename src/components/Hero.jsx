import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Empower Your Financial Future</h1>
          <p>Unlock a world of financial knowledge with our curated courses. Explore topics from personal finance management to investment strategies.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 350px;
  

  .container{
    padding-top: 50px;
    .hero-content{
      background-color: var(--clr-white);
      color: black;
      font-family: 'Gafata', sans-serif;
      max-width: 550px;
      width: 100%;
      margin-left:0;
      padding: 20px;

      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 16px;
      }
    }
  }
`;

export default Hero