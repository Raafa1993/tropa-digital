import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --orange: #FF6C22;
  --green: #2EAFB2;
  --background: #F3F3F3;
  --white: #FFFFFF;
  --text-tittle: #888888;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  // font-size: 16px (desktop)

html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

// REM = 1rem = 16px

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Advent Pro', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disable] {
  opacity: 0.6;
  cursor: not-allowed;
}

`