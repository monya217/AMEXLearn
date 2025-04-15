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
  Image,
  Text
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { firestore, storage } from '../../firebase/firebase';
import { addDoc, updateDoc, doc, collection, serverTimestamp, getDoc } from "firebase/firestore";
import useAuthStore from '../../store/authStore';
import ContributeSidebar from '../../components/Contribute/ContributeSidebar';
import headerBg from '../../assets/images/hero_img9.jpeg'; // Adjust the path to your background image
import roadmap from '../../assets/images/roadmap2.png'; 
const imgUrl = "https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg";

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
    overview: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
            overview: blogData.overview
          });
        }
      };
      fetchBlog();
    }
  }, [blogId]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, category, description, overview } = form;
  
    const defaultImgUrl = "https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg";
  
    if (!title || !category || !description || !overview) {
      toast({
        title: 'Error',
        description: 'Please fill out all fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
  
    const formData = {
      ...form,
      imgUrl: defaultImgUrl, // Set static image here
      Timestamp: serverTimestamp(),
      author: authUser.fullName,
      userId: authUser.uid
    };
  
    try {
      if (blogId) {
        await updateDoc(doc(firestore, "blogs", blogId), formData);
        toast({
          title: 'Success',
          description: 'Blog updated successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        navigate(`/blog/${blogId}`);
      } else {
        const docRef = await addDoc(collection(firestore, "blogs"), formData);
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

  const formWidth = useBreakpointValue({ base: "95%", md: "90%", lg: "85%", xl: "80%" });

  return (
    <Flex direction="row" width="100%" height="100vh" overflow="hidden">
      <Box mt = {10}>
      <ContributeSidebar />
      </Box>
      
      <Flex direction="column" width="100%" overflowY="auto">
        <Flex direction="column" align="center" justify="center" w="full" >
        <Box
      bgImage={`url(${headerBg})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      width="100%"
      height="350px"  // Increase the height to provide more vertical space
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      color="white"
      p={4}
    >
      <Image src={roadmap} alt="Roadmap" width={{ base: '80%', md: '70%', lg: '53%' }} mb={4} mt = {20} />
    </Box>
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
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  type="submit"
                  isFullWidth
                  
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
