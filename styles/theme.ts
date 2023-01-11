import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const colors = {
  katrade: {
    100: "#c7ffd6",
    200: "#7dffa0",
    300: "#2eff66",
    400: "#00D861",
    500: "#00D861",
    600: "#009127",
  },
  kraikub: {
    blue: {
      200: "#abceff",
      300: "#70acff",
      400: "#3d8eff",
      500: "#1468de",
      600: "#0952b8",
      700: "#033c8c",
      800: "#00275e",
      900: "#001430",
      always: {
        200: "#1468de",
        300: "#1468de",
        400: "#1468de",
        500: "#1468de",
        600: "#1468de",
      },
    },
  },
  bg: {
    light: "#ffffff",
    dark: "#141414",
  },
  color: {
    light: "#262626",
    dark: "#e6e9ea",
  },
};

const fonts = {
  body: `-apple-system, BlinkMacSystemFont, Helvetica, "Sukhumvit", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  heading: `-apple-system, BlinkMacSystemFont, Helvetica, "Sukhumvit", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
};

const components: { [key: string]: ComponentStyleConfig } = {
  Text: {
    baseStyle: {
      fontSize: 16,
      fontWeight: 500,
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 600,
    },
    sizes: {
      xl: {
        fontSize: "3rem",
        letterSpacing: "-0.05em",
      },
      lg: {
        letterSpacing: "-0.03em",
      },
      md: {
        letterSpacing: "-0.015em",
      },
    },
  },
  Input: {
    defaultProps: {
      fontSize: 20,
      fontWeight: 500,
      focusBorderColor: 'kraikub.blue.500',
    },
  },
  Button: {
    baseStyle: {
      rounded: 8,
      fontWeight: 500,
    },
    sizes: {
      sm: {
        height: "30px",
        fontSize: 12,
      },
      md: {
        fontSize: 14,
      },
      lg: {
        fontSize: 16,
      },
    },
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode(colors.bg.light, colors.bg.dark)(props),
      color: mode(colors.color.light, colors.color.dark)(props),
    },
  }),
};

const overrides = {
  config,
  colors,
  fonts,
  components,
  styles,
};

const theme = extendTheme(overrides);
export default theme;
