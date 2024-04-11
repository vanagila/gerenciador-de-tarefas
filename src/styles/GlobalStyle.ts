import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --primary-color: #000000;
    --secondary-color: #ffffff;

    --font-poppins: 'Poppins', sans-serif;
    --font-poppins-medium: 'Poppins Medium', sans-serif;
    --font-poppins-bold: 'Poppins Bold', sans-serif;
    --font-poppins-light: 'Poppins Light', sans-serif;

    --font-dm-sans: 'DM Sans', sans-serif;
  }

  body {
    background-color: var(--primary-color);
  }

  button {
    cursor: pointer;
  }

`;
