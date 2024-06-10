import React from 'react';
import { Box, Flex, Text, Image, Stack, Button, Icon } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import amexCardImage from '../../images/cards.png'; // Adjust the path as needed
import appleIcon from '../../images/apple-icon.png'; // Adjust the path as needed
import petrolIcon from '../../images/petrol-icon.png'; // Adjust the path as needed
import mcdonaldsIcon from '../../images/mcD-logo.png'; // Adjust the path as needed
import creditCardIcon from '../../images/credit-card-icon.png'; // Adjust the path as needed

const DashboardCards = () => {
  return (
    <Box w="full" bg="white" borderRadius="xl" boxShadow="md" p={6}>
      <Flex justifyContent="space-between" mb={4}>
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
          My Cards
        </Text>
        <Flex alignItems="center" gap={4}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="gray.500">
            Recent Transaction
          </Text>
          <Flex 
            as="button" 
            alignItems="center" 
            color="blue.500" 
            fontWeight="medium"
            _hover={{ color: "blue.600" }}
          >
            <Text fontSize={{ base: "sm", md: "md" }} mr={2}>View all</Text>
            <Icon as={ArrowUpIcon} transform="rotate(45deg)" boxSize={4} />

          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "45%" }} bg="white" borderRadius="xl" boxShadow="md" p={4} mb={{ base: 4, md: 0 }}>
          <Image src={amexCardImage} alt="Amex Card" borderRadius="md" w="100%" h="auto" />
        </Box>
        <Box w={{ base: "100%", md: "50%" }} bg="white" borderRadius="xl" boxShadow="md" p={4}>
          <Flex justifyContent="space-around" mb={4}>
            <Button
              colorScheme="blue"
              variant="solid"
              w="70px"
              h="35px"
              fontSize={{ base: "sm", md: "md" }}
              _hover={{ bg: "white", color: "blue.500", borderColor: "blue.500", borderWidth: "1px" }}
            >
              Day
            </Button>
            <Button
              colorScheme="blue"
              variant="solid"
              w="70px"
              h="35px"
              fontSize={{ base: "sm", md: "md" }}
              _hover={{ bg: "white", color: "blue.500", borderColor: "blue.500", borderWidth: "1px" }}
            >
              Week
            </Button>
            <Button
              colorScheme="blue"
              variant="solid"
              w="70px"
              h="35px"
              fontSize={{ base: "sm", md: "md" }}
              _hover={{ bg: "white", color: "blue.500", borderColor: "blue.500", borderWidth: "1px" }}
            >
              Month
            </Button>
            <Button
              colorScheme="blue"
              variant="solid"
              w="70px"
              h="35px"
              fontSize={{ base: "sm", md: "md" }}
              _hover={{ bg: "white", color: "blue.500", borderColor: "blue.500", borderWidth: "1px" }}
            >
              Year
            </Button>
          </Flex>
          <Stack spacing={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Image src={appleIcon} alt="Apple Store" w="30px" mr={2} /> {/* Increased size */}
                <Text fontSize={{ base: "sm", md: "md" }}>Apple Store</Text>
              </Flex>
              <Text fontSize={{ base: "sm", md: "md" }}>-$3,500.00</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Image src={petrolIcon} alt="Petrol Pump" w="30px" mr={2} /> {/* Increased size */}
                <Text fontSize={{ base: "sm", md: "md" }}>Petrol Pump</Text>
              </Flex>
              <Text fontSize={{ base: "sm", md: "md" }}>-$120.00</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Image src={mcdonaldsIcon} alt="McDonald's" w="30px" mr={2} /> {/* Increased size */}
                <Text fontSize={{ base: "sm", md: "md" }}>McDonald's</Text>
              </Flex>
              <Text fontSize={{ base: "sm", md: "md" }}>-$90.00</Text>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Image src={creditCardIcon} alt="Credit Card Fees" w="30px" mr={2} /> {/* Increased size */}
                <Text fontSize={{ base: "sm", md: "md" }}>Credit Card Fees</Text>
              </Flex>
              <Text fontSize={{ base: "sm", md: "md" }}>-$180.00</Text>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardCards;
