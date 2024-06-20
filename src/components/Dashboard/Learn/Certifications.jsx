import { Box, Heading, Flex, Button, Text,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, useDisclosure } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import cfi_certi from "../../../assets/images/cfi_certi.png"
import rec_certi from "../../../assets/images/rec_certi.png"
const Certifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCertificate, setSelectedCertificate] = useState("");

  const handleShowCredential = (certificateImage) => {
    setSelectedCertificate(certificateImage);
    onOpen();
  };
  return (
    <Box mt={10}>
      <Heading size="md" mb={5}>
        Certifications
      </Heading>
      <Flex wrap="wrap" gap={6} justifyContent="space-between">
        <Box p={5} shadow="md" borderWidth="1px" width={{ base: "100%", md: "48%" }}>
          <Heading fontSize="xl">Chartered Financial Innovator (CFI)</Heading>
          <Text mb={4}>AMEXLearn</Text>
          <Text mb={2}>Issued June 2024</Text>
          <Button
            colorScheme="blue"
            variant="outline"
            borderRadius="full"
            rightIcon={<FaExternalLinkAlt />}
            onClick={() => handleShowCredential(cfi_certi)}
          >
            Show credential
          </Button>
          <Text mt={4}>
            Skills: Financial planning, Investment management, Tax planning, Retirement planning, Estate planning
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" width={{ base: "100%", md: "48%" }}>
          <Heading fontSize="xl">Registered Economic Consultant (REC)</Heading>
          <Text mb={4}>AMEXLearn</Text>
          <Text mb={2}>Issued June 2024</Text>
          <Button
            colorScheme="blue"
            variant="outline"
            borderRadius="full"
            rightIcon={<FaExternalLinkAlt />}
            onClick={() => handleShowCredential(rec_certi)}
          >
            Show credential
          </Button>
          <Text mt={4}>
            Skills: Investment analysis, Portfolio management, Financial modeling, Risk management, Ethics and professional standards
          </Text>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Certificate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedCertificate} alt="Certificate" width="100%" />
          </ModalBody>
          
          <ModalFooter>
            <Button as="a" href={selectedCertificate} download backgroundColor="white"
              color="blue.500"
              borderColor="blue.500"
              variant="outline" mr={3}>
              Download
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
  );
};

export default Certifications;
