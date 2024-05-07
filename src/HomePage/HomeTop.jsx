import {
  Container,
  Heading,
  Button,
  Text,
  Flex,
  Image,
  Box,
 
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function HomeTop() {
  return (
    <>
      <Container mt={12} maxW="3xl">
        <Heading as="h1" size={"2xl"} fontFamily="Means Web, Georgia, Times, Times New Roman, serif;">
          Turn Emails into Revenue
        </Heading>
        <Text fontSize="2xl" mt={6}>
          Win new customers with the #1 email marketing and automations brand*
          that recommends ways to get more opens, clicks, and sales.
        </Text>
        <NavLink>
        <Button
          borderRadius={"full"}
          size="lg"
          bg="#ffe01b"
          mt={8}
          variant="outline"
          colorScheme="black"
        >
          Sign Up
        </Button>
        </NavLink>
      </Container>

      <Flex mt={12}>
        <VStack bg={"#dfdcd4"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Convert With Automotion
          </Heading>
        </VStack>
        <Box bg={"#dbd9da"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Optimize with AI & Analytics
          </Heading>
        </Box>
        <Box bg={"#e4d6ca"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Target With Segmentation
          </Heading>
        </Box>
        <Box bg={"#c7b5a7"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Sync With Integration
          </Heading>
        </Box>
      </Flex>

      <Flex>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/5EODYdgDf1houB82RfR8e0/d3a56636ba2d48943ab54513277458bc/Homepage-Feature-Card-Automations-Desktop-INT__1_.png?w=630&fm=avif&q=60"
          width={"25%"}
          alt="p1"
        />
        <Image
          src="https://eep.io/images/yzco4xsimv0y/3JSoRinRB2VTmBiD7NyEUg/f48b012abacf15bc323135c3d9e3cbe2/Homepage-Feature-Card-AI-Desktop.png?w=630&fm=avif&q=60"
          width={"25%"}
          alt="p1"
        />
        <Image
          src="https://eep.io/images/yzco4xsimv0y/6QVNtP8As7OHsx5mivPn8f/c802814a27e36ee4a016556501e6ec85/Homepage-Feature-Card-Segmentation-Desktop.png?w=630&fm=avif&q=60"
          width={"25%"}
          alt="p1"
        />
        <Image
          src="https://eep.io/images/yzco4xsimv0y/6JxWAec8e3X3OMFmX9dVvd/9f34fab9dcbe5d69c4faf2c0d1b9b5ae/Homepage-Feature-Card-Analytics-Reporting-Desktop.png?w=630&fm=avif&q=60"
          width={"25%"}
          alt="p1"
        />
      </Flex>
      <Flex>
        <Box bg={"rgb(217,149,54)"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
        <Box bg={"rgb(231,183,95)"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
        <Box bg={"rgb(253,248,234)"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
        <Box bg={"#fff"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
      </Flex>

     
    </>
  );
}

export default HomeTop;
