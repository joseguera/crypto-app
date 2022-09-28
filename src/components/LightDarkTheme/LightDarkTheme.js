import React, { useState } from 'react';
import themeDark from '../../images/theme-switch-dark.svg'
import { ThemeHolder, ThemeIcon } from './LightDarkTheme.styles';

export default function LightDarkTheme(props) {
  const [selectedTheme, setSelectedTheme] = useState("light")

  const handleThemeChange = () => {
    let theme = selectedTheme;
    (theme === "dark") ? theme = "light" : theme = "dark";
    setSelectedTheme(theme);
    props.handleThemeChange(selectedTheme)
  };

    return (
      <ThemeHolder onClick={handleThemeChange}>
        <ThemeIcon src={themeDark} alt='light-dark theme'/>
      </ThemeHolder>
    );
};

