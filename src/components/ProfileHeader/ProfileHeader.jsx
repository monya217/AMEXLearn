import { Avatar, Flex, Text, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { BiLogOut } from 'react-icons/bi';  // Import BiLogOut icon
import useAuthStore from "../../store/authStore";

const ProfileHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const navigate = useNavigate();

  const handleLogoutAndNavigate = async () => {
    navigate('/');
    await handleLogout();
  };

  const authUser = useAuthStore(state => state.user);
  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link as={RouterLink} to={"/dashboard"} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Avatar size={"sm"} src={authUser.profilePicURL} />
          <Text fontSize={15} fontWeight={"bold"} ml={2}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Flex alignItems="center" gap={0.01} ml={4} cursor={"pointer"} onClick={handleLogoutAndNavigate}>
        <BiLogOut size={25} color="white" />
      </Flex>
    </Flex>
  );
};

export default ProfileHeader;