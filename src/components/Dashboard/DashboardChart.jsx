import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data, replace with your actual data
const data = [
  { name: 'Jan', amount: 400 },
  { name: 'Feb', amount: 300 },
  { name: 'Mar', amount: 500 },
  { name: 'Apr', amount: 270 },
  { name: 'May', amount: 400 },
  { name: 'Jun', amount: 450 },
  { name: 'Jul', amount: 460 },
];

const DashboardChart = () => {
  return (
    <Box w="full" bg="white" borderRadius="xl" boxShadow="md" p={6} mt={6}>
      <Box mb={6}>
        <Text fontSize="xl" fontWeight="bold">
          Monthly Savings
        </Text>
        <Text fontSize="sm" color="gray.500">
          Last 7 months
        </Text>
      </Box>
      <Box height="300px">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#718096' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#718096' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ background: '#2B6CB0', color: '#FFF', borderRadius: '4px' }}
              labelStyle={{ display: 'none' }}
              itemStyle={{ color: '#FFF' }} // Set the text color to white
              formatter={(value) => [`$${value}`, 'Amount']}
            />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#3182CE" 
              strokeWidth={3} 
              dot={false}
              activeDot={{ r: 6, stroke: '#2C5282', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default DashboardChart;
