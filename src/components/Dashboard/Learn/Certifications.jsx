import { Box, Heading, Flex, Button, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <Box mt={10}>
      <Heading size="md" mb={5}>
        Certifications
      </Heading>
      <Flex wrap="wrap" gap={6} justifyContent="space-between">
        <Box p={5} shadow="md" borderWidth="1px" width={{ base: "100%", md: "48%" }}>
          <Heading fontSize="xl">Certified Financial Planner (CFP)</Heading>
          <Text mb={4}>AMEXLearn</Text>
          <Text mb={2}>Issued June 2024</Text>
          <Button
            colorScheme="blue"
            variant="outline"
            borderRadius="full"
            rightIcon={<FaExternalLinkAlt />}
          >
            Show credential
          </Button>
          <Text mt={4}>
            Skills: Financial planning, Investment management, Tax planning, Retirement planning, Estate planning
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" width={{ base: "100%", md: "48%" }}>
          <Heading fontSize="xl">Chartered Financial Analyst (CFA)</Heading>
          <Text mb={4}>AMEXLearn</Text>
          <Text mb={2}>Issued June 2024</Text>
          <Button
            colorScheme="blue"
            variant="outline"
            borderRadius="full"
            rightIcon={<FaExternalLinkAlt />}
          >
            Show credential
          </Button>
          <Text mt={4}>
            Skills: Investment analysis, Portfolio management, Financial modeling, Risk management, Ethics and professional standards
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Certifications;
