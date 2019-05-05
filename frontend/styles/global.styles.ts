import { css } from "@emotion/core";
import emotionReset from "emotion-reset";

const globalStyles = css`
  ${emotionReset}

  html {
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 100%;
  }

  button, input {
    font-family: inherit;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

export default globalStyles;
