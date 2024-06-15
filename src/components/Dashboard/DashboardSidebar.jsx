import React, { useState } from 'react';
import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaBook, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const DashboardSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarWidth = isExpanded ? '250px' : '60px';

  const sidebarItems = [
    {
      icon: FaBook,
      text: "Courses and Games",
      link: "/dashboard",
    },
    {
      icon: FaChalkboardTeacher,
      text: "Sessions",
      link: "/dashboard/sessions",
    },
    {
      icon: FaUsers,
      text: "Community Activity",
      link: "/dashboard/activity",
    },
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
      left={0}
      px={4}
      bg={'white'}
      width={sidebarWidth}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={'width 0.2s'}
      pt={20}
    >
      <Flex direction={'column'} gap={10} cursor={'pointer'}>
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            display={'flex'}
            to={item.link || null}
            as={RouterLink}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'gray.100' }}
            borderRadius={6}
            p={2}
            w={'full'}
            position="relative"
            role="group"
          >
            <Box boxSize="25px">
              <item.icon size={25} />
            </Box>
            <Box 
              display={isExpanded ? 'block' : 'none'}
              ml={2}
              whiteSpace="nowrap"
            >
              {item.text}
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default DashboardSidebar;
