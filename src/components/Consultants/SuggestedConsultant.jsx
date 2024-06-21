import React, { useContext, useState } from 'react';
import {
  Box, Flex, Image, Text, VStack, Button, HStack, Link, Icon,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, Input, Textarea, RadioGroup, Radio, Stack, Select, useToast
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; 
import { CoinsContext } from '../../context/CoinsContext';

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
  {
    name: "Michael Johnson",
    avatar: "/consultant3.jpeg",
    experience: "6 Years",
    rating: "4.8",
    socialProfiles: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com"
    }
  },
  {
    name: "Emily Davis",
    avatar: "/consultant4.jpeg",
    experience: "2 Years",
    rating: "4.2",
    socialProfiles: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com"
    }
  },
  {
    name: "Jordan Reed",
    avatar: "/consultant5.jpeg",
    experience: "8 Years",
    rating: "4.4",
    socialProfiles: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com"
    }
  },
  {
    name: "Alexandra Mitchell",
    avatar: "/consultant6.jpeg",
    experience: "3 Years",
    rating: "4.7",
    socialProfiles: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://www.twitter.com"
    }
  },
];

const ConsultantCard = ({ name, avatar, experience, rating, socialProfiles, onBook }) => (
  <Box
    borderRadius="2xl"
    border={"1px solid"}
    borderColor="gray.200"
    bg={"white"}
    p={2}
    mb={2}
  >
    <Flex direction="column" align="center" mb={2}>
      <Box
        boxSize="170px"
        borderRadius="lg"
        overflow="hidden"
        mb={2}
        mt={4}
      >
        <Image src={avatar} alt={name} boxSize="full" objectFit="cover" />
      </Box>
      <VStack align="center" spacing={1}>
        <Text fontWeight="bold" fontSize="md">Consultant</Text>
        <Text fontWeight="bold" fontSize="md">{name}</Text>
        <Text fontSize="sm">Experience: {experience}</Text>
        <HStack spacing={1}>
          <Text fontSize="sm">Rating: {rating}</Text>
          <Icon as={FaStar} color="yellow.400" />
        </HStack>
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
      <Button size="sm" colorScheme="blue" mt={2} mb={4} onClick={onBook}>Book a Session</Button>
    </Flex>
  </Box>
);

const ConsultantCarousel = () => {
  const { deductCoins } = useContext(CoinsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('amex');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [redeemCoins, setRedeemCoins] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false); 
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [price, setPrice] = useState('₹2000'); 
  const toast = useToast();

  const activeDotStyle = {
    width: '10px',
    height: '10px',
    background: '#3182ce',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 4px', 
  };

  const inactiveDotStyle = {
    width: '8px',
    height: '8px',
    background: '#a0d2eb',
    borderRadius: '50%',
    display: 'inline-block',
    margin: '0 4px',
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleTimeChange = (event) => setSelectedTime(event.target.value);

  const PrevArrow = ({ onClick }) => (
    <Icon
      as={FaChevronLeft}
      boxSize={6}
      color="blue.500"
      cursor="pointer"
      onClick={onClick}
      position="absolute"
      left="-6"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
    />
  );

  const NextArrow = ({ onClick }) => (
    <Icon
      as={FaChevronRight}
      boxSize={6}
      color="blue.500"
      cursor="pointer"
      onClick={onClick}
      position="absolute"
      right="-6"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ position: 'relative', top: '0' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', padding: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={i === currentSlide ? activeDotStyle : inactiveDotStyle}
      ></div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handleRedeemCoins = () => {
    setRedeemCoins(true);
    const originalPrice = 2000;
    const discountedPrice = originalPrice * 0.8; 
    setPrice(`₹${discountedPrice}`);
    setDiscountApplied(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Deduct coins
    deductCoins(500);
    // Handle form submission
    closeModal();
    // Show session booked toast
    toast({
      title: "Session booked!",
      description: "Thank you for booking a session.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex justify="center" align="center" mb={2}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Available Consultants</Text>
      </Flex>
      <Slider {...settings}>
        {consultants.map((consultant, index) => (
          <ConsultantCard key={index} {...consultant} onBook={openModal} />
        ))}
      </Slider>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="md">Book a Session</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Flex direction="column">
                <HStack mb={2}>
                  <FormControl isRequired flex="1" mr={2}>
                    <FormLabel fontSize="sm">Email</FormLabel>
                    <Input type="email" placeholder="Your Email" size="sm" />
                  </FormControl>
                  <FormControl isRequired flex="1">
                    <FormLabel fontSize="sm">Phone Number</FormLabel>
                    <Input type="tel" placeholder="Your Phone Number" size="sm" />
                  </FormControl>
                </HStack>
                <FormControl isRequired mb={2}>
                  <FormLabel fontSize="sm">Session Details</FormLabel>
                  <Textarea placeholder="Describe the session details" size="sm" />
                </FormControl>
                <HStack mb={2}>
                  <FormControl isRequired flex="1" mr={2}>
                    <FormLabel fontSize="sm">Select Date</FormLabel>
                    <Input type="date" value={selectedDate} onChange={handleDateChange} size="sm" />
                  </FormControl>
                  <FormControl isRequired flex="1">
                    <FormLabel fontSize="sm">Select Time</FormLabel>
                    <Select placeholder="Select time" value={selectedTime} onChange={handleTimeChange} size="sm">
                      <option value="1pm">1 PM</option>
                      <option value="4pm">4 PM</option>
                      <option value="6pm">6 PM</option>
                    </Select>
                  </FormControl>
                </HStack>
                <FormControl isReadOnly mb={2}>
                  <FormLabel fontSize="sm">Price</FormLabel>
                  <Input value={price} isReadOnly size="sm" />
                </FormControl>
                <FormControl mb={2}>
                  <Button size="sm" colorScheme="green" onClick={handleRedeemCoins} disabled={redeemCoins}>
                    Redeem Coins
                   
                  </Button>
                  <Text fontSize="xs" color="gray.500" mt={1}>
                  {discountApplied ? null : "*Unlock a 20% discount by using your 500 coins."}
                    </Text>
                    {discountApplied && <Text fontSize="sm" color="green.500">20% discount applied! 🎉</Text>
                  }
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
                <Button mt={4} type="submit" colorScheme="blue" width="full" size="sm">Order</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ConsultantCarousel;
