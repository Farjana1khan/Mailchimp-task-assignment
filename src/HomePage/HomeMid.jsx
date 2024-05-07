import {
  Flex,
  Heading,
  Box,
  Text,
  List,
  ListIcon,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Image,
  VStack,
  Select,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";

function HomeMid() {
  return (
    <>
    <Text size="2xl" mt={20}>Limited Time Offer</Text>
      <Heading as="h1" size="2xl" my={10}>
      Save 50% for 12 months
      </Heading>

      <Flex justifyContent={"center"} my={20}>
      <Text w={"15%"} backgroundColor={"#f3f3f3"} mt="0" py={"2"} placeholder="How many contacts do you have?" alignItems={"center"}>How many contacts do you have?</Text>
      <Select w={"10%"} m="0" placeholder="500" alignItems={"center"}>
            <option>500</option>
           
            <option>1500</option>
            <option>25000</option>
            <option>5000</option>
            <option>10000</option>
            <option>15000</option>
          </Select>
      </Flex>
      
      <Flex  w={"90%"} m="auto">
        <Box
          w={"25%"}
          h="auto"
          p={5}
          border="1px"
          borderColor="blue.800"
          textAlign={"left"}
        >
          <Heading fontFamily={"means"}>Premium</Heading>
          <Text>
          Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.
          </Text>
          <Text mt={4}>Starts at</Text>
          <Heading fontWeight={"normal"} textColor={"GrayText"} > ₹ 23,000</Heading>
          <Text fontSize={"35px"} fontWeight={"bold"}>₹
11,500</Text>
          <Text>/month for 12 months*</Text>

          <List mt={5} spacing={3}>
            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Phone and Priority Support</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Phone & Priority Support</PopoverHeader>
                  <PopoverBody>
                    Priority email and chat support 24/7. Phone support
                    available during business hours.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500"> Max Contacts:Unlimited</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Max Contacts:Unlimited</PopoverHeader>
                  <PopoverBody>
                    The maximum number of email addresses you can store in
                    Mailchimp.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">
                    {" "}
                    Custom-Coded and Pre-built Email Templates
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    Custom-Coded and Pre-built Email Templates
                  </PopoverHeader>
                  <PopoverBody>
                    Custom-Coded Templates Take control of your email design by
                    using your own custom-coded HTML templates.
                  </PopoverBody>
                  <PopoverBody>
                    Pre-Built Email Templates Enhance your emails with
                    customizeable templates for any occassion. Additional
                    Marketplace templates available as add-ons for Standard and
                    Premium plans."
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Multivariate & A/B Testing</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Multivariate & A/B Testing</PopoverHeader>
                  <PopoverBody>
                    Multivariate Testing Test up to eight campaign variations to
                    see what changes make the biggest impact on engagement and
                    conversion.
                  </PopoverBody>
                  <PopoverBody>
                    A/B Testing Test different subject lines, design, content,
                    and send-times so you can learn what works best for your
                    audience
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">
                    Enhanced Automated Customer Journeys
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    Enhanced Automated Customer Journeys
                  </PopoverHeader>
                  <PopoverBody>
                    Essentials: Customer Journey Builder Build automated
                    workflows to send relevant messages based on how your
                    customers interact with your brand.
                  </PopoverBody>
                  <PopoverBody>
                    Standard & Premium: Customer Journey Builder Branching
                    Points Create and automate unique, adaptable journeys for
                    any customer scenario with full functionality of our
                    Customer Journey Builder.{" "}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Predictive Segmentation</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Predictive Segmentation</PopoverHeader>
                  <PopoverBody>
                    Target the right customers to win more repeat-business with
                    our predictive analytics tools that can estimate future the
                    buying behavior of your customers.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Dedicated Onboarding Specialist</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Dedicated Onboarding Specialist</PopoverHeader>
                  <PopoverBody>
                    Get a discovery consultation, personalized action plan based
                    on your business goals, and 30 days of on-demand access to
                    our onboarding team.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />
          </List>
          <NavLink>
        <Button
          borderRadius={"full"}
          size="sm"
          justifyItems={"center"}
          width={"100%"}
          textAlign={"center"}
          bg="#ffe01b"
          mt={8}
          variant="outline"
          colorScheme="black"
        >
         Buy Now
        </Button>
        </NavLink>
        </Box>

        <Box
          w={"25%"}
          h="auto"
          p={5}
          border="1px"
          borderColor="blue.800"
          textAlign={"left"}
        >
          <Heading  fontFamily={"means"}>Standard</Heading>
          <Text>
            Sell even more with personalization, optimization tools, and
            enhanced automations.
          </Text>
          <Text mt={4}>Starts at</Text>
          <Heading  fontWeight={"normal"} textColor={"GrayText"} >₹ 1,150</Heading>
          <Text fontSize={"35px"} fontWeight={"bold"}>₹
          ₹
575</Text>
          <Text>/month for 12 months*</Text>

          <List mt={5} spacing={3}>
            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">24/7 Email & Chat Support</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>24/7 Email & Chat Support</PopoverHeader>
                  <PopoverBody>
                    Priority email and chat support 24/7. Phone support
                    available during business hours.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500"> Max Contacts: 100,000</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Max Contacts: 100,000</PopoverHeader>
                  <PopoverBody>
                    The maximum number of email addresses you can store in
                    Mailchimp.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">
                    {" "}
                    Custom-Coded and Pre-built Email Templates
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    Custom-Coded and Pre-built Email Templates
                  </PopoverHeader>
                  <PopoverBody>
                    Custom-Coded Templates Take control of your email design by
                    using your own custom-coded HTML templates.
                  </PopoverBody>
                  <PopoverBody>
                    Pre-Built Email Templates Enhance your emails with
                    customizeable templates for any occassion. Additional
                    Marketplace templates available as add-ons for Standard and
                    Premium plans."
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">A/B Testing</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader> A/B Testing</PopoverHeader>
                  <PopoverBody>
                    A/B Testing Test different subject lines, design, content,
                    and send-times so you can learn what works best for your
                    audience
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">
                    Enhanced Automated Customer Journeys
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    Enhanced Automated Customer Journeys
                  </PopoverHeader>
                  <PopoverBody>
                    Essentials: Customer Journey Builder Build automated
                    workflows to send relevant messages based on how your
                    customers interact with your brand.
                  </PopoverBody>
                  <PopoverBody>
                    Standard & Premium: Customer Journey Builder Branching
                    Points Create and automate unique, adaptable journeys for
                    any customer scenario with full functionality of our
                    Customer Journey Builder.{" "}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Predictive Segmentation</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Predictive Segmentation</PopoverHeader>
                  <PopoverBody>
                    Target the right customers to win more repeat-business with
                    our predictive analytics tools that can estimate future the
                    buying behavior of your customers.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CloseIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="#dfdddc">Dedicated Onboarding Specialist</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Dedicated Onboarding Specialist</PopoverHeader>
                  <PopoverBody>
                    Get a discovery consultation, personalized action plan based
                    on your business goals, and 30 days of on-demand access to
                    our onboarding team.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />
          </List>
          <NavLink>
        <Button
          borderRadius={"full"}
          size="sm"
          justifyItems={"center"}
          width={"100%"}
          textAlign={"center"}
          bg="#ffe01b"
          mt={8}
          variant="outline"
          colorScheme="black"
        >
         Buy Now
        </Button>
        </NavLink>
        </Box>

        <Box
          w={"25%"}
          h="auto"
          p={5}
          border="1px"
          borderColor="blue.800"
          textAlign={"left"}
        >
          <Heading  fontFamily={"means"}>Essentials</Heading>
          <Text>
            Send the right content at the right time with testing and scheduling
            features.
          </Text>
          <Text mt={4}>Starts at</Text>
          <Heading  fontWeight={"normal"} textColor={"GrayText"} >₹ 770</Heading>
          <Text fontSize={"35px"} fontWeight={"bold"}>₹
          ₹
385</Text>
          <Text>/month for 12 months*</Text>

          <List mt={5} spacing={3}>
            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">24/7 Email & Chat Support</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>24/7 Email & Chat Support</PopoverHeader>
                  <PopoverBody>
                    Priority email and chat support 24/7. Phone support
                    available during business hours.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500"> Max Contacts:50,000</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Max Contacts:50,000</PopoverHeader>
                  <PopoverBody>
                    The maximum number of email addresses you can store in
                    Mailchimp.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Pre built Email Templates</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Pre built Email Templates</PopoverHeader>
                  <PopoverBody>
                    Custom-Coded Templates Take control of your email design by
                    using your own custom-coded HTML templates.
                  </PopoverBody>
                  <PopoverBody>
                    Pre-Built Email Templates Enhance your emails with
                    customizeable templates for any occassion. Additional
                    Marketplace templates available as add-ons for Standard and
                    Premium plans."
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">A/B Testing</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>A/B Testing</PopoverHeader>
                  <PopoverBody>
                    A/B Testing Test different subject lines, design, content,
                    and send-times so you can learn what works best for your
                    audience
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">
                    Basic Automated Customer Journeys
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    Basic Automated Customer Journeys
                  </PopoverHeader>
                  <PopoverBody>
                    Essentials: Customer Journey Builder Build automated
                    workflows to send relevant messages based on how your
                    customers interact with your brand.
                  </PopoverBody>
                  <PopoverBody>
                    Standard & Premium: Customer Journey Builder Branching
                    Points Create and automate unique, adaptable journeys for
                    any customer scenario with full functionality of our
                    Customer Journey Builder.{" "}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CloseIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="#dfdddc">Predictive Segmentation</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Predictive Segmentation</PopoverHeader>
                  <PopoverBody>
                    Target the right customers to win more repeat-business with
                    our predictive analytics tools that can estimate future the
                    buying behavior of your customers.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CloseIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="#dfdddc">Dedicated Onboarding Specialist</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Dedicated Onboarding Specialist</PopoverHeader>
                  <PopoverBody>
                    Get a discovery consultation, personalized action plan based
                    on your business goals, and 30 days of on-demand access to
                    our onboarding team.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />
          </List>
          <NavLink>
        <Button
          borderRadius={"full"}
          size="sm"
          justifyItems={"center"}
          width={"100%"}
          textAlign={"center"}
          bg="#ffe01b"
          mt={8}
          variant="outline"
          colorScheme="black"
        >
         Buy Now
        </Button>
        </NavLink>
        </Box>

        <Box
          w={"25%"}
          h="auto"
          p={5}
          border="1px"
          borderColor="blue.800"
          textAlign={"left"}
        >
          <Heading  fontFamily={"means"}>Free</Heading>
          <Text>
            Easily create email campaigns and learn more about your customers
          </Text>
          <Text mt={4}></Text>
          <Heading  fontWeight={"normal"} textColor={"GrayText"} >₹ 0</Heading>
          
          <Text>/month</Text>

          <List mt={12} spacing={3}>
            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Email support for first 30 days</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Email support for first 30 days</PopoverHeader>
                  <PopoverBody>
                    Priority email and chat support 24/7. Phone support
                    available during business hours.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500"> Max Contacts: 500</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Max Contacts: 500</PopoverHeader>
                  <PopoverBody>
                    The maximum number of email addresses you can store in
                    Mailchimp.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />
            <Divider color={"#d99536"} />
            
            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Pre-built Email Templates</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Pre-built Email Templates</PopoverHeader>
                  <PopoverBody>
                    Custom-Coded Templates Take control of your email design by
                    using your own custom-coded HTML templates.
                  </PopoverBody>
                  <PopoverBody>
                    Pre-Built Email Templates Enhance your emails with
                    customizeable templates for any occassion. Additional
                    Marketplace templates available as add-ons for Standard and
                    Premium plans."
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Flex>
              <ListIcon as={CheckIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="black.500">Pre-built Email Templates</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Pre-built Email Templates</PopoverHeader>
                  <PopoverBody>
                    Custom-Coded Templates Take control of your email design by
                    using your own custom-coded HTML templates.
                  </PopoverBody>
                  <PopoverBody>
                    Pre-Built Email Templates Enhance your emails with
                    customizeable templates for any occassion. Additional
                    Marketplace templates available as add-ons for Standard and
                    Premium plans."
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CloseIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="#dfdddc">Multivariate & A/B Testing</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Multivariate & A/B Testing</PopoverHeader>
                  <PopoverBody>
                    Multivariate Testing Test up to eight campaign variations to
                    see what changes make the biggest impact on engagement and
                    conversion.
                  </PopoverBody>
                  <PopoverBody>
                    A/B Testing Test different subject lines, design, content,
                    and send-times so you can learn what works best for your
                    audience
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CloseIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="#dfdddc">
                    Enhanced Automated Customer Journeys
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    Enhanced Automated Customer Journeys
                  </PopoverHeader>
                  <PopoverBody>
                    Essentials: Customer Journey Builder Build automated
                    workflows to send relevant messages based on how your
                    customers interact with your brand.
                  </PopoverBody>
                  <PopoverBody>
                    Standard & Premium: Customer Journey Builder Branching
                    Points Create and automate unique, adaptable journeys for
                    any customer scenario with full functionality of our
                    Customer Journey Builder.{" "}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CloseIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="#dfdddc">Predictive Segmentation</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Predictive Segmentation</PopoverHeader>
                  <PopoverBody>
                    Target the right customers to win more repeat-business with
                    our predictive analytics tools that can estimate future the
                    buying behavior of your customers.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />

            <Flex>
              <ListIcon as={CloseIcon} color="black.500" />
              <Popover>
                <PopoverTrigger>
                  <Text color="#dfdddc">Dedicated Onboarding Specialist</Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Dedicated Onboarding Specialist</PopoverHeader>
                  <PopoverBody>
                    Get a discovery consultation, personalized action plan based
                    on your business goals, and 30 days of on-demand access to
                    our onboarding team.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Divider color={"#d99536"} />
            
          </List>
          <NavLink>
        <Button
          borderRadius={"full"}
          size="sm"
          justifyItems={"center"}
          bg="#ffe01b"
          mt={8}
          width={"100%"}
          textAlign={"center"}
          variant="outline"
          colorScheme="black"
        >
          Sign Up Free
        </Button>
        </NavLink>
        </Box>
        
      </Flex>
      <Text>
      Free
*SeeOffer Terms Overages apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. Learn more

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
        See all plan details
      </Button>
      </NavLink>
      <Heading fontSize={'5xl'} m={"auto"} mt={155} w={"65%"}>
        Generate up to 4x more orders* with Customer Journey Builder automations
      </Heading>
      <Flex mt={55}>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/6M0RT8j3jGOfMogAYiaEXg/503ae20dd6d6df92c9c56533b2ab1185/Desktop_Automations_2.png"
          w="50%"
          alt="img1"
        />
        <Box w="50%" bg="#efeeea" h="880px">
          <VStack>
            <Box>
              <Heading mt={50} fontSize={"4xl"}>
                Convert more customers at scale
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
                {" "}
                Drive more traffic and sales by setting up automations that
                trigger emails based on customer behavior with our Customer
                Journey Builder.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="black"
              >
                Learn More
              </Button>
            </Box>
            <Box>
              <Heading mt={50} fontSize={"4xl"}>
                Discover new ways to automate
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
                {" "}
                Get a head start with pre-built journeys that help you
                cross-sell your products, recover abandoned carts, re-engage
                existing customers, and win new ones.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="black"
              >
                Learn More
              </Button>
            </Box>

            <Box>
              <Heading mt={50} fontSize={"4xl"}>
                Keep your emails relevant and your brand growing
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
                {" "}
                Deliver personalized emails based on their buying behavior,
                survey responses, chat interactions, and support tickets to
                promote loyalty and growth.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Image
        src="https://iili.io/L26B6B.jpg"
        alt="img1"
      />
      <Flex>
        <Image
          w={"50%"}
          src="https://eep.io/images/yzco4xsimv0y/6j5S0aFFsjYonyvH3bvo9l/92d7c1c73ec3b1f4115d20f6a415549b/Desktop_Segmentation_2.png"
          alt="p2"
        />

        <Box w="50%" bg="#efeeea" h="880px">
          <VStack>
            <Box mt={150} w={"80%"}>
              <Text w="90%" fontSize={"4xl"}>
              Mailchimp will help you focus on your most loyal and valuable customers.
              </Text>
            </Box>
            <Box>
              <Heading mt={50} fontSize={"4xl"}>
              Predict who’s likely to buy again
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
              Create segments of customers based on their lifetime value and likelihood to purchase.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="black"
              >
                Learn More
              </Button>
            </Box>

            <Box>
              <Heading mt={50} fontSize={"4xl"}>
              Build customers for life
              </Heading>
              <Text w="90%" fontSize={"2xl"}>
              Use our intelligent predictions to tighten your targeting strategy, strengthen customer relationships, and drive repeat sales.
              </Text>
              <Button
                borderRadius={"full"}
                size="lg"
                bg="#ffe01b"
                mt={8}
                variant="outline"
                colorScheme="black"
              >
                Learn More
              </Button>
            </Box>
          </VStack>
        </Box>
      </Flex>

      
    </>
  );
}

export default HomeMid;
