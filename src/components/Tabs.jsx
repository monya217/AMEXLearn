import React, { useState } from 'react';
import { Box, Flex, Button, Grid, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Course from './Course';
import GameCard from './GameCard';
import { PERSONAL, RISK, ESTATE, INSURANCE, INVESTMENT } from '../utils/constants';
import courses from '../utils/datacourse';

import gameImg1 from '../assets/images/gameimg_1.jpeg';
import gameImg2 from '../assets/images/gameimg_2.jpeg';
import gameImg3 from '../assets/images/gameimg_3.jpeg';
import gameImg4 from '../assets/images/gameimg_4.jpeg'; // Add a third image for the buy button

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('ALL'); // Initialize activeTab with ALL
  const primaryHue = useColorModeValue('blue.500', 'blue.200');
  const white = useColorModeValue('white', 'gray.800');

  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <Box mt="16px">
      <Flex wrap="wrap" mb="10px">
        <Button
          className={`tab-btn ${activeTab === 'ALL' ? 'active' : ''}`}
          onClick={() => tabHandler('ALL')}
          mr="6px"
          mb="10px"
          border="1px solid rgba(0, 0, 0, 0.7)"
          p="10px 13px"
          fontWeight="500"
          fontSize="15px"
          bg={activeTab === 'ALL' ? primaryHue : 'transparent'}
          color={activeTab === 'ALL' ? white : 'inherit'}
          _hover={{
            backgroundColor: primaryHue,
            color: white,
          }}
        >
          All
        </Button>
        <Button
          className={`tab-btn ${activeTab === PERSONAL ? 'active' : ''}`}
          onClick={() => tabHandler(PERSONAL)}
          mr="6px"
          mb="10px"
          border="1px solid rgba(0, 0, 0, 0.7)"
          p="10px 13px"
          fontWeight="500"
          fontSize="15px"
          bg={activeTab === PERSONAL ? primaryHue : 'transparent'}
          color={activeTab === PERSONAL ? white : 'inherit'}
          _hover={{
            backgroundColor: primaryHue,
            color: white,
          }}
        >
          Personal Finance Management
        </Button>
        <Button
          className={`tab-btn ${activeTab === RISK ? 'active' : ''}`}
          onClick={() => tabHandler(RISK)}
          mr="6px"
          mb="10px"
          border="1px solid rgba(0, 0, 0, 0.7)"
          p="10px 13px"
          fontWeight="500"
          fontSize="15px"
          bg={activeTab === RISK ? primaryHue : 'transparent'}
          color={activeTab === RISK ? white : 'inherit'}
          _hover={{
            backgroundColor: primaryHue,
            color: white,
          }}
        >
          Financial Risk Management
        </Button>
        <Button
          className={`tab-btn ${activeTab === ESTATE ? 'active' : ''}`}
          onClick={() => tabHandler(ESTATE)}
          mr="6px"
          mb="10px"
          border="1px solid rgba(0, 0, 0, 0.7)"
          p="10px 13px"
          fontWeight="500"
          fontSize="15px"
          bg={activeTab === ESTATE ? primaryHue : 'transparent'}
          color={activeTab === ESTATE ? white : 'inherit'}
          _hover={{
            backgroundColor: primaryHue,
            color: white,
          }}
        >
          Estate Planning
        </Button>
        <Button
          className={`tab-btn ${activeTab === INSURANCE ? 'active' : ''}`}
          onClick={() => tabHandler(INSURANCE)}
          mr="6px"
          mb="10px"
          border="1px solid rgba(0, 0, 0, 0.7)"
          p="10px 13px"
          fontWeight="500"
          fontSize="15px"
          bg={activeTab === INSURANCE ? primaryHue : 'transparent'}
          color={activeTab === INSURANCE ? white : 'inherit'}
          _hover={{
            backgroundColor: primaryHue,
            color: white,
          }}
        >
          Insurance Fundamentals
        </Button>
        <Button
          className={`tab-btn ${activeTab === INVESTMENT ? 'active' : ''}`}
          onClick={() => tabHandler(INVESTMENT)}
          mr="6px"
          mb="10px"
          border="1px solid rgba(0, 0, 0, 0.7)"
          p="10px 13px"
          fontWeight="500"
          fontSize="15px"
          bg={activeTab === INVESTMENT ? primaryHue : 'transparent'}
          color={activeTab === INVESTMENT ? white : 'inherit'}
          _hover={{
            backgroundColor: primaryHue,
            color: white,
          }}
        >
          Investment Basics
        </Button>
      </Flex>

      <Grid
        mt="32px"
        gap="26px"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {activeTab === 'ALL'
          ? courses.map((course) => <Course key={course.id} {...course} />)
          : courses
              .filter((course) => course.category === activeTab)
              .map((course) => <Course key={course.id} {...course} />)}
      </Grid>
    </Box>
  );
};

export default Tabs;
