import { Box, Text, Flex } from "@chakra-ui/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data, replace with your actual data
const data = [
  { name: 'Available', value: 68 },
  { name: 'Used', value: 32 },
];

// Custom colors
const COLORS = ['#3182CE', '#E2E8F0'];

const DashboardPieChart = () => {
  const availableBalance = 1248.40; // Replace with actual data

  return (
    <Box w="full" bg="white" borderRadius="xl" boxShadow="md" p={6} mt={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Available Balance
      </Text>
      <Flex alignItems="center">
        <Box width="120px" height="120px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={40}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} strokeWidth={0} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Box ml={6}>
          <Text fontSize="3xl" fontWeight="bold" color="blue.600">
            ${availableBalance.toFixed(2)}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Available Balance
          </Text>
        </Box>
      </Flex>
      <Flex mt={6} justifyContent="space-between">
        <Flex alignItems="center">
          <Box w={3} h={3} borderRadius="full" bg={COLORS[0]} mr={2}></Box>
          <Text fontSize="sm" color="gray.600">Available</Text>
        </Flex>
        <Flex alignItems="center">
          <Box w={3} h={3} borderRadius="full" bg={COLORS[1]} mr={2}></Box>
          <Text fontSize="sm" color="gray.600">Used</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardPieChart;