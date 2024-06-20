import React, { useState, useEffect } from 'react';
import {
  Flex,
  Stack,
  Input,
  Textarea,
  Button,
  Select,
  Box,
  Heading,
  useToast,
  FormControl,
  FormLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { firestore, storage } from '../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, updateDoc, doc, collection, serverTimestamp, getDoc } from "firebase/firestore";
import useAuthStore from '../../store/authStore';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';
import bannerImg2 from '../../assets/images/contri6.png';  // Adjust the path as necessary

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
        description: 'Please fill out all fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (progress !== null && progress < 100) {
      toast({
        title: 'Error',
        description: 'Image upload in progress. Please wait until it is completed.',
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
        navigate(`/blog/${blogId}`);
      } else {
        const docRef = await addDoc(collection(firestore, "blogs"), {
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
        navigate(`/blog/${docRef.id}`);
      }
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

  const handleCancel = () => {
    navigate("/blogs");
  };

  const formWidth = useBreakpointValue({ base: "90%", md: "80%", lg: "70%", xl: "60%" });

  return (
    <Flex direction="row" width="100%" height="100vh" overflow="hidden">
      <ContributeSidebar />
      <Flex direction="column" width="100%" overflowY="auto">
        <Flex direction="column" align="center" justify="center" w="full" >
        <Box
          bgImage={`url(${bannerImg2})`}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          height="350px"
          width="100%"
        />
          <Box w={formWidth} p={6} mt="20px">
            <Heading as="h2" size="xl" textAlign="center" mb={6}>
              {blogId ? 'Edit Blog' : 'Create Blog'}
            </Heading>
            <Box as="form" onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Please select category"
                  value={form.category}
                  onChange={handleChange}
                  name="category"
                >
                  {categoryOptions.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Overview</FormLabel>
                <Textarea
                  placeholder="Overview"
                  value={form.overview}
                  name="overview"
                  onChange={handleChange}
                  resize="vertical"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  value={form.description}
                  name="description"
                  onChange={handleChange}
                  resize="vertical"
                  rows={6}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Insert Image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormControl>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  type="submit"
                  isFullWidth
                  isLoading={progress !== null && progress < 100}
                  loadingText="Submitting"
                >
                  Submit
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={handleCancel}
                  isFullWidth
                >
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostBlog;
