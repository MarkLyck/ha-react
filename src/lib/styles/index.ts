import { css } from '@emotion/react'
import backgroundImage from 'src/assets/images/background1.png'

const globalStyles = css`
  @import '~antd/dist/antd.css';

  html,
  body,
  .App {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  #root {
    height: 100%;
  }

  .App {
    background: url(${backgroundImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
  }

  .App-bg {
    background: url(${backgroundImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    filter: blur(20px);
    -webkit-filter: blur(20px);

    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
  }

  @keyframes animate {
    0% {
      transform: scale(0.85);
    }
    20% {
      transform: scale(1.1);
    }
    40% {
      transform: scale(0.95);
    }
    60% {
      transform: scale(1.03);
    }
    80% {
      transform: scale(0.97);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate {
    animation: animate 0.8s;
    transform-origin: center;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`

export default globalStyles
