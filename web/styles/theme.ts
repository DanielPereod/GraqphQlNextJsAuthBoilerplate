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
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 0,
        fontWeight: "medium",
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        black: (props) => ({
          bg: props.colorMode === "light" ? "#000000" : "#ffffff",
          color: props.colorMode === "light" ? "#ffffff" : "#000000",
          fontSize: "0.8em",
          fontWeight: 700,
          padding: "1.4em",
          _hover: {
            textDecoration: "none",
          },
        }),
        whiteWithBorder: {
          bg: "#ffffff",
          color: "#000000",
          fontSize: "0.8em",
          fontWeight: 800,
          padding: "1.4em",
          border: "1px",
        },
        transparent: {
          bg: "red",
          _focus: {
            outline: "none",
          },
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
