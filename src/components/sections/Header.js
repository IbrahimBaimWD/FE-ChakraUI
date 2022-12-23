import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "../ui/Logo";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = ({ props, user }) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={[2, 4, 6, 7]}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[1, 2, 0, 0]}
        >
          <MenuItem to="/">Page</MenuItem>
          <MenuItem to="/home">How It works </MenuItem>
          <MenuItem to="/about">About </MenuItem>
          <MenuItem to="/contact">Contact </MenuItem>
          <MenuItem to="/auth/signup" isLast>
            <Button colorScheme="teal" m={1} size="sm">
              Signup
            </Button>
          </MenuItem>
          <MenuItem to="/auth/login" isLast>
            <Button colorScheme="teal" variant="outline" size="sm">
              Login
            </Button>
          </MenuItem>

          {/* <nav>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Messages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Tasks
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  {({ isActive }) => (
                    <span className={isActive ? activeClassName : undefined}>
                      Tasks
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav> */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
