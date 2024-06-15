import { Box, Flex, Icon, Tbody, Td, Th, Thead, Tr, Table, Button } from "@chakra-ui/react";
import { FaChartLine, FaCoins, FaFire, FaGamepad, FaQuestionCircle } from "react-icons/fa";
import { Text } from "recharts";


const getIconByGameName = (name) => {
    switch (name) {
      case 'Financia':
        return FaGamepad;
      case 'FinQuiz':
        return FaQuestionCircle;
      case 'StockSim':
        return FaChartLine;
      default:
        return FaGamepad;
    }
  };

const GameList = () => {

    const games = [
        { name: 'Financia', lastPlayed: '2024-06-10', coinsGained: 100, streak: 5 },
        { name: 'FinQuiz', lastPlayed: '2024-06-11', coinsGained: 150, streak: 10 },
        { name: 'StockSim', lastPlayed: '2024-06-12', coinsGained: 200, streak: 15 },
      ];

    return <Table variant="simple">
        <Thead>
            <Tr>
            <Th>Game</Th>
            <Th>Last Played On</Th>
            <Th>Coins Gained</Th>
            <Th>Streak</Th>
            <Th></Th>
            </Tr>
        </Thead>
        <Tbody>
            {games.map((game, index) => (
            <Tr key={index}>
                <Td>
                <Flex alignItems="center">
                    <Icon as={getIconByGameName(game.name)} color="blue.400" boxSize="30px" mr={7} />
                    <Box>
                    <Text fontWeight="bold">{game.name}</Text>
                    </Box>
                </Flex>
                </Td>
                <Td>{game.lastPlayed}</Td>
                <Td>
                <Flex alignItems="center">
                    <Icon as={FaCoins} color="yellow.400" mr={1} />
                    {game.coinsGained}
                </Flex>
                </Td>
                <Td>
                <Flex alignItems="center">
                    <Icon as={FaFire} color="orange.400" mr={1} />
                    {game.streak}
                </Flex>
                </Td>
                <Td>
                <Button colorScheme="blue" size="sm">Play</Button>
                </Td>
            </Tr>
            ))}
        </Tbody>
        </Table>
}

export default GameList
