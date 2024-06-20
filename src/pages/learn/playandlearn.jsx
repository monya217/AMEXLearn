import React from 'react';
import { Box, Container, Heading, Text, VStack, Flex } from '@chakra-ui/react';
import GameCard from "../../components/GameCard";
import LearnSidebar from "../../components/LearnSidebar";
import gameImg1 from '../../assets/images/gameimg_1.jpeg';
import gameImg2 from '../../assets/images/gameimg_2.jpeg';
import gameImg3 from '../../assets/images/gameimg_3.jpeg';
import gameImg4 from '../../assets/images/gameimg_4.jpeg';
import gameImg5 from '../../assets/images/gameimg_5.jpeg';
import gameImg6 from '../../assets/images/gameimg_6.jpeg';
import gameImg7 from '../../assets/images/gameimg_7.jpeg';
import gameImg8 from '../../assets/images/gameimg_8.jpeg';
import gameImg9 from '../../assets/images/gameimg_9.jpeg';
import gameImg10 from '../../assets/images/gameimg_10.jpeg';
import playhero from '../../assets/images/hero_img12.jpg';
import { FaCoins } from 'react-icons/fa';
import CoinsWidget from '../../components/Dashboard/CoinsWidget';

const PlayAndLearn = () => {
  return (
    <Flex width="100%">
      <Box mt = {10}>
      <LearnSidebar />
      </Box>
      <Flex direction="column" flex="1" overflowX="hidden">
        <Box
          bgImage={`url(${playhero})`}
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
                Play and Learn
              </Heading>
              <Text fontSize="16px">
                Enjoy games that make learning about financial literacy and money management fun, exploring diverse topics from foundational finance to strategic investments.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box py="40px">
          <Container maxW="container.xl">
            <VStack spacing="1" align="start">
              <Heading as="h2" size={{ base: 'md', md: 'lg' }} mt={8}>Play Your Way to Financial Wisdom</Heading>
              <Text fontSize={{ base: 'md', md: 'xl' }}>
                Engage in interactive games that boost financial literacy, earn coins{' '}
                <Box as="span" display="inline-flex" alignItems="center">
                  <FaCoins style={{ color: '#FFC107', marginRight: '5px', marginBottom: '3px' }} />
                </Box>
                {' '}to get free live sessions and enhance your knowledge
              </Text>
            </VStack>

            <Box mt="8" display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="20px">
              <GameCard
                gameName="Financia"
                playUrl="https://financia-roan.vercel.app/"
                imageUrl={gameImg2}
                rating="4.5"
                price="0"
              />
              <GameCard
                gameName="FinQuiz"
                playUrl="https://fin-quiz.vercel.app/"
                imageUrl={gameImg1}
                rating="4.2"
                price="0"
              />
              <GameCard
                gameName="StockSim"
                playUrl="https://stock-sim-flax.vercel.app/"
                imageUrl={gameImg5}
                rating="4.6"
                price="0"
              />
              <GameCard
                gameName="Money Master"
                playUrl="#"
                imageUrl={gameImg4}
                rating="4.8"
                price="499"
                isBuy
              />
              <GameCard
                gameName="Stock Trader Pro"
                playUrl="#"
                imageUrl={gameImg3}
                rating="4.5"
                price="299"
                isBuy
              />
              <GameCard
                gameName="Crypto Tycoon"
                playUrl="#"
                imageUrl={gameImg6}
                rating="4.3"
                price="399"
                isBuy
              />
              <GameCard
                gameName="Investment Guru"
                playUrl="#"
                imageUrl={gameImg7}
                rating="4.7"
                price="599"
                isBuy
              />
              <GameCard
                gameName="Financial Wizard"
                playUrl="#"
                imageUrl={gameImg8}
                rating="4.6"
                price="449"
                isBuy
              />
              <GameCard
                gameName="Economy Explorer"
                playUrl="#"
                imageUrl={gameImg9}
                rating="4.4"
                price="349"
                isBuy
              />
              <GameCard
                gameName="Money Mentor"
                playUrl="#"
                imageUrl={gameImg10}
                rating="4.9"
                price="699"
                isBuy
              />
            </Box>
          </Container>
        </Box>
      </Flex>
      <CoinsWidget />
    </Flex>
  );
};

export default PlayAndLearn;
