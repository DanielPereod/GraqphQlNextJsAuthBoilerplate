import React, { useEffect } from "react";
import Cookies from "js-cookie";
import {
  useMeQuery,
  useRevokeRefreshTokenForUserMutation,
} from "../../graphql/generated";
import { isServer } from "../../utils/isServer";
import { Flex, Box, Button, Link } from "@chakra-ui/react";
import cache from "memory-cache";

interface Props {}

export const Navbar = (props: Props) => {
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [
    { fetching },
    revokeRefreshTokenForUser,
  ] = useRevokeRefreshTokenForUserMutation();

  const logout = async () => {
    try {
      await revokeRefreshTokenForUser(
        {
          userId: data?.me?.user?.id,
        },
        {
          additionalTypenames: ["star"],
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const isLogged = (
    <Flex align="center" fontWeight="semibold">
      <Box mr={3}>{data?.me?.user?.username}</Box>
      <Box>
        <Button isLoading={fetching} onClick={() => logout()}>
          Log out
        </Button>
      </Box>
    </Flex>
  );

  const isNotLogged = (
    <Box>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/register">Register</Link>
    </Box>
  );

  return (
    <Flex justifyContent="flex-end" m={3}>
      {/* {console.log(data)} */}
      {!data?.me.user ? isNotLogged : isLogged}
      {/*       <Button ml={3} onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon name="sun" /> : <Icon name="moon" />}
      </Button> */}
    </Flex>
  );
};
