import { Container, Flex, Box, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.lg"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                {/* Left Hand Side */}
                <Box display={{ base: "none", md: "block" }} flex="1">
                    <Image src="/login.jpg" h={{ md: 600, lg: 600 }} alt='Auth img' />
                </Box>

                {/* Right Hand Side */}
                <VStack spacing={4} align={"stretch"} flex="1">
                    <Box w="80%" maxW="md" mx="auto">
                        <AuthForm />
                    </Box>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
