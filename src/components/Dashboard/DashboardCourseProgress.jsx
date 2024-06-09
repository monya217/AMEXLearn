import { Box, Text, Flex, Progress } from "@chakra-ui/react";
import { FaBook, FaChartLine, FaWallet } from "react-icons/fa";

const courses = [
  { id: 1, name: "Mutual Funds", icon: FaBook, progress: 95 },
  { id: 2, name: "About Stocks", icon: FaChartLine, progress: 76 },
  { id: 3, name: "Money Management", icon: FaWallet, progress: 43 },
];

const DashboardCourseProgress = () => {
  return (
    <Box bg="white" borderRadius="xl" boxShadow="md" p={6} mt={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Course Progress
      </Text>
      {courses.map((course) => (
        <Flex key={course.id} alignItems="center" mb={4}>
          <Box as={course.icon} size={26} color="blue.500" mr={4} />
          <Box flex="1">
            <Text fontWeight="medium">{course.name}</Text>
            <Progress 
              value={course.progress} 
              size="sm" 
              colorScheme="blue" 
              borderRadius="full" 
              mt={2}
            />
          </Box>
          <Text fontWeight="medium" color="gray.500">
            {course.progress}% Complete
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default DashboardCourseProgress;