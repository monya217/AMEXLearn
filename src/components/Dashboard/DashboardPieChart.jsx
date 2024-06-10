import React from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Sample data for the pie chart
const data = [
  { name: 'Available', value: 68 },
  { name: 'Used', value: 32 },
];

// Data for the expense categories
const expenseData = [
  { name: 'Investment', value: 324.30, color: '#805AD5' },
  { name: 'Food', value: 218.30, color: '#48BB78' },
  { name: 'Shopping', value: 118.30, color: '#ED8936' },
  { name: 'Others', value: 400.00, color: '#E53E3E' },
];

// Total spent for calculation
const totalSpent = expenseData.reduce((acc, item) => acc + item.value, 0);

// Custom colors for the pie chart
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
      <Box mt={4}>
        <Flex alignItems="center" mt={2}>
          {expenseData.map((expense, index) => (
            <Box
              key={index}
              h={2}
              flex={`${expense.value / totalSpent}`}
              bg={expense.color}
              mr={index < expenseData.length - 1 ? 1 : 0} // Add margin except for the last element
              borderRadius="md"
            ></Box>
          ))}
        </Flex>
      </Box>
      <Box mt={6}>
        {expenseData.map((expense, index) => (
          <Flex key={index} justifyContent="space-between" alignItems="center" mt={2}>
            <Flex alignItems="center">
              <Box w={3} h={3} borderRadius="full" bg={expense.color} mr={2}></Box>
              <Text fontSize="sm" color="gray.600">{expense.name}</Text>
            </Flex>
            <Text fontSize="sm" color="gray.600">-${expense.value.toFixed(2)}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default DashboardPieChart;
