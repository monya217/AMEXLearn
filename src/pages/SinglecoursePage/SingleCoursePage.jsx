import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Text,
  Grid,
  GridItem,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { MdInfo } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { RiClosedCaptioningFill } from 'react-icons/ri';
import { BiCheck } from 'react-icons/bi';
import StarRating from '../../components/StarRating'; // Assuming StarRating component is properly defined
import { useCoursesContext } from '../../context/course_context';
import { useCartContext } from '../../context/cart_context';
import LearnSidebar from '../../components/LearnSidebar'; // Import LearnSidebar component

const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id);
  }, [id, fetchSingleCourse]);

  if (!single_course) {
    return <div>Loading...</div>; // Add loading state
  }

  const {
    category,
    image,
    course_name,
    description,
    rating_count,
    rating_star,
    students,
    creator,
    updated_date,
    lang,
    actual_price,
    discounted_price,
    what_you_will_learn: learnItems,
    content,
  } = single_course;

  return (
    <Flex>
      <LearnSidebar /> {/* Include LearnSidebar component */}
      
      <Box flex="1" bg="var(--clr-dark)" color="var(--clr-white)">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          columnGap={{ md: '170px' }}
          maxW="1700px"
          mx="auto"
          py="60px"
          px="200px"
          bg="black" // Set background color for the upper banner
          alignItems="center" // Center content vertically in the banner
        >
          <GridItem>
            <Box>
              <Badge
                bg="blue.500" // Blue background color for category badge
                color="white" // White text color for category badge
                textTransform="uppercase"
                borderRadius="6px"
                px="8px"
                mb="8px"
              >
                {category}
              </Badge>
              <Text fontSize="38px" lineHeight="1.2" fontWeight="bold" mt="12px" color="white">
                {course_name}
              </Text>
              <Text fontSize="18px" mt="12px" color="white">
                {description}
              </Text>
              <Flex alignItems="center" mt="12px">
                <Text fontWeight="800" fontSize="16px" color="orange" mr="7px" pb="5px">
                  {rating_star}  {/* Assuming StarRating component is used here */}
                </Text>
                <Text fontSize="12.5px" opacity="0.8" mr="6px" color="white">
                  ({rating_count} Ratings)
                </Text>
                <Text fontSize="14px" opacity="0.8" mr="6px" color="white">
                  {students} Students
                </Text>
              </Flex>
              <Box mt="12px">
                <Text fontSize="14px" color="white">
                  Created by <Text as="span" fontWeight="bold" color="white">{creator}</Text>
                </Text>
                <Flex alignItems="center">
                  <Icon as={MdInfo} color="white" />
                  <Text fontSize="14px" ml="8px" mb="4px" textTransform="capitalize" color="white">
                    Last updated {updated_date}
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <Icon as={TbWorld} color="white" />
                  <Text fontSize="14px" ml="8px" color="white">
                    {lang}
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <Icon as={RiClosedCaptioningFill} color="white"/>
                  <Text fontSize="14px" ml="8px" color="white">
                    {lang} [Auto]
                  </Text>
                </Flex>
              </Box>
              <Flex alignItems="center" mt="12px">
                <Text fontSize="26px" fontWeight="800" color="white">
                  ₹{discounted_price}
                </Text>
                <Text fontSize="26px" fontWeight="600" ml="10px" color="#eceb98" textDecoration="line-through">
                  ₹{actual_price}
                </Text>
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign="center">
              <Image src={image} alt={course_name} maxW="80%" mx="auto" mt="20px" borderRadius="8px" boxShadow="lg" />
            </Box>
          </GridItem>
        </Grid>

        <Box className="course-full" bg="var(--clr-white)" color="var(--clr-dark)" py="40px" px="16px" mt="40px">
          <Box className="course-learn" mx="auto" maxW="992px" borderWidth="1px" borderColor="rgba(0, 0, 0, 0.2)" p="12px 28px 22px 28px">
            <Text className="course-sc-title" fontSize="22px" fontWeight="700" mb="12px">
              What you'll learn
            </Text>
            <Grid className="course-learn-list" templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap="20px">
              {learnItems &&
                learnItems.map((learnItem, idx) => (
                  <Box key={idx} display="flex" alignItems="center">
                    <Icon as={BiCheck} />
                    <Text className="fs-14 fw-5 opacity-09" ml="8px">
                      {learnItem}
                    </Text>
                  </Box>
                ))}
            </Grid>
          </Box>

          <Box className="course-content" mx="auto" maxW="992px" mt="30px" borderWidth="1px" borderColor="rgba(0, 0, 0, 0.2)" p="12px 28px 22px 28px">
            <Text className="course-sc-title" fontSize="22px" fontWeight="700" mb="12px">
              Course content
            </Text>
            <Grid className="course-content-list">
              {content &&
                content.map((contentItem, idx) => (
                  <Box key={idx} bg="#f7f9fa" p="12px 18px" borderWidth="1px" borderColor="rgba(0, 0, 0, 0.2)" mb="10px" fontWeight="800" fontSize="15px">
                    <Text>{contentItem}</Text>
                  </Box>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SingleCoursePage;
