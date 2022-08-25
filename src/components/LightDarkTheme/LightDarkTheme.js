import React from 'react';
import themeDark from '../../images/Group_2633.svg'
import themeLight from '../../images/Group_2634.svg'
import { ThemeHolder, ThemeIcon } from './LightDarkTheme.styles';

export default class LightDarkTheme extends React.Component {
  state = {
    selectedTheme: "light",
    themeButtonColor: themeDark
  }

  handleThemeChange = () => {
    let theme = this.state.selectedTheme;
    let themeColor = this.state.themeButtonColor;
    (theme === "dark") ? theme = "light" : theme = "dark";
    (theme === "dark") ? themeColor = themeLight : themeColor = themeDark;
    console.log(theme)
    this.setState({ selectedTheme: theme, themeButtonColor: themeColor });
    this.props.handleThemeChange(this.state.selectedTheme)
  };

  render() {
    const { themeButtonColor } = this.state;
    return (
      <ThemeHolder>
        <ThemeIcon src={themeButtonColor} alt='light-dark theme' onClick={this.handleThemeChange}/>
      </ThemeHolder>
    );
  }
};

