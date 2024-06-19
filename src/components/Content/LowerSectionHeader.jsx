import React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

const LowerSectionHeader = ({ title }) => {
  return (
    <Box w="full" h="14" d="flex" alignItems="center" justifyContent="space-between">
      <Heading as="h2" size="lg" fontWeight="bold" isTruncated>
        <Link
          href="!#"
          color="black"
          _hover={{ textDecoration: "underline" }}
          transition="all 0.2s"
          d="inline-block"
          w="full"
        >
          {title}
        </Link>
      </Heading>
      <Link href="!#" ml="2" color="bgText">
        <Text as="span" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
         
        </Text>
      </Link>
    </Box>
  );
};

export default LowerSectionHeader;
