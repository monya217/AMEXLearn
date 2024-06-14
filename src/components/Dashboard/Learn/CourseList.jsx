import { CheckCircleIcon, SpinnerIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Table, Tbody, Td, Th, Thead, Tr, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaBalanceScale, FaChartBar, FaChartLine, FaCoins, FaCreditCard, FaFileInvoice, FaMoneyBillWave, FaPiggyBank, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const getIconByCourseName = (name) => {
  switch (name) {
    case 'Budgeting For Beginners':
      return FaPiggyBank;
    case 'Understanding Credit Scores':
      return FaCreditCard;
    case 'Managing Debt Effectively':
      return FaMoneyBillWave;
    case 'Creating A Personal Financial Plan':
      return FaFileInvoice;
    case 'Strategies For Saving And Investing':
      return FaChartLine;
    case 'Introduction To Risk Management':
      return FaShieldAlt;
    case 'Understanding Market Volatility':
      return FaBalanceScale;
    case 'Hedging Strategies For Investors':
      return FaProjectDiagram;
    case 'Insurance And Risk Mitigation':
      return FaShieldAlt;
    default:
      return FaChartBar;
  }
};

const CourseList = () => {
  const courses = [
    { name: 'Budgeting For Beginners', author: 'John Doe', coinsGained: 20, type: 'CourseInProgress' },
    { name: 'Understanding Credit Scores', author: 'Jane Smith', coinsGained: 13, type: 'CourseInProgress' },
    { name: 'Managing Debt Effectively', author: 'Michael Johnson', coinsGained: 24, type: 'CourseInProgress', icon: './google.png' },
    { name: 'Creating A Personal Financial Plan', author: 'Emily Davis', coinsGained: 46, type: 'CourseInProgress' },
    { name: 'Strategies For Saving And Investing', author: 'David Wilson', coinsGained: 21, type: 'CourseInProgress' },
    { name: 'Introduction To Risk Management', author: 'Sarah Lee', coinsGained: 120, type: 'CompletedCourse' },
    { name: 'Understanding Market Volatility', author: 'Chris Martin', coinsGained: 220, type: 'CompletedCourse' },
    { name: 'Hedging Strategies For Investors', author: 'Anna Brown', coinsGained: 132, type: 'CompletedCourse' },
    { name: 'Insurance And Risk Mitigation', author: 'James White', coinsGained: 144, type: 'CompletedCourse' },
  ];

  const completedCourses = courses.filter(course => course.type === 'CompletedCourse');
  const inProgressCourses = courses.filter(course => course.type === 'CourseInProgress');

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} variant="enclosed">
      <TabList mb={5}>
        <Tab>All</Tab>
        <Tab>Completed</Tab>
        <Tab>In Progress</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Course</Th>
                <Th>Taught By</Th>
                <Th>Coins Gained</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((course, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={getIconByCourseName(course.name)} color="blue.400" boxSize="30px" mr={7} />
                      <Box>
                        <Text fontWeight="bold">{course.name}</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>{course.author}</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={FaCoins} color={"yellow.400"} mr={1} />
                      {course.coinsGained}
                    </Flex>
                  </Td>
                  <Td>
                    {course.type === 'CompletedCourse' ? (
                      <Flex alignItems="center">
                        <Icon as={CheckCircleIcon} color="green.500" mr={1} />
                        Completed
                      </Flex>
                    ) : (
                      <Flex alignItems="center">
                        <Icon as={SpinnerIcon} color="blue.500" mr={1} />
                        In Progress
                      </Flex>
                    )}
                  </Td>
                  <Td>
                    <Button colorScheme="blue" size="sm">View Course</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Course</Th>
                <Th>Taught By</Th>
                <Th>Coins Gained</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {completedCourses.map((course, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={getIconByCourseName(course.name)} color="blue.400" boxSize="30px" mr={7} />
                      <Box>
                        <Text fontWeight="bold">{course.name}</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>{course.author}</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={FaCoins} color={"yellow.400"} mr={1} />
                      {course.coinsGained}
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={CheckCircleIcon} color="green.500" mr={1} />
                      Completed
                    </Flex>
                  </Td>
                  <Td>
                    <Button colorScheme="blue" size="sm">View Course</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TabPanel>
        <TabPanel>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Course</Th>
                <Th>Taught By</Th>
                <Th>Coins Gained</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {inProgressCourses.map((course, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={getIconByCourseName(course.name)} color="blue.400" boxSize="30px" mr={7} />
                      <Box>
                        <Text fontWeight="bold">{course.name}</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>{course.author}</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={FaCoins} color={"yellow.400"} mr={1} />
                      {course.coinsGained}
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems="center">
                      <Icon as={SpinnerIcon} color="blue.500" mr={1} />
                      In Progress
                    </Flex>
                  </Td>
                  <Td>
                    <Button colorScheme="blue" size="sm">View Course</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default CourseList;
