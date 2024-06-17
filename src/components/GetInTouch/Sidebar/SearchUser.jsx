import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import useSearchUser from "../../../hooks/useSearchUser";
import SuggestedUser from "./SuggestedUser";
import { CiSearch } from "react-icons/ci";

const SearchUser = forwardRef((props, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef(null);
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();

    useImperativeHandle(ref, () => ({
        openModal: onOpen
    }));

    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
                <ModalOverlay />
                <ModalContent bg={"blue.50"} border={"1px solid blue.300"} maxW={"400px"}> {/* Set background and border color */}
                    <ModalHeader>Search user</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSearchUser}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input placeholder='Enter username' ref={searchRef} />
                            </FormControl>

                            <Flex w={"full"} justifyContent={"flex-end"}>
                                <Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
                                    Search
                                </Button>
                            </Flex>
                        </form>
                        {user && <SuggestedUser user={user} setUser={setUser} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
});

export default SearchUser;
