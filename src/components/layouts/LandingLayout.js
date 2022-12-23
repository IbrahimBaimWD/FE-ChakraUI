import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "../sections/Header";

export default function LandingLayout({ props, user }) {
  return (
    <Flex direction="column" align="center" {...props}>
      <Header />
      <Box width="100%">{props.children}</Box>
    </Flex>
  );
}
