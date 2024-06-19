import { Flex, Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import LowerSectionContent from "../Content/LowerSectionContent";
import { randomArrayShuffle } from "../../utils/utils";
import LearnSidebar from "../LearnSidebar";
import bannerImg from '../../assets/images/hero_img11.jpeg';

const LowerSection = () => {
  const [newPodcasts, setNewPodcasts] = React.useState([]);
  const [mostPopular, setMostPopular] = React.useState([]);
  const [beginnerFriendly, setBeginnerFriendly] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "podcasts"));
      const podcasts = querySnapshot.docs.map((doc) => doc.data());
      console.log("Fetched podcasts:", podcasts);
      const shuffledPodcasts = randomArrayShuffle(podcasts);
      const chunkSize = 4;

      setNewPodcasts(shuffledPodcasts.slice(0, chunkSize));
      setMostPopular(shuffledPodcasts.slice(chunkSize, chunkSize * 2));
      setBeginnerFriendly(shuffledPodcasts.slice(chunkSize * 2, chunkSize * 3));
    };

    fetchData();
  }, []);

  return (
    <Flex width="100%">
      <LearnSidebar />
      <Flex direction="column" width="100%">
        <Box
          bgImage={`url(${bannerImg})`}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          height={['200px', '300px', '350px']} // Responsive heights
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
              width="90%" // Adjusted width for responsiveness
              padding={['10px', '15px', '20px']} // Responsive padding
              textAlign="center"
            >
              <Heading
                as="h1"
                fontSize={['20px', '28px', '32px']} // Responsive font sizes
                marginBottom="5px"
                whiteSpace="normal" // Allow text wrapping
              >
                Podcasts
              </Heading>
              <Text fontSize={['12px', '14px', '16px']}>
                Elevate your financial literacy with our insightful podcasts featuring industry experts and renowned thought leaders.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box fontFamily="body" color="black" fontSize="1.6rem" lineHeight="1.6">
          <Container maxW="1700px" p={{ base: '1.8rem', md: '3.4rem', xl: '1rem' }}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box flex="1" width="100%" py="40px">
                <Container maxW="container.xl">
                  <VStack spacing="1" align="start">
                    <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={5}>Tune In for Financial Mastery</Heading>
                    <Text fontSize={{ base: 'md', md: 'xl' }}>
                      Dive into our captivating and insightful financial literacy podcasts, designed to educate and empower you with the knowledge needed to make informed financial decisions.
                    </Text>
                  </VStack>

                  <Box mt="8">
                    <Heading as="h3" size="1.4rem" mb="4">New Podcasts</Heading>
                    <LowerSectionContent songs={newPodcasts} />
                  </Box>

                  <Box mt="8">
                    <Heading as="h3" size="1.4rem" mb="4">Most Popular</Heading>
                    <LowerSectionContent songs={mostPopular} />
                  </Box>

                  <Box mt="8">
                    <Heading as="h3" size="1.4rem" mb="4">Beginner Friendly</Heading>
                    <LowerSectionContent songs={beginnerFriendly} />
                  </Box>
                </Container>
              </Box>
            </Box>
          </Container>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LowerSection;
