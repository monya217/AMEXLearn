import { Flex, Box, VStack, Text} from "@chakra-ui/react"
import { useState } from 'react'
import Signup from "./Signup";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);


  return (
    <>
        <Box border={"1px solid gray"} borderRadius={4} padding={5}>
            <VStack spacing={4}>
                <Text fontSize={25}>
                    {isLogin ? "Login to AMEXLearn" : "Create Account on AMEXLearn"}
                </Text>
                
                {isLogin ? <Login /> : <Signup />}

                {/* OR Text */}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                    <Text mx={1} color={"black"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                </Flex>

                <GoogleAuth isLogin={isLogin} />

            </VStack>
        </Box>



        <Box border={"1px solid gray"} borderRadius={4} padding={5} mt={5}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={2} fontSize={14}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                </Box>
                <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"} fontSize={14}>
                    {isLogin? "Sign up" : "Login"}
                </Box>
            </Flex>
        </Box>
    </>

  )
}

export default AuthForm
