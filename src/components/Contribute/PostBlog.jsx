import React, { useState, useEffect } from 'react';
import { Flex, Stack, Input, Textarea, Button, Radio, RadioGroup, Select, Box, Heading, Text, useToast } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { firestore, storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, updateDoc, doc, collection, serverTimestamp, getDoc } from "firebase/firestore";
import useAuthStore from '../../store/authStore';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';

const categoryOptions = [
    "Debt Management",
    "Investment",
    "Financial Independence",
    "Real Estate",
    "Side Hustles",
    "Budgeting",
    "Retirement",
    "Personal Finance",
    "Credit",
    "Smart Spending",
    "Financial Education",
    "Wealth Building",
    "Entrepreneurship"
];

const PostBlog = () => {
    const location = useLocation();
    const toast = useToast();
    const blogId = new URLSearchParams(location.search).get('blogId');
    const [form, setForm] = useState({
        title: '',
        description: '',
        category: '',
        imgUrl: '',
        overview: ''
    });
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const navigate = useNavigate();
    const authUser = useAuthStore(state => state.user);

    useEffect(() => {
        if (blogId) {
            const fetchBlog = async () => {
                const blogDoc = await getDoc(doc(firestore, "blogs", blogId));
                if (blogDoc.exists()) {
                    const blogData = blogDoc.data();
                    setForm({
                        title: blogData.title,
                        description: blogData.description,
                        category: blogData.category,
                        imgUrl: blogData.imgUrl,
                        overview: blogData.overview
                    });
                }
            };
            fetchBlog();
        }
    }, [blogId]);

    useEffect(() => {
        if (file) {
            const uploadFile = () => {
                const storageRef = ref(storage, file.name);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log("Upload is " + progress + "% done");
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
                        });
                    }
                );
            };
            uploadFile();
        }
    }, [file]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, category, description, overview, imgUrl } = form;
        if (!title || !category || !description || !overview || !imgUrl) {
            toast({
                title: 'Error',
                description: 'Please fill out all fields and upload an image.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        console.log("Form data:", form);
        try {
            if (blogId) {
                await updateDoc(doc(firestore, "blogs", blogId), {
                    ...form,
                    Timestamp: serverTimestamp(),
                    author: authUser.fullName,
                    userId: authUser.uid
                });
                toast({
                    title: 'Success',
                    description: 'Blog updated successfully.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                await addDoc(collection(firestore, "blogs"), {
                    ...form,
                    Timestamp: serverTimestamp(),
                    author: authUser.fullName,
                    userId: authUser.uid
                });
                toast({
                    title: 'Success',
                    description: 'Blog created successfully.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            }
            navigate("/contribute");
        } catch (err) {
            console.log(err);
            toast({
                title: 'Error',
                description: 'An error occurred while submitting the form.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Flex>
            <ContributeSidebar />
            <Stack spacing={4} align="center" pt="60px" w="full">
                <Heading as="h2" size="lg" textAlign="center">
                    {blogId ? 'Edit Blog' : 'Create Blog'}
                </Heading>
                <Box as="form" className="blog-form" onSubmit={handleSubmit} w="full" maxW="600px" p={4}>
                    <Input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        mb={4}
                    />
                    <Select
                        placeholder="Please select category"
                        value={form.category}
                        onChange={handleChange}
                        name="category"
                        mb={4}
                    >
                        {categoryOptions.map((option, index) => (
                            <option value={option} key={index}>
                                {option}
                            </option>
                        ))}
                    </Select>
                    <Textarea
                        placeholder="Overview"
                        value={form.overview}
                        name="overview"
                        onChange={handleChange}
                        mb={4}
                        resize="vertical"
                    />
                    <Textarea
                        placeholder="Description"
                        value={form.description}
                        name="description"
                        onChange={handleChange}
                        mb={4}
                        rows={10} 
                        resize="vertical"
                    />
                    <Text mb={2}>Insert Image</Text>
                    <Input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        mb={4}
                    />
                    <Button
                        colorScheme="blue"
                        variant="solid"
                        type="submit"
                        disabled={progress !== null && progress < 100}
                        w="full"
                    >
                        Submit
                    </Button>
                </Box>
            </Stack>
        </Flex>
    );
};

export default PostBlog;
