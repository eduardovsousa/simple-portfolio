import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
    outline: 0;
    list-style: none;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }

  :root {
    --color-bg: #1f1f38;
    --color-bg-variant: #2c2c6c;
    --color-primary: #4db5ff;
    --color-primary-variant: rgba(77, 181, 255, 0.4);
    --color-white: #fff;
    --color-light: rgba(255, 255, 255, 0.6);

    --transition: all 400ms ease;

    --container-width-lg: 75%;
    --container-width-md: 86%;
    --container-width-sm: 90%;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background: black;
    color: #fff;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    background-image: url("/src/assets/bg/bg-texture.png");
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

  .container {
    width: var(--container-width-lg);
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  section {
    margin-top: 8rem;
  }

  section > h2,
  section > h5 {
    text-align: center;
    color: var(--color-light);
  }

  section > h2 {
    color: var(--color-primary);
    margin-bottom: 3rem;
  }

  .text-light {
    color: var(--color-light);
  }

  a {
    color: var(--color-primary);
    transition: var(--transition);
  }

  a:hover {
      color: var(--color-white);
    }

  .btn {
    width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
  }

  .btn:hover {
      background: var(--color-white);
      color: var(--color-bg);
      border-color: transparent;
    }

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-bg);
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  /* =========================== MEDIA QUERIES (MEDIUM DEVICES) ======================== */
  @media screen and (max-width: 1024px){
    .container {
      width: var(--container-width-md);
    }

    section {
      margin-top: 6rem;
    }
  }

    /* =========================== MEDIA QUERIES (SMALL DEVICES) ======================== */
    @media screen and (max-width: 600px){
    .container {
      width: var(--container-width-sm);
    }

    section > h2 {
      margin-top: 2rem;
    }
  }
`;
