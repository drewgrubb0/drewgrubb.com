import { css } from 'styled-components';

const mixins = {
  underlinedLink: css`
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: green;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.15s ease-in-out 0s;
    }

    &:hover::after {
      visibility: visible;
      transform: scaleX(1);
    }
  `,
};

export default mixins;
