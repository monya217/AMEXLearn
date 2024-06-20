import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
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
import { BsFillImageFill } from "react-icons/bs";
import usePreviewImg from "../../../hooks/usePreviewImg";
import useShowToast from "../../../hooks/useShowToast";
import useCreatePost from "../../../hooks/useCreatePost";

const CreatePost = forwardRef(({ onClose: handleSidebarClose }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [caption, setCaption] = useState("");
    const imageRef = useRef(null);
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
    const showToast = useShowToast();
    const { isLoading, handleCreatePost } = useCreatePost();

    useImperativeHandle(ref, () => ({
        openModal: onOpen
    }));

    const handlePostCreation = async () => {
        try {
            await handleCreatePost(selectedFile, caption);
            onClose();
            handleSidebarClose();
            setCaption("");
            setSelectedFile(null);
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    const handleClose = () => {
        onClose();
        handleSidebarClose();
    };

    return (
        <>
            {/* Wrapping the Modal in a Box with margin-top */}
            <Box mt={20}>
                <Modal isOpen={isOpen} onClose={handleClose} size='xl'>
                    <ModalOverlay />
                    <ModalContent
                        // Applying custom styles for animation
                        bg={"#EEF3F9"}
                        border={"1px solid"}
                        borderColor={"blue.300"}
                        // Initial position outside the viewport
                        transform={`translateY(${isOpen ? "0%" : "-100%"})`}
                        transition="transform 0.3s ease-in-out"
                    >
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
                                    <CloseButton position={"absolute"} top={2} right={2} onClick={() => setSelectedFile(null)} />
                                </Flex>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handlePostCreation} isLoading={isLoading}>
                                Post
                            </Button>
                            <Button variant='ghost' onClick={handleClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    );
});

export default CreatePost;
