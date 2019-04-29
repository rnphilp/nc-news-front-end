import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#008cf1',
      main: '#28a9ff',
      light: '#b9e0fe'
    },
    secondary: {
      main: 'rgb(240,80,35)'
    }
    // contrastThreshold: 3,
    // tonalOffset: 0.2
  },
  typography: {
    useNextVariants: true
  },
  drawer: {
    width: 240
  }
});

export default theme;
