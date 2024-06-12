import React, { useState, useEffect } from 'react';
import { Flex, Stack, Input, Textarea, Button, Radio, RadioGroup, Select, Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { firestore, storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import useShowToast from '../../hooks/useShowToast';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import useAuthStore from '../../store/authStore';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';

const initialState = {
    title: "",
    trending: "no",
    category: "",
    description: "",
    overview: ""
};

const categoryOption = [
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
    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const navigate = useNavigate();
    const authUser = useAuthStore(state => state.user);
    const showToast = useShowToast();

    const { title, category, trending, description, overview } = form;

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setProgress(progress);
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
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
        file && uploadFile();
    }, [file]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleTrending = (value) => {
        setForm({ ...form, trending: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) {
            showToast('Error', 'Please add title.', 'error');
            return;
        }
        if (!category) {
            showToast('Error', 'Please select a category.', 'error');
            return;
        }
        if (!description) {
            showToast('Error', 'Please fill out the description field.', 'error');
            return;
        }
        if (!overview) {
            showToast('Error', 'Please fill out the overview field.', 'error');
            return;
        }
        if (!file) {
            showToast('Error', 'Please upload an image.', 'error');
            return;
        }
        console.log("Form data:", form);
        try {
            await addDoc(collection(firestore, "blogs"), {
                ...form,
                Timestamp: serverTimestamp(),
                author: authUser.fullName,
                userId: authUser.uid
            });
            navigate("/contribute");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Flex>
            <ContributeSidebar />
            <Stack spacing={4} align="center" pt="60px" w="full">
                <Heading as="h2" size="lg" textAlign="center">
                    Create Blog
                </Heading>
                <Box as="form" className="blog-form" onSubmit={handleSubmit} w="full" maxW="600px" p={4}>
                    <Input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        mb={4}
                    />
                    <Text mb={2}>Is it a trending article?</Text>
                    <RadioGroup value={trending} onChange={handleTrending} mb={4}>
                        <Stack direction="row" spacing={4}>
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                        </Stack>
                    </RadioGroup>
                    <Select
                        placeholder="Please select category"
                        value={category}
                        onChange={handleChange}
                        name="category"
                        mb={4}
                    >
                        {categoryOption.map((option, index) => (
                            <option value={option || ""} key={index}>
                                {option}
                            </option>
                        ))}
                    </Select>
                    <Textarea
                        placeholder="Overview"
                        value={overview}
                        name="overview"
                        onChange={handleChange}
                        mb={4}
                        resize="vertical"
                    />
                    <Textarea
                        placeholder="Description"
                        value={description}
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
                        colorScheme="teal"
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
