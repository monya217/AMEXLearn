import React, { useState } from 'react';
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
    borderColor="gray.200"
    borderRadius="lg"
    p={4}
    mb={4}
    _hover={{ boxShadow: "md" }}
  >
    <Flex direction="column" align="center" mb={4}>
      <Box
        boxSize="200px"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="lg"
        overflow="hidden"
        mb={4}
      >
        <Image src={avatar} alt={name} boxSize="full" objectFit="cover" />
      </Box>
      <VStack align="center" spacing={1}>
        <Text fontWeight="bold" fontSize="xl">Consultant</Text>
        <Text fontWeight="bold" fontSize="lg">{name}</Text>
        <Text fontSize="md">Experience: {experience}</Text>
        <Text fontSize="md">Rating: {rating}</Text>
        <Text fontSize="md">Social Profiles:</Text>
        <HStack spacing={4}>
          <Link href={socialProfiles.linkedin} isExternal>
            <Icon as={FaLinkedin} w={6} h={6} color="blue.500" />
          </Link>
          <Link href={socialProfiles.twitter} isExternal>
            <Icon as={FaTwitter} w={6} h={6} color="blue.500" />
          </Link>
        </HStack>
      </VStack>
    </Flex>
    <Flex justify="center">
      <Button size="md" colorScheme="blue" mt={4} onClick={onBook}>Book a Session</Button>
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    closeModal();
  };

  return (
    <Box>
      <Flex justify="center" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>Suggested Consultants</Text>
      </Flex>
      <Flex justify="center" align="center" mb={4}>
        {consultants.map((consultant, index) => (
          <Box
            key={index}
            w="5"
            h="5"
            bg={index === currentConsultantIndex ? "blue.500" : "gray.200"}
            borderRadius="full"
            mr={2}
            cursor="pointer"
            onClick={() => goToConsultant(index)}
          />
        ))}
      </Flex>
      <ConsultantCard {...consultants[currentConsultantIndex]} onBook={openModal} />
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book a Session</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel>Session Details</FormLabel>
                <Textarea placeholder="Describe the session details" />
              </FormControl>
              <FormControl isReadOnly mb={4}>
                <FormLabel>Price</FormLabel>
                <Input value="1500 rupees" isReadOnly />
              </FormControl>
              <FormControl as="fieldset" mb={4}>
                <FormLabel as="legend">Payment Method</FormLabel>
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                  <Stack spacing={5} direction="row">
                    <Radio value="amex">Amex Card</Radio>
                    <Radio value="upi">UPI</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              {paymentMethod === 'amex' && (
                <FormControl isRequired mb={4}>
                  <FormLabel>Card Number</FormLabel>
                  <Input placeholder="Card Number" />
                </FormControl>
              )}
              {paymentMethod === 'upi' && (
                <FormControl isRequired mb={4}>
                  <FormLabel>UPI ID</FormLabel>
                  <Input placeholder="UPI ID" />
                </FormControl>
              )}
              <Button type="submit" colorScheme="blue" width="full">Order</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConsultantCarousel;
