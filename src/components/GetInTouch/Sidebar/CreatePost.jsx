import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import useShowToast from "../../../hooks/useShowToast";
import useCreatePost from "../../../hooks/useCreatePost";

const CreatePost = forwardRef(({ onClose: handleSidebarClose }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [caption, setCaption] = useState("");
    const showToast = useShowToast();
    const { isLoading, handleCreatePost } = useCreatePost();

    useImperativeHandle(ref, () => ({
        openModal: onOpen
    }));

    const handlePostCreation = async () => {
        try {
            await handleCreatePost(null, caption);  // image is now null
            onClose();
            handleSidebarClose();
            setCaption("");
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    const handleClose = () => {
        onClose();
        handleSidebarClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} size='xl'>
            <ModalOverlay />
            <ModalContent
                bg={"#EEF3F9"}
                border={"1px solid"}
                borderColor={"blue.300"}
                mt={20}
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
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handlePostCreation} isLoading={isLoading}>
                        Post
                    </Button>
                    <Button variant='ghost' onClick={handleClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
});

export default CreatePost;
