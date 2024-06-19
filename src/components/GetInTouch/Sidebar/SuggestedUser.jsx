import React from 'react';
import { Avatar, Box, Button, Flex, VStack, Text } from "@chakra-ui/react";
import useFollowUser from "../../../hooks/useFollowUser";
import useAuthStore from "../../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {
    const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
    const authUser = useAuthStore((state) => state.user);

    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing
                ? user.followers.filter((follower) => follower.uid !== authUser.uid)
                : [...user.followers, authUser],
        });
    };

    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            py={1}
            px={2}
            bg="gray.100"
            borderRadius="md"
            mb={1}
            _hover={{ bg: "gray.200" }}
        >
            <Flex alignItems="center" flex="1">
                <Link to={`/${user.username}`}>
                    <Avatar src={user.profilePicURL} size="xs" />
                </Link>
                <VStack ml={2} alignItems="flex-start" spacing={0.5}>
                    <Link to={`/${user.username}`}>
                        <Text fontSize="xs" fontWeight="bold" color="black">
                            {user.fullName}
                        </Text>
                    </Link>
                    <Text fontSize="xs" color="gray.500">
                        {user.followers.length} followers
                    </Text>
                </VStack>
            </Flex>
            {authUser.uid !== user.uid && (
                <Button
                    fontSize="xs"
                    size="xs"
                    bg={isFollowing ? "blue.400" : "transparent"}
                    color={isFollowing ? "white" : "blue.400"}
                    fontWeight="medium"
                    onClick={onFollowUser}
                    isLoading={isUpdating}
                    _hover={!isFollowing && { bg: "blue.50" }}
                >
                    {isFollowing ? "Unfollow" : "Follow"}
                </Button>
            )}
        </Flex>
    );
};

export default SuggestedUser;
