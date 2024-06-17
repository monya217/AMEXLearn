import React from 'react';
import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { GiCoins } from 'react-icons/gi'; // Import the coin icon
import GameCard from "../../components/GameCard"; // Import the GameCard component
import LearnSidebar from "../../components/LearnSidebar"; // Import the sidebar component
import playhero from '../../assets/images/playheader.jpeg';
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
import playhero2 from '../../assets/images/hero_img6.jpg';
import { FaCoins } from 'react-icons/fa';


const PlayAndLearn = () => {
  return (
    <Box fontFamily="body" color="black" fontSize="1.6rem" lineHeight="1.6">
      <Container maxW="1700px" p={{ base: '1.8rem', md: '3.4rem', xl: '1rem' }}>
        <Box display="flex">
          <LearnSidebar /> {/* Include the sidebar component */}
          <Box flex="1" ml={4}> {/* Adjust margin-left as per the sidebar width */}
            {/* Replace Hero with Image */}
            <Image 
              src={playhero2} 
              alt="Play and Learn" 
              width="100%" 
              height={{ base: '200px', md: '300px' }} 
              objectFit="cover" 
            />

            {/* Course List-like Section */}
            <Box py="40px">
              <Container maxW="container.xl">
                <VStack spacing="1" align="start">
                  <Heading as="h2" size="1rem">A Wealth of Interactive Games</Heading>
                  <Text fontSize="1.8rem">
                    Engage in interactive games that boost financial literacy, earn coins{' '}
                    <Box as="span" display="inline-flex" alignItems="center">
                    <FaCoins style={{ color: 'yellow', marginRight: '5px', marginBottom: '3px' }} />

                    </Box>
                    {' '}to get free live sessions and enhance your knowledge
                  </Text>
                </VStack>

                <Box mt="8" display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="20px" maxW="1200px">
                  {/* Game Cards */}
                  <GameCard
                    gameName="Financia"
                    playUrl="http://financia-ddavz562h-advikas-projects-b71feecf.vercel.app/"
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
                  {/* Add more GameCard components as needed */}
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PlayAndLearn;


