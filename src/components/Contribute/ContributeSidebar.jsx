import React from 'react';
import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPlus, FaFileAlt } from "react-icons/fa"; // Import the necessary icons

const ContributeSidebar = () => {
  const sidebarItems = [
    {
      icon: <FaFileAlt size={20} />,
      text: "Blogs",
      link: "/contribute",
    },
    {
      icon: <FaPlus size={20} />,
      text: "Create Post",
      link: "/contribute/post",
    },

  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"gray.200"}
      py={10}
      position={"fixed"}
      top={18}
      left={0}
      px={2}
      bg={'white'}
      width={{ base: 10, md: 14 }}
      overflow="hidden"
      transition="width 0.2s"
      _hover={{ width: "200px" }}
      pt={20} 
      zIndex = {100}
    >
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        {sidebarItems.map((item, index) => (
          <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement='right'
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "gray.100" }}
              borderRadius={6}
              p={2}
              w={"full"}
              position="relative"
              role="group"
            >
              {item.icon}
              <Box
                display={{ base: "none", md: "block" }}
                position="absolute"
                left="50px"
                top="50%"
                transform="translateY(-50%)"
                opacity={0}
                transition="opacity 0.2s"
                _groupHover={{ opacity: 1 }}
                whiteSpace="nowrap"
              >
                {item.text}
              </Box>
            </Link>
          </Tooltip>
        ))}
      </Flex>
    </Box>
  );
};

export default ContributeSidebar;
