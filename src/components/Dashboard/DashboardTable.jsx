import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Flex, Icon } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

// Sample data, replace with your actual data
const payments = [
  { id: 1, recipient: "Amazon", date: "26 May", amount: 35.00 },
  { id: 2, recipient: "Netflix", date: "24 May", amount: 12.99 },
  { id: 3, recipient: "Spotify", date: "22 May", amount: 9.99 },
  { id: 4, recipient: "Uber", date: "20 May", amount: 22.50 },
];

const DashboardTable = () => {
  return (
    <Box w="full" bg="white" borderRadius="xl" boxShadow="md" p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Text fontSize="xl" fontWeight="bold">
          Payments
        </Text>
        <Flex 
          as="button" 
          alignItems="center" 
          color="blue.500" 
          fontWeight="medium"
          _hover={{ color: "blue.600" }}
        >
          <Text mr={2}>View all</Text>
          <Icon as={ArrowUpIcon} transform="rotate(45deg)" />
        </Flex>
      </Flex>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.400" fontSize="xs" textTransform="uppercase">
                Recipient
              </Th>
              <Th color="gray.400" fontSize="xs" textTransform="uppercase">
                Date
              </Th>
              <Th color="gray.400" fontSize="xs" textTransform="uppercase" isNumeric>
                Amount
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {payments.map((payment) => (
              <Tr key={payment.id}>
                <Td fontWeight="medium">{payment.recipient}</Td>
                <Td color="gray.500">{payment.date}</Td>
                <Td isNumeric fontWeight="medium" color="gray.700">
                  ${payment.amount.toFixed(2)}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default DashboardTable;