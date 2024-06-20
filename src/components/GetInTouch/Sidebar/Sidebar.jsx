import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Flex, Link } from "@chakra-ui/react";
import { FaPen, FaRegListAlt, FaBell, FaUser } from 'react-icons/fa';
import Feed from './Feed';
import SearchUser from './SearchUser';
import CreatePost from './CreatePost';
import useUserProfileStore from '../../../store/userProfileStore';
import useAuthStore from '../../../store/authStore';

const Sidebar = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore((state) => state.user);
    const [selectedComponent, setSelectedComponent] = useState(<Feed />);
    const [isExpanded, setIsExpanded] = useState(false);
    const sidebarWidth = isExpanded ? '250px' : '75px';
    const [selectedIndex, setSelectedIndex] = useState(0);
    const createPostRef = useRef(null);
    const searchUserRef = useRef(null);
    const navigate = useNavigate();

    const sidebarItems = [
        {
            icon: FaRegListAlt,
            text: "Feed",
            action: () => {
                navigate('/get-in-touch');
                setSelectedIndex(0);
                setSelectedComponent(<Feed />);
            },
        },
        {
            icon: FaPen,
            text: "Create Post",
            action: () => createPostRef.current.openModal(),
        },
        {
            icon: FaBell ,
            text: "Notifications",
        },
    ];

    const handleItemClick = (index) => {
        setSelectedIndex(index);
        if (sidebarItems[index].action) {
            sidebarItems[index].action();
        } else {
            setSelectedComponent(sidebarItems[index].component);
        }
    };

    const handleModalClose = () => {
        setSelectedIndex(0);
        setSelectedComponent(<Feed />);
    };

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    return (
        <Flex direction="row">
            {/* Sidebar */}
            <Box
                height="100vh"
                borderRight="1px solid"
                borderColor="gray.200"
                py={10}
                position="sticky"
                top={10} /* Adjust top to match contributeSidebar */
                left={0}
                px={4}
                bg="white"
                width={sidebarWidth}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                transition="width 0.2s"
                pt={20} /* Adjust pt to match contributeSidebar */
            >
                <Flex direction="column" gap={10} cursor="pointer">
                    {sidebarItems.map((item, index) => (
                        <Link
                            key={index}
                            display="flex"
                            onClick={() => handleItemClick(index)}
                            alignItems="center"
                            gap={4}
                            _hover={{ bg: "gray.100" }}
                            borderRadius={6}
                            p={2}
                            w="full"
                            position="relative"
                            role="group"
                            bg={selectedIndex === index ? "blue.100" : "transparent"}
                        >
                            <Box boxSize="25px" color={selectedIndex === index ? "blue.500" : "black"}>
                                {item.icon && <item.icon size={22} />}
                            </Box>
                            <Box
                                display={isExpanded ? "block" : "none"}
                                ml={2}
                                whiteSpace="nowrap"
                                color={selectedIndex === index ? "blue.500" : "black"}
                            >
                                {item.text}
                            </Box>
                        </Link>
                    ))}
                </Flex>
            </Box>

            {/* Render selected component */}
            <Flex direction="column" flex={1} ml={10} mt={20} p={4}>
                {selectedComponent}
            </Flex>

            {/* CreatePost Component */}
            <CreatePost ref={createPostRef} onClose={handleModalClose} />

            {/* SearchConsultants Component */}
            <SearchUser ref={searchUserRef} onClose={handleModalClose} />
        </Flex>
    );
};

export default Sidebar;
