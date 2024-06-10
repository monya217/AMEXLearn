import { Box, Flex } from "@chakra-ui/react";
import Stock from "../Stocks/Stock";
import Sidebar from './Sidebar/Sidebar'; 
export function StockGeeks() {
  return (
    
    <Flex direction={{ base: "column", md: "row" }}>
       <Sidebar />
      <Box
        flex={{ base: "none", md: 1 }}
        padding="2em"
        bg="white"
        borderRadius="md"
        boxShadow="lg"
        minHeight="100vh"
        mr={{ base: 0, md: 4 }} // Add some spacing between the flex items on larger screens
      >
        <Stock />
      </Box>
    </Flex>
  );
}