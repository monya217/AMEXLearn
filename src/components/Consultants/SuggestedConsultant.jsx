import React, { useState, useEffect } from 'react';
import {
  Box, Flex, Image, Text, VStack, Button, HStack, Link, Icon,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, Input, Textarea, RadioGroup, Radio, Stack
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const consultants = [
  {
    name: "Matthew E. McNatt",
    avatar: "/Consultant1.png",
    experience: "5 Years",
    rating: "4.5",
    socialProfiles: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com"
    }
  },
  {
    name: "Jane Smith",
    avatar: "/Consultant2.jpg",
    experience: "3 Years",
    rating: "4.7",
    socialProfiles: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com"
    }
  },
  // Add more consultants as needed
];

const ConsultantCard = ({ name, avatar, experience, rating, socialProfiles, onBook }) => (
  <Box
  border="1px solid"
  borderColor="blue.300" // Set the border color to a bluish tone
  borderRadius="lg"
  p={2}
  mb={2}
  bg="blue.50" // Set the background color to a light bluish tone
  _hover={{ boxShadow: "md", bg: "blue.100" }} // Adjust hover effect to enhance the bluish tone
>

    <Flex direction="column" align="center" mb={2}>
      <Box
        boxSize="170px"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="lg"
        overflow="hidden"
        mb={2}
      >
        <Image src={avatar} alt={name} boxSize="full" objectFit="cover" />
      </Box>
      <VStack align="center" spacing={1}>
        <Text fontWeight="bold" fontSize="md">Consultant</Text>
        <Text fontWeight="bold" fontSize="md">{name}</Text>
        <Text fontSize="sm">Experience: {experience}</Text>
        <Text fontSize="sm">Rating: {rating}</Text>
        <Text fontSize="sm">Social Profiles:</Text>
        <HStack spacing={2}>
          <Link href={socialProfiles.linkedin} isExternal>
            <Icon as={FaLinkedin} w={4} h={4} color="blue.500" />
          </Link>
          <Link href={socialProfiles.twitter} isExternal>
            <Icon as={FaTwitter} w={4} h={4} color="blue.500" />
          </Link>
        </HStack>
      </VStack>
    </Flex>
    <Flex justify="center">
      <Button size="sm" colorScheme="blue" mt={2} onClick={onBook}>Book a Session</Button>
    </Flex>
  </Box>
);

const ConsultantCarousel = () => {
  const [currentConsultantIndex, setCurrentConsultantIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('amex');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const goToConsultant = (index) => {
    setCurrentConsultantIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConsultantIndex((prevIndex) => (prevIndex + 1) % consultants.length);
    }, 3000); // Change consultant every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    closeModal();
  };

  return (
    <Box>
      <Flex justify="center" align="center" mb={2}>
        <Text fontSize="md" fontWeight="bold" mb={2}>Suggested Consultants</Text>
      </Flex>
      <Flex justify="center" align="center" mb={2}>
        {consultants.map((consultant, index) => (
          <Box
            key={index}
            w="3"
            h="3"
            bg={index === currentConsultantIndex ? "blue.500" : "gray.200"}
            borderRadius="full"
            mr={1}
            cursor="pointer"
            onClick={() => goToConsultant(index)}
          />
        ))}
      </Flex>
      <ConsultantCard {...consultants[currentConsultantIndex]} onBook={openModal} />
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="md">Book a Session</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb={2}>
                <FormLabel fontSize="sm">Name</FormLabel>
                <Input placeholder="Your Name" size="sm" />
              </FormControl>
              <FormControl isRequired mb={2}>
                <FormLabel fontSize="sm">Email</FormLabel>
                <Input type="email" placeholder="Your Email" size="sm" />
              </FormControl>
              <FormControl isRequired mb={2}>
                <FormLabel fontSize="sm">Session Details</FormLabel>
                <Textarea placeholder="Describe the session details" size="sm" />
              </FormControl>
              <FormControl isReadOnly mb={2}>
                <FormLabel fontSize="sm">Price</FormLabel>
                <Input value="1500 rupees" isReadOnly size="sm" />
              </FormControl>
              <FormControl as="fieldset" mb={2}>
                <FormLabel as="legend" fontSize="sm">Payment Method</FormLabel>
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                  <Stack spacing={3} direction="row">
                    <Radio value="amex" size="sm">Amex Card</Radio>
                    <Radio value="upi" size="sm">UPI</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              {paymentMethod === 'amex' && (
                <FormControl isRequired mb={2}>
                  <FormLabel fontSize="sm">Card Number</FormLabel>
                  <Input placeholder="Card Number" size="sm" />
                </FormControl>
              )}
              {paymentMethod === 'upi' && (
                <FormControl isRequired mb={2}>
                  <FormLabel fontSize="sm">UPI ID</FormLabel>
                  <Input placeholder="UPI ID" size="sm" />
                </FormControl>
              )}
              <Button type="submit" colorScheme="blue" width="full" size="sm">Order</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConsultantCarousel;
