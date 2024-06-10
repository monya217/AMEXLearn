import React, { useState, useEffect } from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import "@pathofdev/react-tag-input/build/index.css";
import { ContributeLayout } from './ContributeLayout';
import { useNavigate } from "react-router-dom";
import { firestore, storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import useShowToast from '../../hooks/useShowToast';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import useAuthStore from '../../store/authStore';
import { Input, Textarea, Button, Radio, RadioGroup, Stack, Select } from "@chakra-ui/react";

const initialState = {
    title: "",
    tags: [],
    trending: "no",
    category: "",
    description: ""
}

const categoryOption = [
    "Stocks",
    "Investment",
    "Personal Finance",
];

const PostBlog = () => {
    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const navigate = useNavigate();
    const authUser = useAuthStore(state => state.user);
    const showToast = useShowToast();

    const { title, tags, category, trending, description } = form;

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on(
                "state_changed", (snapshot) => {
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
                }, (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
                    });
                }
            );
        };
        file && uploadFile();
    }, [file])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleTags = (tags) => {
        setForm({ ...form, tags });
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
        if (tags.length === 0) {
            showToast('Error', 'Please add at least one tag.', 'error');
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
        if (!file) {
            showToast('Error', 'Please upload an image.', 'error');
            return;
        }
        console.log("Form data:", form);
        try {
            await addDoc(collection(firestore, "blogs"), {
                ...form,
                Timestamp: serverTimestamp(),
                author: authUser.username,
                userId: authUser.uid
            });
            navigate("/contribute");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ContributeLayout>
            <Stack spacing={4} align="center">
                <div className="text-center heading py-2">
                    Create Blog
                </div>
                <form className="row blog-form" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                    <ReactTagInput
                        tags={tags}
                        placeholder="Tags"
                        onChange={handleTags}
                    />
                    <RadioGroup value={trending} onChange={handleTrending}>
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
                    >
                        {categoryOption.map((option, index) => (
                            <option value={option || ""} key={index}>
                                {option}
                            </option>
                        ))}
                    </Select>
                    <Textarea
                        placeholder="Description"
                        value={description}
                        name="description"
                        onChange={handleChange}
                    />
                    <Input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <Button
                        colorScheme="teal"
                        variant="solid"
                        type="submit"
                        disabled={progress !== null && progress < 100}
                    >
                        Submit
                    </Button>
                </form>
            </Stack>
        </ContributeLayout>
    )
}

export default PostBlog;
