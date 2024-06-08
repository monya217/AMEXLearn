import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'; // Added useState import
import { FeedPost } from './FeedPost';

export const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading && [0, 1, 2, 3].map((_, idx) => (
                <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap="2">
                        <SkeletonCircle size='10' />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height='10px' w={"156px"} />
                            <Skeleton height='10px' w={"156px"} />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"156px"}>contents wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && (
                <>
                    <FeedPost img='/post1.jpg' username='advika' avatar='/img.png' />
                    <FeedPost img='/post1.jpg' username='advika' avatar='/img.png' />
                    <FeedPost img='/post1.jpg' username='advika' avatar='/img.png' />
                    <FeedPost img='/post1.jpg' username='advika' avatar='/img.png' />
                    <FeedPost img='/post1.jpg' username='advika' avatar='/img.png' />
                </>
            )}
        </Container>
    );
};
