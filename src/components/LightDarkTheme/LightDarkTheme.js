import React from 'react';
import themeDark from '../../images/theme-switch-dark.svg'
import { ThemeHolder, ThemeIcon } from './LightDarkTheme.styles';

export default class LightDarkTheme extends React.Component {
  state = {
    selectedTheme: "light",
  }

  handleThemeChange = () => {
    let theme = this.state.selectedTheme;
    (theme === "dark") ? theme = "light" : theme = "dark";
    this.setState({ selectedTheme: theme });
    this.props.handleThemeChange(this.state.selectedTheme)
  };

  render() {
    return (
      <ThemeHolder onClick={this.handleThemeChange}>
        <ThemeIcon src={themeDark} alt='light-dark theme'/>
      </ThemeHolder>
    );
  }
};

