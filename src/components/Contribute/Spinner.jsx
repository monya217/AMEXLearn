import React from "react";
import { Box, Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pt="20">
      <ChakraSpinner
        color="primary"
        size="xl"
        emptyColor="gray.200"
        thickness="4px"
        speed="0.35s"
      />
    </Box>
  );
};

export default Spinner;
