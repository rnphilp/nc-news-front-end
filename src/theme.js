import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(40,170,255)'
    },
    secondary: {
      main: 'rgb(240,80,35)'
    }
    // contrastThreshold: 3,
    // tonalOffset: 0.2
  }
  // drawer: {
  //   width: 240
  // }
});

export default theme;
