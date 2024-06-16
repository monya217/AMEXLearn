import React, { useState } from 'react';
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBook, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import useUserProfileStore from '../../store/userProfileStore';
import useAuthStore from "../../store/authStore";

const DashboardSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarWidth = isExpanded ? '250px' : '75px';
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const location = useLocation();

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
      link: `/dashboard/activity/${authUser?.username}`, // Dynamically inserting username
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
        {sidebarItems.map((item, index) => {
          const isSelected = location.pathname === item.link || (item.link.includes('/activity/') && location.pathname.startsWith('/dashboard/activity/'));
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
            >
              <Box boxSize="25px" color={isSelected ? "blue.500" : "black"}>
                <item.icon size={25} />
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

export default DashboardSidebar;
