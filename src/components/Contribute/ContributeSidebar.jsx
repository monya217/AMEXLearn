import React, { useState, useRef } from 'react';
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaPlus, FaFileAlt, FaSearch } from "react-icons/fa";
import SearchUser from './ContributeSearchUser.jsx';

const ContributeSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const sidebarWidth = isExpanded ? '250px' : '75px';
    const location = useLocation();
    const searchUserRef = useRef(null);

    const sidebarItems = [
        {
            icon: FaFileAlt,
            text: "Blogs",
            link: "/contribute",
            additionalPaths: ["/blog/"], // Array of paths that should also highlight this item
        },
        {
            icon: FaPlus,
            text: "Create Post",
            link: "/contribute/post",
        },
        {
            icon: FaSearch,
            text: "Search Profile",
            action: () => searchUserRef.current.openModal(),
            additionalPaths: ["/contribute/"], // Array of paths that should also highlight this item
        },
    ];

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    const handleModalClose = () => {
        // Close modal handler
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
                    const isSelected = item.link === location.pathname || 
                        (item.additionalPaths && item.additionalPaths.some(path => location.pathname.startsWith(path) && path !== "/contribute/")) ||
                        (item.additionalPaths && item.additionalPaths.some(path => path === "/contribute/" && location.pathname.startsWith(path) && location.pathname !== "/contribute" && location.pathname !== "/contribute/post"));

                    return item.link ? (
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
                    ) : (
                        <Box
                            key={index}
                            display={'flex'}
                            alignItems={'center'}
                            gap={4}
                            _hover={{ bg: 'gray.100' }}
                            borderRadius={6}
                            p={2}
                            w={'full'}
                            bg={isSelected ? "blue.100" : "transparent"}
                            onClick={item.action}
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
                        </Box>
                    );
                })}
                <SearchUser ref={searchUserRef} onClose={handleModalClose} />
            </Flex>
        </Box>
    );
};

export default ContributeSidebar;
