import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "'LibreFranklin'",
    heading: "'Fraunces'",
  },

  components: {
    FormLabel: {
      baseStyle: {
        fontWeight: 600,
        fontSize: "0.8em",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 0,
        fontWeight: "medium",
      },
      variants: {
        black: {
          bg: "#000000",
          color: "#ffffff",
          fontSize: "0.8em",
          padding: "1.4em",
        },
        whiteWithBorder: {
          bg: "#ffffff",
          color: "#000000",
          fontSize: "0.8em",
          fontWeight: 800,
          padding: "1.4em",
          border: "1px",
        },
      },
      defaultProps: {
        variant: "black",
      },
    },
    Text: {
      variants: {
        smallText: {
          fontWeight: 600,
          fontSize: "0.8em",
          color: "#555555",
        },
      },
    },
    Input: {
      baseStyle: {
        padding: "1em",
      },
    },
  },
});
