import React from 'react';
import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaSearch, FaUser, FaImage, FaFileAlt } from "react-icons/fa"; // Import the necessary icons
const ContributeSidebar = () => {
  const sidebarItems = [
    {
      icon: <FaUser size={25} />,
      text: "Articles",
      link: "/contribute",
    },
    {
      icon: <FaSearch size={20} />,
      text: "Create Post",
      link: "/contribute/post",
    },
    {
      icon: <FaImage boxSize={6} />,
      text: "Notifications",
      link: "/contribute/notifications",
    },
    {
      icon: <FaFileAlt size={20} />,
      text: "Profile",
      link: "/profile",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"3px solid"}
      borderColor={"white"}
      py={10}
      position={"sticky"}
      top={18}
      left={0}
      px={{ base: 2, md: 4 }}
      bg={'#007bff'}
      pt={20}
    >
      <Flex direction={"column"} gap={10} w='full' height={"full"}>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement='right'
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.700" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContributeSidebar;
