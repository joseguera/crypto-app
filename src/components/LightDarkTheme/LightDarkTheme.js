import React from 'react';
import { useDispatch } from "react-redux";
import { change } from "../../features/theme/themeSlice";
import themeDark from '../../images/theme-switch-dark.svg'
import { ThemeHolder, ThemeIcon } from './LightDarkTheme.styles';

export default function LightDarkTheme() {
  const dispatch = useDispatch()


  // const [selectedTheme, setSelectedTheme] = useState(false)

  // const handleThemeChange = () => {
  //   setSelectedTheme(!selectedTheme);
  //   console.log(selectedTheme)
  //   props.handleThemeChange(selectedTheme)
  // };

    return (
      <ThemeHolder onClick={() => dispatch(change())}>
        <ThemeIcon src={themeDark} alt='light-dark theme'/>
      </ThemeHolder>
    );
};

