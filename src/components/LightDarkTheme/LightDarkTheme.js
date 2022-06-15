import theme from '../../images/Group_2633.svg'
import { ThemeHolder, ThemeIcon } from './LightDarkTheme.styles';

const LightDarkTheme = (props) => {
  return (
    <ThemeHolder>
      <ThemeIcon src={theme} alt='light-dark theme' />
    </ThemeHolder>
  );
};

export default LightDarkTheme;
