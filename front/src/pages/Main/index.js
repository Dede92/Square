import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import ButtonComponent from 'components/Button';
import SelectorComponent from 'components/Selector'

const styles = (theme) => ({
    root: {
      flexGrow: 1,
      margin: '2em',
      marginTop: '7em',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        Hello World
        <ButtonComponent/>
        <SelectorComponent/>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MainPage);