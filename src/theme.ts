import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
import { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const fonts = {
  heading: "Inter",
  body: "Inter",
};

export const priva_lavender = "rgb(187,142,224)";
export const priva_grayed_lavender = "rgb(187,169,198)";
export const priva_turquoise = "rgb(119,204,255)";
export const priva_purple = "rgb(65,37,154)";

const styles = {
  global: (props: Dict<any>) => ({
    body: {
      // color: mode('gray.800', 'whiteAlpha.900')(props),
      // background: mode('#f2f2f2', '#292929')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#f2f2f2', '#292929')(props),
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.600')(props),
    },
    '#tokenlist thead': {
      background: mode('white', '#404040')(props),
    },
    '#tokenlist tbody tr:nth-of-type(odd)': {
      background: mode('#dfdfdf', '#1d1d1d')(props),
    },
    '#tokenlist tbody tr:nth-of-type(even)': {
      background: mode('white', '#404040')(props),
    },
    '#tokenlist tbody tr:hover': {
      background: '#acdfff',
    },
  }),
};

const theme = extendTheme({
  config,
  fonts,
  styles
});

export default theme;
