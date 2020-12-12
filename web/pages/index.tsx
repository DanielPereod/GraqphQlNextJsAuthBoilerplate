import { Box } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Navbar } from "../components/layouts/navbar";
import { clientOptions } from "../utils/createClient";

function Home() {
  return (
    <Box>
      <Navbar />
    </Box>
  );
}
export default withUrqlClient(clientOptions, { ssr: true })(Home);
