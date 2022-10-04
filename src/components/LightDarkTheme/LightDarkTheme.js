import React from 'react';
import { useDispatch } from "react-redux";
import { change } from "../../features/theme/themeSlice";
import themeDark from '../../images/theme-switch-dark.svg'
import { ThemeHolder, ThemeIcon } from './LightDarkTheme.styles';

export default function LightDarkTheme() {
  const dispatch = useDispatch()

    return (
      <ThemeHolder onClick={() => dispatch(change())}>
        <ThemeIcon src={themeDark} alt='light-dark theme'/>
      </ThemeHolder>
    );
};

