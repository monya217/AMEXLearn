import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { firestore, auth } from '../../firebase/firebase';
import { Box, Text, Heading, Avatar, Flex, IconButton, useToast ,Stack} from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';
import Spinner from '../../components/Contribute/Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import CoinsWidget from '../../components/Dashboard/CoinsWidget';


const Blogpage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const toast = useToast();
    const [user] = useAuthState(auth); // Assuming 'auth' is your Firebase authentication instance
    const navigate = useNavigate();
    const [authorUsername, setAuthorUsername] = useState("");


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
        if (blogDetail.exists()) {
            await getAuthorUsername(blogDetail.data().userId);
        }
        setLoading(false);
    };
    const getAuthorUsername = async (userId) => {
        const userDocRef = doc(firestore, 'users', userId);
        const userDetail = await getDoc(userDocRef);
        if (userDetail.exists()) {
            setAuthorUsername(userDetail.data().username);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                setLoading(true);
                await deleteDoc(doc(firestore, "blogs", id));
                toast({
                    title: "Blog deleted.",
                    description: "The blog has been deleted successfully.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                setLoading(false);
                navigate('/blogs'); 
            } catch (err) {
                console.error(err);
                toast({
                    title: "Error deleting blog.",
                    description: "An error occurred while deleting the blog.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                setLoading(false);
            }
        }
    };

    return (
        <Flex minH="100vh" width="100%">
            <ContributeSidebar />
            <Box flex="1" pl={0} pt="50px">
                {loading ? (
                    <Spinner />
                ) : (
                    <Box>
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
                        <Box mx="auto" maxW="1000px" textAlign="left" px={{ base: 4, md: 6, lg: 8, xl: 10 }}>
                            <Stack spacing="4">
                                <Flex align="center" justify="space-between">
                                    <Flex align="center">
                                        <Link to={`/${authorUsername}`}>
                                            <Avatar name={blog?.author} size="md" mr="2" />
                                        </Link>
                                        <Stack spacing="1">
                                            <Link to={`/${authorUsername}`}>
                                                <Text fontSize="md" color="gray.600">{blog?.author}</Text>
                                            </Link>
                                            <Text fontSize="sm" color="gray.600">{new Date(blog?.Timestamp?.seconds * 1000).toLocaleDateString()}</Text>
                                        </Stack>
                                    </Flex>
                                    {(user && blog && user.uid === blog.userId) && (
                                        <Flex alignItems="center">
                                            <Link to={`/blogs/create?blogId=${id}`}>
                                                <IconButton aria-label="Edit" icon={<FaEdit />} size="md" />
                                            </Link>
                                            <Box ml="2">
                                                <IconButton aria-label="Delete" icon={<FaTrash />} size="md" onClick={handleDelete} />
                                            </Box>
                                        </Flex>
                                    )}
                                </Flex>
                                <Text fontSize="lg" lineHeight="tall" whiteSpace="pre-wrap" textAlign="left" width="100%" mb = "50px">
                                    {blog?.description}
                                </Text>
                            </Stack>
                        </Box>
                    </Box>
                )}
            </Box>
            <CoinsWidget />
        </Flex>
    );
};

export default Blogpage;
