// src/pages/LiveSession.jsx
import React from 'react';
import { Box, Container, Heading, VStack, Text } from '@chakra-ui/react';
import LearnSidebar from '../../components/LearnSidebar';
import LiveSessionCard from '../../components/LiveSessionCard';
import ongoingImage1 from '../../assets/images/per_2.jpeg';
import ongoingImage2 from '../../assets/images/per_3.jpeg';
import ongoingImage3 from '../../assets/images/risk_4.jpeg';
import ongoingImage4 from '../../assets/images/risk_3.jpeg';
import pastImage1 from '../../assets/images/gameimg_3.jpeg';
import pastImage2 from '../../assets/images/gameimg_10.jpeg';
import pastImage3 from '../../assets/images/gameimg_6.jpeg';
import pastImage4 from '../../assets/images/gameimg_5.jpeg';
import upcomingImage1 from '../../assets/images/risk_2.jpeg';
import upcomingImage2 from '../../assets/images/risk_3.jpeg';
import upcomingImage3 from '../../assets/images/risk_4.jpeg';
import upcomingImage4 from '../../assets/images/risk_5.jpeg';

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
    {
      imageUrl: ongoingImage3,
      title: 'Introduction to Stock Market',
      person: 'Alice Johnson',
      date: '2023-06-14',
      time: '12:00 PM',
      isLive: true,
      isPast: false,
      isUpcoming: false,
    },
    {
      imageUrl: ongoingImage4,
      title: 'Cryptocurrency Fundamentals',
      person: 'Bob Lee',
      date: '2023-06-14',
      time: '1:00 PM',
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
  ];

  return (
    <Box fontFamily="body" color="black" fontSize="1.6rem" lineHeight="1.6">
      <Container maxW="1700px" p={{ base: '1.8rem', md: '3.4rem', xl: '1rem' }}>
        <Box display="flex">
          <LearnSidebar />
          <Box flex="1" ml={4}>
            <Box py="40px">
              <Container maxW="container.xl">
                <VStack spacing="1" align="start">
        
                  <Text fontSize="1.8rem">
                  Explore dynamic sessions that elevate your financial literacy and unlock valuable financial insights
                    <Box as="span" display="inline-flex" alignItems="center">
                      {/* Ensure GiCoins component is included here */}
                    </Box>
                  </Text>
                </VStack>

                {/* Displaying sessions */}
                <Box mt="8">
                  <Heading as="h3" size="1.4rem" mb="4">Ongoing Sessions</Heading>
                  <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="20px">
                    {sessions.filter(session => session.isLive).slice(0, 4).map(session => (
                      <LiveSessionCard key={session.title} {...session} />
                    ))}
                  </Box>
                </Box>

                <Box mt="8">
                  <Heading as="h3" size="1.4rem" mb="4">Past Sessions</Heading>
                  <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="20px">
                    {sessions.filter(session => session.isPast).slice(0, 4).map(session => (
                      <LiveSessionCard key={session.title} {...session} />
                    ))}
                  </Box>
                </Box>

                <Box mt="8">
                  <Heading as="h3" size="1.4rem" mb="4">Upcoming Sessions</Heading>
                  <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="20px">
                    {sessions.filter(session => session.isUpcoming).slice(0, 4).map(session => (
                      <LiveSessionCard key={session.title} {...session} />
                    ))}
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LiveSession;

