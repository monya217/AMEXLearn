import React from 'react';
import { ContributeLayout } from '../../components/Contribute/ContributeLayout'; // Importing ContributeLayout
import { Box, Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

const Contribute = () => {
  const textAlign = useBreakpointValue({ base: "left", lg: "center" });

  return (
    <ContributeLayout>
      <Container maxW={"container.lg"} py={10} mt={12}>
        <Flex direction="column" align={textAlign === "center" ? "center" : "flex-start"}>
          <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign={textAlign}>
            Contribute Page
          </Text>
          <Text fontSize="md" color="gray.600" textAlign={textAlign}>
            Welcome to the contribute page!
          </Text>
        </Flex>
      </Container>
    </ContributeLayout>
  );
}

export default Contribute;
