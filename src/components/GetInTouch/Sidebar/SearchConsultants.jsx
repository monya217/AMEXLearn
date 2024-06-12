import React, { useRef } from 'react';
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
	Text,
	Avatar,
	Link,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { Link as RouterLink } from "react-router-dom";
import useGetUserProfileByUsername from "../../../hooks/useGetUserProfileByUsername";

const SearchConsultants = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const searchRef = useRef(null);
	const { isLoading, userProfile, getUserProfile } = useGetUserProfileByUsername();

	const handleSearchUser = (e) => {
		e.preventDefault();
		const searchTerm = searchRef.current.value;
		console.log("Searching for:", searchTerm);
		getUserProfile(searchTerm);
	};

	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={onOpen}
				>
					<CiSearch />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
				<ModalOverlay />
				<ModalContent bg={"white"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Search user</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<form onSubmit={handleSearchUser}>
							<FormControl>
								<FormLabel>Username</FormLabel>
								<Input placeholder='asaprogrammer' ref={searchRef} />
							</FormControl>

							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
									Search
								</Button>
							</Flex>
						</form>

						{userProfile && (
							<Box mt={4}>
								<Flex alignItems="center">
									<Avatar src={userProfile.profilePicURL} size="md" mr={4} />
									<Link as={RouterLink} to={`/${userProfile.username}`}>
										<Text fontWeight="bold">{userProfile.username}</Text>
									</Link>
								</Flex>
							</Box>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SearchConsultants;
