import { Avatar, Flex, Text, Link, Button, useDisclosure, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { BiLogOut } from 'react-icons/bi';
import useAuthStore from "../../store/authStore";
import { useRef } from "react";

const ProfileHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleLogoutAndNavigate = async () => {
    navigate('/');
    await handleLogout();
  };

  const authUser = useAuthStore(state => state.user);
  if (!authUser) return null;

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link as={RouterLink} to={"/dashboard"} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Avatar size={"sm"} src={authUser.profilePicURL} />
            <Text fontSize={15} fontWeight={"bold"} ml={2}>
              {authUser.username}
            </Text>
          </Link>
        </Flex>
        <Flex alignItems="center" gap={0.01} ml={4} cursor={"pointer"} onClick={onOpen}>
          <BiLogOut size={25} color="white" />
        </Flex>
      </Flex>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent
          width= "400px"
          boxShadow="0px 8px 24px rgba(0, 0, 0, 0.3)" // Adjust shadow as needed
        >
          <AlertDialogHeader fontSize="2xl" fontWeight="bold" mb="-2">
            Confirm Logout
          </AlertDialogHeader>
          <AlertDialogBody fontSize="lg">
            Are you sure you want to logout?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              bg="#1a65b5"
              color="white"
              ref={cancelRef}
              onClick={onClose}
              boxShadow="lg"
              width="210px"
              _hover={{ bg: "#164e90" }}
              _active={{ bg: "#113d70" }}
            >
              Stay and Learn More
            </Button>
            <Button
              onClick={handleLogoutAndNavigate}
              ml={7}
              isLoading={isLoggingOut}
              boxShadow="lg"
              width={"160px"}
            >
              Catch You Later
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ProfileHeader;
