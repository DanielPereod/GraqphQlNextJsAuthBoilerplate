import React from "react";
import Cookies from "js-cookie";
import { useMeQuery } from "../../graphql/generated";
import { isServer } from "../../utils/isServer";
import { Flex, Box, Button, Link } from "@chakra-ui/react";

interface Props {}

export const Navbar = (props: Props) => {
  const [{ fetching, data }] = useMeQuery({
    pause: isServer(),
  });

  const isLogged = (
    <Flex align="center" fontWeight="semibold">
      <Box>{data?.me?.user?.username}</Box>
      <Box>
        <Button /* isLoading={logoutFetching} onClick={() => logout()} */>
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
      {console.log(data)}
      {!data?.me.user ? isNotLogged : isLogged}
      {/*       <Button ml={3} onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon name="sun" /> : <Icon name="moon" />}
      </Button> */}
    </Flex>
  );
};
