import { Box, Flex, Spinner } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../components/GetInTouch/Sidebar/Sidebar'; // Importing Sidebar as default export

import SuggestedConsultants from '../../components/Consultants/SuggestedConsultant';
import Trending from '../../components/GetInTouch/Trending';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
// Assuming you have a spinner component

export const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  
  const canRenderSidebar = pathname !== "/auth" && user;

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDir="row">
      {/* Sidebar on the left */}
      {canRenderSidebar ? (
        // <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        // </Box>
      ) : null}
      
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>

      {/* Page content on the right */}
      <Box 
        flex={3} 
        mt={{ base: 2, lg: 100 }} 
        mr={{ base: 2, lg: 57 }} // Adjust margin-right as needed
        display={{ base: "none", lg: "block" }} 
        maxW={"300px"}
      >
        <SuggestedConsultants />
        <Trending />
      </Box>
    </Flex>
  );
};
const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};