import React, { useEffect } from "react";
import Cookies from "js-cookie";
import {
  useMeQuery,
  MeDocument,
  useRevokeRefreshTokenForUserMutation,
} from "../../graphql/generated";
import { isServer } from "../../utils/isServer";
import { Flex, Box, Button, Link, useColorMode, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { client } from "../../utils/createApolloClient";

interface Props {}

export const Navbar = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { loading: meLoading, error: meError, data: meData } = useMeQuery({
    skip: isServer(),
    fetchPolicy: "cache-first",
  });
  const [
    revokeRefreshTokenForUser,
    { loading: revokeTokenLoading },
  ] = useRevokeRefreshTokenForUserMutation();

  const logout = async () => {
    client.writeQuery({
      query: MeDocument,
      data: {
        me: null,
      },
    });
    try {
      await revokeRefreshTokenForUser({
        variables: { userId: meData?.me?.user?.id },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isLogged = (
    <Flex align="center" fontWeight="semibold">
      <Box mr={3}>{meData?.me?.user?.username}</Box>
      <Box>
        <Button
          isLoading={revokeTokenLoading}
          onClick={() => {
            logout();
          }}
        >
          Log out
        </Button>
      </Box>
    </Flex>
  );

  const isNotLogged = (
    <Flex>
      <Box mr={3}>
        <Link href="/auth/login">Login</Link>
      </Box>
      <Box>
        <Link href="/auth/register">Register</Link>
      </Box>
    </Flex>
  );

  return (
    <header>
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        m={2}
        lineHeight="2em"
      >
        {!meData?.me?.user ? isNotLogged : isLogged}
        <Button
          lineHeight="2em"
          variant="transparent"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Flex>
    </header>
  );
};
