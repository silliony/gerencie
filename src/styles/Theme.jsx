import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gray: {
      lightGrey: '#EEEEEE',
      mediumGrey: '#D9D9D9',
      darkGray: '#404040',
    },
    greenishBlue: '#23A4A6',
    darkGreenishBlue: '#1D4F69',
    blue: '#203699',
    darkBlue: '#123645',
  },

  fonts: {
    incosolata: 'Inconsolata, sans-serif;',
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}