import { PageLayout } from '../../GetInTouchLayouts/PageLayout/PageLayout';
import Chatbot from '../../components/Chatbot';
import SuggestedConsultants from '../../components/Consultants/SuggestedConsultant';
import { FeedPosts } from '../../components/FeedPosts/FeedPosts';
import Trending from '../../components/GetInTouch/Trending';
import './getintouch.css';
import { Box, Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

const GetInTouch = () => {
  const textAlign = useBreakpointValue({ base: "center", lg: "left" });

  return (
    <PageLayout>
      <Chatbot />
      <Container maxW={"container.lg"} py={10} mt={12}>
        <Flex direction="column" align={textAlign === "center" ? "center" : "flex-start"}>
          <Text fontSize="4xl" fontWeight="bold" mb={4} textAlign={textAlign}>
            Stay Informed and Share Your Experiences
          </Text>
          <Text fontSize="lg" color="gray.600" textAlign={textAlign}>
            Explore, engage, and discover a world of knowledge and inspiration in our feed.
          </Text>
        </Flex>
        <Flex gap={20} >
          <Box >
            <FeedPosts />
          </Box>
        </Flex>
        
      </Container>
    </PageLayout>
  );
}

export default GetInTouch;
