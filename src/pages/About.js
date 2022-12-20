import React from "react";
import LandingLayout from "../components/layouts/LandingLayout";
import { Box, Image, Text, Link } from "@chakra-ui/react";
export default function About() {
  return (
    <LandingLayout>
      <Box p={[1, 4, 6, 12]} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ lg: 96, md: 72, sm: 40 }}
            src="https://bit.ly/2jYM25F"
            alt="Woman paying for a purchase"
          />
        </Box>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={{ lg: "4xl", md: "2xl", sm: "md" }}
            letterSpacing="wide"
            color="teal.600"
          >
            Marketing2222adada
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize={{ lg: "2xl", md: "lg", sm: "sm" }}
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box>
      </Box>
    </LandingLayout>
  );
}
