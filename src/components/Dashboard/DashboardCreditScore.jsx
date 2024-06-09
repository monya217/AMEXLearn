import { Box, Text, Flex } from "@chakra-ui/react";

const DashboardCreditScore = () => {
  return (
    <Box bg="white" borderRadius="xl" boxShadow="md" p={6} mt={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        My Credit Score
      </Text>
      <Flex alignItems="center">
        <Text fontSize="6xl" fontWeight="bold" color="blue.500" mr={4}>
          720
        </Text>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="green.500">
            GREAT
          </Text>
          <Flex mt={2}>
            {[300, 620, 660, 720, 750, 900].map((score, index) => (
              <Box
                key={score}
                w="full"
                h="4px"
                bg={index <= 3 ? "green.500" : "gray.200"}
                mr={index < 5 ? 1 : 0}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardCreditScore;