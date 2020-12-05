import { createMuiTheme } from '@material-ui/core/styles';

const yulRed = '#FF0000';
const yulBlack = '#1c1c1c';
const yulWhite = '#ededed';
const yulYellow = '#F5EE9E';

export default createMuiTheme({
  palette: {
    common: {
      red: yulRed,
    },
    primary: {
      main: yulBlack,
    },
    secondary: {
      main: yulWhite,
    },
    accent: {
      main: yulYellow,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Roboto',
      textTransform: 'none',
      fontWeight: 700,
      color: 'white',
      fontSize: '1rem',
    },
    menuItem: {
      fontFamily: 'Lato',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '3.5rem',
      color: yulWhite,
      // lineHeight: 1.5,
      textDecorationLine: 'none',
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '2.5rem',
      color: yulWhite,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: '1.75rem',
      color: yulWhite,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      color: yulWhite,
      fontWeight: 300,
    },
    h6: {
      fontWeight: 500,
      fontFamily: 'Roboto',
      color: yulWhite,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '4px',
      color: yulBlack,
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
      color: yulWhite,
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      color: yulWhite,
      fontWeight: 400,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: yulWhite,
    },
    learnButton: {
      borderColor: yulWhite,
      borderWidth: 2,
      textTransform: 'none',
      color: yulWhite,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: yulWhite,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: yulWhite,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${yulRed}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${yulRed}`,
        },
      },
    },
  },
});
