import { Box, Text, Flex, HStack, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const DashboardCreditScore = () => {
  const creditScore = 720;
  const scores = [300, 620, 660, 720, 750, 900];
  const scoreColors = ["red.500", "orange.500", "yellow.500", "green.500", "green.800"];

  return (
    <Box bg="white" borderRadius="xl" boxShadow="lg" p={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        My Credit Score
      </Text>
      <Flex alignItems="center" mb={6}>
        <Text fontSize="7xl" fontWeight="bold" color="blue.500" mr={4} lineHeight="1">
          {creditScore}
        </Text>
        <Text fontSize="3xl" fontWeight="bold" color="green.500">
          GREAT
        </Text>
      </Flex>
      <HStack spacing={0} mb={2}>
        {scoreColors.map((color, index) => (
          <Box key={color} flex={1} bg={color} h={6} />
        ))}
      </HStack>
      <Flex justifyContent="space-between">
        {scores.map((score, index) => (
          <Text key={score} fontSize="sm" color="gray.500" fontWeight={index === scores.length - 1 ? "normal" : "bold"}>
            {score}
          </Text>
        ))}
      </Flex>
      <Link href="/learn-more-about-credit-score" mt={4} display="inline-flex" alignItems="center" color="blue.500" fontWeight="medium">
        Learn More <ArrowForwardIcon ml={2} />
      </Link>
    </Box>
  );
};

export default DashboardCreditScore;