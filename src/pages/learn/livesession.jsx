import React from 'react';
import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import LearnSidebar from '../../components/LearnSidebar';
import LiveSessionCard from '../../components/LiveSessionCard';
import Slider from 'react-slick';
import ongoingImage1 from '../../assets/images/per_2.jpeg';
import ongoingImage2 from '../../assets/images/per_3.jpeg';
import ongoingImage3 from '../../assets/images/gameimg_4.jpeg';
import ongoingImage4 from '../../assets/images/per_5.jpeg';
import pastImage1 from '../../assets/images/gameimg_3.jpeg';
import pastImage2 from '../../assets/images/gameimg_10.jpeg';
import pastImage3 from '../../assets/images/gameimg_6.jpeg';
import pastImage4 from '../../assets/images/gameimg_5.jpeg';
import upcomingImage1 from '../../assets/images/risk_2.jpeg';
import upcomingImage2 from '../../assets/images/risk_3.jpeg';
import upcomingImage3 from '../../assets/images/risk_4.jpeg';
import upcomingImage4 from '../../assets/images/risk_5.jpeg';
import bannerImg from '../../assets/images/hero_img8.jpeg';

const LiveSession = () => {
  const sessions = [
    // Ongoing Sessions
    {
      imageUrl: ongoingImage1,
      title: 'Investment Strategies Masterclass',
      person: 'John Doe',
      date: '2023-06-14',
      time: '10:00 AM',
      isLive: true,
      isPast: false,
      isUpcoming: false,
    },
    {
      imageUrl: ongoingImage2,
      title: 'Personal Finance Basics',
      person: 'Jane Smith',
      date: '2023-06-14',
      time: '11:00 AM',
      isLive: true,
      isPast: false,
      isUpcoming: false,
    },
    // Past Sessions
    {
      imageUrl: pastImage1,
      title: 'Understanding Mutual Funds',
      person: 'Charlie Brown',
      date: '2023-06-10',
      time: '45 mins',
      isLive: false,
      isPast: true,
      isUpcoming: false,
    },
    {
      imageUrl: pastImage2,
      title: 'Retirement Planning Workshop',
      person: 'Daisy White',
      date: '2023-06-09',
      time: '30 mins',
      isLive: false,
      isPast: true,
      isUpcoming: false,
    },
    {
      imageUrl: pastImage3,
      title: 'Real Estate Investment Seminar',
      person: 'Evan Green',
      date: '2023-06-08',
      time: '50 mins',
      isLive: false,
      isPast: true,
      isUpcoming: false,
    },
    {
      imageUrl: pastImage4,
      title: 'Credit Score Management',
      person: 'Fiona Black',
      date: '2023-06-07',
      time: '35 mins',
      isLive: false,
      isPast: true,
      isUpcoming: false,
    },
    {
      imageUrl: ongoingImage3,
      title: 'Introduction to Stock Market',
      person: 'Alice Johnson',
      date: '2023-06-07',
      time: '35 mins',
      isLive: false,
      isPast: true,
      isUpcoming: false,
    },
    {
      imageUrl: ongoingImage4,
      title: 'Introduction to Financial Management',
      person: 'Alice Johnson',
      date: '2023-06-07',
      time: '35 mins',
      isLive: false,
      isPast: true,
      isUpcoming: false,
    },
    // Upcoming Sessions
    {
      imageUrl: upcomingImage1,
      title: 'Investing in ETFs',
      person: 'George Grey',
      date: '2023-06-20',
      time: '2:00 PM',
      isLive: false,
      isPast: false,
      isUpcoming: true,
    },
    {
      imageUrl: upcomingImage2,
      title: 'Understanding Cryptocurrency',
      person: 'Hannah Yellow',
      date: '2023-06-22',
      time: '3:00 PM',
      isLive: false,
      isPast: false,
      isUpcoming: true,
    },
    {
      imageUrl: upcomingImage3,
      title: 'Financial Planning for Beginners',
      person: 'Ian Pink',
      date: '2023-06-24',
      time: '4:00 PM',
      isLive: false,
      isPast: false,
      isUpcoming: true,
    },
    {
      imageUrl: upcomingImage4,
      title: 'Introduction to Stock Trading',
      person: 'Jenna Purple',
      date: '2023-06-26',
      time: '5:00 PM',
      isLive: false,
      isPast: false,
      isUpcoming: true,
    },
    {
      imageUrl: ongoingImage1,
      title: 'Understanding Mutual Funds',
      person: 'Charlie Brown',
      date: '2023-06-10',
      time: '5:00 PM',
      isLive: false,
      isPast: false,
      isUpcoming: true,
    },
    {
      imageUrl: ongoingImage2,
      title: 'Retirement Planning Workshop',
      person: 'Daisy White',
      date: '2023-06-26',
      time: '5:00 PM',
      isLive: false,
      isPast: false,
      isUpcoming: true,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderSessions = (filteredSessions) => {
    if (filteredSessions.length > 4) {
      return (
        <Slider {...sliderSettings}>
          {filteredSessions.map(session => (
            <Box key={session.title} px={2}>
              <LiveSessionCard {...session} />
            </Box>
          ))}
        </Slider>
      );
    } else {
      return (
        <Flex wrap="wrap">
          {filteredSessions.map(session => (
            <Box key={session.title} width={{ base: '100%', sm: '50%', md: '33.33%', lg: '25%' }} p={2}>
              <LiveSessionCard {...session} />
            </Box>
          ))}
        </Flex>
      );
    }
  };

  return (
    <Flex width="100%">
      <LearnSidebar />
      <Flex direction="column" flex="1" overflowX="hidden">
        <Box
          bgImage={`url(${bannerImg})`}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          height="350px"
          width="100%"
          position="relative"
          top={10}
        >
          <Flex height="100%" alignItems="center" justifyContent="center">
            <Box
              bg="white"
              color="black"
              fontFamily="'Gafata', sans-serif"
              maxWidth="550px"
              width="100%"
              padding="20px"
              textAlign="center"
            >
              <Heading as="h1" fontSize="32px" marginBottom="5px" whiteSpace="nowrap">
                Live Sessions
              </Heading>
              <Text fontSize="16px">
                Enhance your financial acumen with expert-led sessions featuring renowned speakers in the finance world.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box fontFamily="body" color="black" fontSize="1.6rem" lineHeight="1.6">
          <Container maxW="container.xl" p={{ base: '1.8rem', md: '3.4rem', xl: '1rem' }}>
            <Box py="40px">
              <VStack spacing="1" align="start">
                <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={5}>Financial Insight and Expertise</Heading>
                <Text fontSize={{ base: 'md', md: 'xl' }}>
                  Experience engaging sessions with top financial experts to boost your financial literacy and money management prowess.
                </Text>
              </VStack>
              <Box mt="8">
                <Heading as="h3" size="lg" mb="4">Ongoing Sessions</Heading>
                {renderSessions(sessions.filter(session => session.isLive))}
              </Box>
              <Box mt="8">
                <Heading as="h3" size="lg" mb="4">Past Sessions</Heading>
                {renderSessions(sessions.filter(session => session.isPast))}
              </Box>
              <Box mt="8">
                <Heading as="h3" size="lg" mb="4">Upcoming Sessions</Heading>
                {renderSessions(sessions.filter(session => session.isUpcoming))}
              </Box>
            </Box>
          </Container>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LiveSession;
