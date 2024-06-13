import React from "react";
import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <ChakraSpinner
      mt="5"
      color="primary"
      size="xl"
      emptyColor="gray.200"
      thickness="4px"
      speed="0.65s"
    />
  );
};

export default Spinner;
