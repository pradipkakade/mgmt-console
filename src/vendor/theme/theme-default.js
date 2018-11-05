import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import customTheme from './custom-theme';

/*
const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: grey900
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  }
});
*/

const themeDefault = getMuiTheme(customTheme);

export default themeDefault;
