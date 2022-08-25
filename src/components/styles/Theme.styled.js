import searchLoopDark from '../../images/Broken-Search-Dark.svg';
import searchLoopLight from '../../images/Broken-Search-Light.svg';


export const light = {
    name: "light-theme",
    colors: {
      header: "hsl(0, 0%, 93%)",
      background: "hsl(0, 0%, 100%)",
      footer: "hsl(0, 1%, 38%)",
      text: "#2C2F36",
      link: "",
      loopIcon: searchLoopLight,
      quoteBgc: "hsl(60, 40%, 100%)",
      quoteTitle: "hsl(0, 1%, 38%)",
      quoteBody: "hsl(0, 1%, 38%);",
      quoteBorder: "hsl(0, 0%, 87%)",
      border: "hsl(0, 0%, 87%)",
      buttonFill: "#FCFCFC"
    },
  };
  
  export const dark = {
    name: "dark-theme",
    colors: {
      header: "hsl(0, 0%, 20%)",
      background: "hsl(0, 1%, 16%)",
      footer: "hsl(0, 0%, 93%)",
      text: "#FFFFFF",
      link: "#FFFFFF",
      loopIcon: searchLoopDark,
      quoteBgc: "hsl(0, 0%, 35%)",
      quoteTitle: "hsl(0, 0%, 100%)",
      quoteBody: "hsl(0, 0%, 100%)",
      quoteBorder: "hsl(0, 0%, 59%)",
      border: "hsl(0, 0%, 78%)",
      buttonFill: "#2C2F36",
    },
  };