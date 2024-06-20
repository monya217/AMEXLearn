import React, { useState } from 'react';
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBook, FaGamepad, FaMicrophoneAlt, FaChalkboardTeacher } from "react-icons/fa";

const LearnSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarWidth = isExpanded ? '250px' : '75px';
  const location = useLocation();

  const sidebarItems = [
    {
      icon: FaBook,
      text: "Course",
      link: "/learn",
    },
    {
      icon: FaGamepad,
      text: "Play & Learn",
      link: "/playandlearn",
    },
    {
      icon: FaChalkboardTeacher,
      text: "Live Sessions",
      link: "/livesession",
    },
    {
      icon: FaMicrophoneAlt,
      text: "Podcast",
      link: "/podcasts",
    }
  ];

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'gray.200'}
      py={10}
      position={'sticky'}
      top={18}
      px={4}
      bg={'white'}
      width={sidebarWidth}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={'width 0.2s'}
      pt={20}
      zIndex={100}
    >
      <Flex direction={'column'} gap={10} cursor={'pointer'}>
        {sidebarItems.map((item, index) => {
          const isSelected = location.pathname.startsWith(item.link); // Change this line
          return (
            <Link
              key={index}
              display={'flex'}
              to={item.link}
              as={RouterLink}
              alignItems={'center'}
              gap={4}
              _hover={{ bg: 'gray.100' }}
              borderRadius={6}
              p={2}
              w={'full'}
              bg={isSelected ? "blue.100" : "transparent"}
              fontSize="15px" 
            >
              <Box boxSize="25px" color={isSelected ? "blue.500" : "black"}>
                <item.icon size={23} />
              </Box>
              <Box
                display={isExpanded ? 'block' : 'none'}
                ml={2}
                whiteSpace="nowrap"
                color={isSelected ? "blue.500" : "black"}
              >
                {item.text}
              </Box>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

export default LearnSidebar;


