import {
	Box,
	Button,
	CloseButton,
	Flex,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Tooltip,
	useDisclosure,
  } from "@chakra-ui/react";
  import { IoAddOutline } from "react-icons/io5";
  import { BsFillImageFill } from "react-icons/bs";
  import { useRef, useState } from "react";
  import usePreviewImg from "../../../hooks/usePreviewImg";
  import useShowToast from "../../../hooks/useShowToast";
  import useAuthStore from "../../../store/authStore";
  import usePostStore from "../../../store/postStore";
  import useUserProfileStore from "../../../store/userProfileStore";
  import { useLocation } from "react-router-dom";
  import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
  import { firestore, storage } from "../../../firebase/firebase";
  import { getDownloadURL, ref, uploadString } from "firebase/storage";
  
  const CreatePost = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [caption, setCaption] = useState("");
	const imageRef = useRef(null);
	const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
	const showToast = useShowToast();
	const { isLoading, handleCreatePost } = useCreatePost();
  
	const handlePostCreation = async () => {
	  try {
		await handleCreatePost(selectedFile, caption);
		onClose();
		setCaption("");
		setSelectedFile(null);
	  } catch (error) {
		showToast("Error", error.message, "error");
	  }
	};
  
	return (
	  <>
		<Tooltip
		  hasArrow
		  label={"Create"}
		  placement='right'
		  ml={1}
		  openDelay={500}
		  display={{ base: "block", md: "none" }}
		>
		  <Flex
			alignItems={"center"}
			gap={4}
			_hover={{ bg: "blue.400" }}
			borderRadius={6}
			p={2}
			w={{ base: 10, md: "full" }}
			justifyContent={{ base: "center", md: "flex-start" }}
			onClick={onOpen}
		  >
			<IoAddOutline />
			<Box display={{ base: "none", md: "block" }}>Create</Box>
		  </Flex>
		</Tooltip>
  
		<Modal isOpen={isOpen} onClose={onClose} size='xl'>
		  <ModalOverlay />
  
		  <ModalContent bg={"blue.50"} border={"1px solid"} borderColor={"blue.300"}>
			<ModalHeader>Create Post</ModalHeader>
			<ModalCloseButton />
			<ModalBody pb={6}>
			  <Textarea
				placeholder='Share Your Thoughts...'
				value={caption}
				onChange={(e) => setCaption(e.target.value)}
				bg="white"
				_placeholder={{ color: "gray.500" }}
			  />
  
			  <Flex mt={4} alignItems="center">
				<BsFillImageFill
				  onClick={() => imageRef.current.click()}
				  style={{ cursor: "pointer" }}
				  size={20}
				  color="blue.400"
				/>
				<Input type='file' hidden ref={imageRef} onChange={handleImageChange} />
			  </Flex>
  
			  {selectedFile && (
				<Flex mt={4} w={"full"} position={"relative"} justifyContent={"center"}>
				  <Image src={selectedFile} alt='Selected img' borderRadius="md" />
				  <CloseButton
					position={"absolute"}
					top={2}
					right={2}
					onClick={() => setSelectedFile(null)}
				  />
				</Flex>
			  )}
			</ModalBody>
  
			<ModalFooter>
			  <Button colorScheme="blue" mr={3} onClick={handlePostCreation} isLoading={isLoading}>
				Post
			  </Button>
			  <Button variant='ghost' onClick={onClose}>
				Cancel
			  </Button>
			</ModalFooter>
		  </ModalContent>
		</Modal>
	  </>
	);
  };
  
  export default CreatePost;
  
  function useCreatePost() {
	const showToast = useShowToast();
	const [isLoading, setIsLoading] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const createPost = usePostStore((state) => state.createPost);
	const addPost = useUserProfileStore((state) => state.addPost);
	const userProfile = useUserProfileStore((state) => state.userProfile);
	const { pathname } = useLocation();
  
	const handleCreatePost = async (selectedFile, caption) => {
	  if (isLoading) return;
	  setIsLoading(true);
	  const newPost = {
		caption: caption,
		likes: [],
		comments: [],
		createdAt: Date.now(),
		createdBy: authUser.uid,
	  };
  
	  try {
		const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
		const userDocRef = doc(firestore, "users", authUser.uid);
  
		await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
  
		if (selectedFile) {
		  const imageRef = ref(storage, `posts/${postDocRef.id}`);
		  await uploadString(imageRef, selectedFile, "data_url");
		  const downloadURL = await getDownloadURL(imageRef);
		  await updateDoc(postDocRef, { imageURL: downloadURL });
		  newPost.imageURL = downloadURL;
		}
  
		if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });
  
		if (pathname !== "/" && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postDocRef.id });
  
		showToast("Success", "Post created successfully", "success");
	  } catch (error) {
		showToast("Error", error.message, "error");
	  } finally {
		setIsLoading(false);
	  }
	};
  
	return { isLoading, handleCreatePost };
  }
  