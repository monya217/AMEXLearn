/* old
import React, { useState } from 'react';
import styled from 'styled-components';
import Course from './Course';
import { PERSONAL, RISK, ESTATE, INSURANCE, INVESTMENT, PLAY } from '../utils/constants';
import courses from '../utils/datacourse';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PERSONAL);
  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === PERSONAL ? 'active' : ''}`}
              onClick={() => tabHandler(PERSONAL)}
            >
              Personal Finance Management
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === RISK ? 'active' : ''}`}
              onClick={() => tabHandler(RISK)}
            >
              Financial Risk Management
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === ESTATE ? 'active' : ''}`}
              onClick={() => tabHandler(ESTATE)}
            >
              Estate Planning
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === INSURANCE ? 'active' : ''}`}
              onClick={() => tabHandler(INSURANCE)}
            >
              Insurance Fundamentals
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === INVESTMENT ? 'active' : ''}`}
              onClick={() => tabHandler(INVESTMENT)}
            >
              Investment Basics
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === PLAY ? 'active' : ''}`}
              onClick={() => tabHandler(PLAY)}
            >
              Play & Learn
            </button>
          </li>
        </ul>

        <div className='tabs-body'>
          {courses.filter(course => course.category === activeTab).map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;
    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-head-item button.active {
      background-color: var(--clr-black);
      color: var(--clr-white);
    }

    .tabs-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs; */

import React, { useState } from 'react';
import styled from 'styled-components';
import Course from './Course';
import GameCard from './GameCard'; 
import { PERSONAL, RISK, ESTATE, INSURANCE, INVESTMENT, PLAY } from '../utils/constants';
import courses from '../utils/datacourse';
import { Link } from 'react-router-dom';

import gameImg2 from '../assets/images/gameimg_1.jpeg';
import gameImg1 from '../assets/images/gameimg_2.jpeg';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PERSONAL);
  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === PERSONAL ? 'active' : ''}`}
              onClick={() => tabHandler(PERSONAL)}
            >
              Personal Finance Management
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === RISK ? 'active' : ''}`}
              onClick={() => tabHandler(RISK)}
            >
              Financial Risk Management
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === ESTATE ? 'active' : ''}`}
              onClick={() => tabHandler(ESTATE)}
            >
              Estate Planning
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === INSURANCE ? 'active' : ''}`}
              onClick={() => tabHandler(INSURANCE)}
            >
              Insurance Fundamentals
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === INVESTMENT ? 'active' : ''}`}
              onClick={() => tabHandler(INVESTMENT)}
            >
              Investment Basics
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type="button"
              className={`tab-btn ${activeTab === PLAY ? 'active' : ''}`}
              onClick={() => tabHandler(PLAY)}
            >
              Play & Learn
            </button>
          </li>
        </ul>

        <div className='tabs-body'>
          {activeTab === PLAY && (
            <>
              <GameCard gameName="Financia" playUrl="http://financia-ddavz562h-advikas-projects-b71feecf.vercel.app/" imageUrl={gameImg1}/>
              <GameCard gameName="FinQuiz" playUrl="URL_TO_GAME_2" imageUrl={gameImg2}/>
              {/* Add more GameCard components for each game */}
            </>
          )}

          {activeTab !== PLAY && courses.filter(course => course.category === activeTab).map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>

        <Link to="/learn/leaderboard">
          <button className="leaderboard-button">Go to Leaderboard</button>
        </Link>
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;

    .tabs-head-item button,
    .leaderboard-button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-head-item button.active {
      background-color: var(--clr-black);
      color: var(--clr-white);
    }

    .tabs-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  
  .leaderboard-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    background-color: #0f0202;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .leaderboard-button:hover {
    background-color: #444;
  }
`;

export default Tabs;

