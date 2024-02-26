import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
    *,
  :before,
  :after {
    ${reset};
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    background: #fff;
    -webkit-text-size-adjust: 100%;
    min-width: 320px;
    &.is-mobile {
      font-size: 12px;
    }
    &.is-scroll-lock {
      overflow: hidden;
    }
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
  }
  th,
  td {
    text-align: center;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }
  button {
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    cursor: pointer;
  }
`;
