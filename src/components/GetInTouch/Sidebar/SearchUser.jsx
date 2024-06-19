import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import {
    Box,
    Button,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Flex,
    useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import useSearchUser from "../../../hooks/useSearchUser";
import SuggestedUser from "./SuggestedUser";

const SearchUser = forwardRef(({ onClose: handleSidebarClose }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef(null);
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();
    const navigate = useNavigate();

    useImperativeHandle(ref, () => ({
        openModal: onOpen
    }));

    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value);
    };

    const handleUserClick = () => {
        navigate(`/${user.username}`, { state: { user } });
        onClose();
    }

    const handleClose = () => {
        onClose();
        handleSidebarClose();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose} motionPreset='slideInLeft'>
                <ModalOverlay />
                <ModalContent bg={"blue.50"} border={"1px solid blue.300"} maxW={"400px"}>
                    <ModalHeader>Search user</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSearchUser}>
                            <FormControl className="searchBar" display="flex" alignItems="center">
                                <Input 
                                    id="searchQueryInput"
                                    type="text"
                                    placeholder='Search' 
                                    ref={searchRef} 
                                    bg="#f5f5f5"
                                    border="none"
                                    borderRadius="1.625rem"
                                    padding="0 3.5rem 0 1.5rem"
                                    fontSize="1rem"
                                    _focus={{ outline: "none" }}
                                />
                                <Button 
                                    id="searchQuerySubmit"
                                    type='submit'
                                    isLoading={isLoading}
                                    background="none"
                                    border="none"
                                    _hover={{ cursor: "pointer" }}
                                    marginLeft="-3.5rem"
                                    display="flex"
                                    alignItems="center"
                                    padding="0"
                                >
                                    <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                                        <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                    </svg>
                                </Button>
                            </FormControl>
                        </form>
                        {user && <Box onClick={handleUserClick} cursor="pointer"><SuggestedUser user={user} setUser={setUser} /></Box>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
});

export default SearchUser;
