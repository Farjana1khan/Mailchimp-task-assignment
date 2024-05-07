import {
  Box,
  Heading,
  Grid,
  GridItem,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

function HomeEnd() {
  return (
    <>
      <Box>
        <Heading fontSize={"5xl"} m={"auto"} mt={100} w={"60%"}>
          Bring in more data, drive more growth with our integrations
        </Heading>
        <Grid
          m={"auto"}
          mt={50}
          w={"80%"}
          templateColumns="repeat(3, 1fr)"
          gap={10}
        >
          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Canava
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Create compelling visuals for your marketing.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Mailchimp for Salesforce
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Sync your Mailchimp subscribers and Salesforcet leads across
                  platforms.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Instagram
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Promote and share your Instagram posts in email campaigns.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Shopify
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Sync Shopify customersS, products, and purchase data to
                  Mailchimp.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/00c7967e994ec1ff1a02b82aa6d61680/Google_Analytics.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Google Analytics
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Unlock powerful insights with campaign, website, or landing
                  page data.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Zapier
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Automatically pass data between web services without a single
                  line of code.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  QuickBooks Online
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Bring together your marketing tools and invoice data.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Squarespace Commerce
                </Heading>
                <Text mt={2} w={"80%"} fontSize={"md"}>
                  Market your ecommerce business and drive sales.
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem w="100%">
            <Flex gap={5}>
              <Image
                w={"30%"}
                src="https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=80"
                alt="p3"
              />
              <Box textAlign={"left"}>
                <Heading mt={3} fontSize={"lg"}>
                  Woo Commerce
                </Heading>
                <Text mt={4} w={"80%"} fontSize={"md"}>
                  Power your ecommerce store with smart marketing features.
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Button
        borderRadius={"full"}
        size="lg"
        bg="#ffe01b"
        mt={8}
        variant="outline"
        colorScheme="teal"
      >
        View All 300 Integrations
      </Button>
      <Box bg={"#f6f6f4"} textAlign={'left'} mt="150" p={50} >
        <Text fontSize={"sm"}>*Disclaimers</Text>
      



        <Text fontSize={"sm"}>  #1 AI-powered email marketing platform: Based on December 2023 publicly available data on the number of customers of competitors that also advertise using AI to enhance their email marketing and automation products and services.</Text>
        <Text fontSize={"sm"}>SMS Marketing: SMS is available as an add-on to US paid plans only and SMS credits are added to your account after purchase. Application and agreement to terms is required before purchasing credits. Credits are issued monthly and unused credits expire and do not roll over. Pricing varies. MMS is only available on Premium and Standard plans. See terms for details.
Intuit Assist: Intuit Assist functionality (beta) is available to certain users with Premium, Standard and Legacy plans in select countries in English only. Access to Intuit Assist is available at no additional cost at this time. Pricing, terms, conditions, special features and service options are subject to change without notice. Availability of features and functionality varies by plan type. Features may be broadly available soon but represents no obligation and should not be relied on in making a purchasing decision. For details, please view Mailchimp’s various plans and pricing.</Text>
        <Text fontSize={"sm"} >#1 email marketing and automation platform: Mailchimp is the #1 email marketing and automation platform based on December 2023 publicly available data on competitors' number of customers.
</Text>
 <Text fontSize={"sm"} >Personalized onboarding: Onboarding services differ per plan and are available for new or upgraded users with a Standard or Premium plan for the first 90 days after account creation or upgrade. Onboarding services are currently offered in English, Spanish and Portuguese for Premium plans, and in English for Standard plans.
</Text>
 <Text fontSize={"sm"} >39X ROI: All e-comm revenue attributable to paid plan users' Mailchimp campaigns for Aug '21 - July '22 period.
</Text>
 <Text fontSize={"sm"} >
$1.7K per campaign: Based on e-commerce users subscribed to a paid plan, with campaigns for connected stores that generated revenue between January and November 2022.
</Text>
      </Box>
    </>
  );
}

export default HomeEnd;
