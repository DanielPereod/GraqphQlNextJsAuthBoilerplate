import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { GoogleLoginButton } from "../GoogleLoginButton";

interface Props {
  title: string;
  children: JSX.Element;
  type: "login" | "signup";
}

export const AuthFormLayout = ({ title, children, type }: Props) => {
  const bg = useColorModeValue("#fff", "#1a202c");
  return (
    <Flex
      w="100%"
      h="100vh"
      minW="300px"
      minH="770px"
      p={["0", "0", "0", "3em", "3em"]}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        zIndex={0}
        order={1}
        h="100%"
        w={["100%", "100%", "100%", "50%", "60%"]}
        minW="300px"
        p="2em"
        bgImage="url('/images/auhtscreen.jpg')"
        bgSize="cover"
        bgPos="center"
        alignItems="flex-end"
        position={["absolute", "absolute", "absolute", "static", "static"]}
      >
        <Heading textColor="#ffffff">Bienvenido</Heading>
      </Flex>
      <Flex
        h="90vh"
        minH="770px"
        w={["90%", "90%", "90%", "50%", "40%"]}
        bgColor={bg}
        zIndex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Box m={["1em", "6em", "7em", "6em", "6em"]}>
          <Heading fontSize="2.5em" mb="1em" letterSpacing="wider">
            {title}
          </Heading>
          {children}
          <Box mt="0.5em">
            <Link href={type === "login" ? "/auth/register" : "/auth/login"}>
              <Text variant="smallText" textAlign="center">
                {type === "login" ? "Crear cuenta" : "Iniciar sesión"}
              </Text>
            </Link>
          </Box>
          <Box mt="2em" textAlign="center">
            <Text variant="smallText">o</Text>
          </Box>
          <Flex justifyContent="space-between" mt="2em">
            <GoogleLoginButton />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
