import React, { useState } from 'react';
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Sample data
const leaderboardData = [
  { name: '0-10%', users: 40000 },
  { name: '10-20%', users: 45000 },
  { name: '20-30%', users: 50000 },
  { name: '30-40%', users: 55000 },
  { name: '40-50%', users: 60000 },
  { name: '50-60%', users: 65000 },
  { name: '60-70%', users: 70000 },
  { name: '70-80%', users: 75000 },
  { name: '80-90%', users: 85000 },
  { name: '90-100%', users: 100000 },
];

const LeaderboardChart = ({ userPercentage = 22.86 }) => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const userRank = Math.floor(userPercentage / 10);

  const renderCustomTooltip = ({ payload, label }) => {
    if (payload && payload.length) {
      return (
        <Box bg="gray.700" color="white" p={2} borderRadius="md">
          <Text>{label}</Text>
          <Text>{payload[0].value} users</Text>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box bg="white" p={5} borderRadius="md" width="48%">
      <Heading size="md" color="black" mb={3}>Leaderboard</Heading>
      <Flex mb={3} alignItems="center" color="black">
        <Text fontSize="2xl" mr={2}>Top {userPercentage}%</Text>
        <Text fontSize="lg">
          {leaderboardData[userRank].users} users
        </Text>
      </Flex>
      <ResponsiveContainer width="100%" height={300}> {/* Increased height */}
        <BarChart
          data={leaderboardData}
          onMouseLeave={() => setHoveredBar(null)}
        >
          <XAxis dataKey="name" stroke="#000" />
          <Tooltip content={renderCustomTooltip} cursor={{ fill: 'rgba(0, 0, 0, 0.2)' }} />
          <Bar dataKey="users">
            {leaderboardData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === userRank ? "#3182CE" : "#90CDF4"} // Updated to blue tones
                onMouseEnter={() => setHoveredBar(index)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LeaderboardChart;
