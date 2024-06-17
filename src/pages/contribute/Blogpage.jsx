import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase';
import { Box, Text, Heading, Avatar, Flex, Container, Grid, GridItem } from '@chakra-ui/react';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar'; // Adjust the import path as needed

const Blogpage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (id) {
            getBlogDetail();
        }
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, [id]);

    const getBlogDetail = async () => {
        const docRef = doc(firestore, 'blogs', id);
        const blogDetail = await getDoc(docRef);
        setBlog(blogDetail.data());
    };

    return (
        <Box paddingTop="50px">
            <Box position="relative" mb="4" height="400px" overflow="hidden">
                <Box
                    bgImage={`url('${blog?.imgUrl}')`}
                    bgSize="cover"
                    bgPosition="center"
                    height="100%"
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        bg="rgba(0,0,0,0.5)"
                    />
                </Box>
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    height="100%"
                    color="white"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    padding="4"
                    textAlign="center"
                >
                    <Heading as="h1" size="2xl">{blog?.title}</Heading>
                </Flex>
            </Box>
            <Container maxW="container.xl" py="6"  pl={{ base: "15", md: "10" }}> {/* Adjusted max width to container.xl */}
                <Grid templateColumns="repeat(12, 1fr)" gap={6}>
                    <GridItem colSpan={{ base: 12, md: 8 }}>
                        <Flex direction="column" align="start" pl={{ base: "15", md: "10" }}> {/* Added padding-left */}
                            <Flex align="center" mb="6">
                                <Avatar name={blog?.author} size="md" mr="4" />
                                <Box>
                                    <Text fontWeight="bold" fontSize="lg">{blog?.author}</Text>
                                    <Text color="gray.600">
                                        {blog?.Timestamp?.toDate().toDateString()}
                                    </Text>
                                </Box>
                            </Flex>
                            <Text fontSize="lg" lineHeight="tall" whiteSpace="pre-wrap"> {/* Ensuring line breaks are maintained */}
                                {blog?.description}
                            </Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, md: 4 }}>
                        <ContributeSidebar />
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default Blogpage;
