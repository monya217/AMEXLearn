import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase';
import { Box, Text, Heading, Image } from '@chakra-ui/react';

const Blogpage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        id && getBlogDetail();
    }, [id]);

    const getBlogDetail = async () => {
        const docRef = doc(firestore, 'blogs', id);
        const blogDetail = await getDoc(docRef);
        setBlog(blogDetail.data());
    };

    return (
        <Box className="single" paddingTop = "50px">
            <Box
                className="blog-title-box"
                bgImage={`url('${blog?.imgUrl}')`}
                bgSize="cover"
                bgPosition="center"
                pos="relative"
                mb="4"
                height = "250px"
            >
                <Box className="overlay" pos="absolute" top="0" left="0" w="100%" h="100%" bg="rgba(0,0,0,0.5)" />
                <Box className="blog-title" p="4" color="white">
                    <Heading as="h2">{blog?.title}</Heading>
                </Box>
            </Box>
            <Box className="container-fluid pb-4 pt-4 padding blog-single-content">
                <Box className="container padding">
                    <Box className="row mx-0">
                        <Box className="col-md-8">
                            <Box className="meta-info text-start">
                                <Text>
                                    By <Text as="span" className="author">{blog?.author}</Text> -{' '}
                                    {blog?.Timestamp?.toDate().toDateString()}
                                </Text>
                            </Box>
                            <Text className="text-start">{blog?.description}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Blogpage;
