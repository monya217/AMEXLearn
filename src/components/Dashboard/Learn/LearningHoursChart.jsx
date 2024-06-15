import { Box, Flex, Heading, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Tooltip } from "react-bootstrap";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const LearningHoursChart = () => {
  const learningHoursDataDaily = [
    { name: 'Mon', hours: 2 },
    { name: 'Tue', hours: 3 },
    { name: 'Wed', hours: 1 },
    { name: 'Thu', hours: 4 },
    { name: 'Fri', hours: 2 },
    { name: 'Sat', hours: 5 },
    { name: 'Sun', hours: 3 },
  ];

  const learningHoursDataMonthly = [
    { name: 'January', hours: 10 },
    { name: 'February', hours: 15 },
    { name: 'March', hours: 12 },
    { name: 'April', hours: 18 },
    { name: 'May', hours: 16 },
    { name: 'June', hours: 20 },
  ];

  const [learningHoursView, setLearningHoursView] = useState('daily');
  const [learningHoursChartType, setLearningHoursChartType] = useState('line');

  const handleLearningHoursViewChange = (e) => {
    setLearningHoursView(e.target.value);
  };

  const handleLearningHoursChartTypeChange = (e) => {
    setLearningHoursChartType(e.target.value);
  };

  return (
    <Box flex="1" width="48%">
      <Heading size="md" mb={3} >Learning Hours</Heading>
      <Flex direction="row" mb={4} gap={3}> 
        <Select width="150px" onChange={handleLearningHoursViewChange} value={learningHoursView} mb={3}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </Select>
        <Select width="150px" onChange={handleLearningHoursChartTypeChange} value={learningHoursChartType} mb={3}>
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
        </Select>
      </Flex>
      <Box ml={-10}> 
        <ResponsiveContainer width="100%" height={300}>
          {learningHoursChartType === 'line' ? (
            <LineChart data={learningHoursView === 'daily' ? learningHoursDataDaily : learningHoursDataMonthly}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="hours" stroke="#90CDF4" />
            </LineChart>
          ) : (
            <BarChart data={learningHoursView === 'daily' ? learningHoursDataDaily : learningHoursDataMonthly}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#90CDF4" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default LearningHoursChart;
