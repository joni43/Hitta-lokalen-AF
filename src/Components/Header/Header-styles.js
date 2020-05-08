import styled from 'styled-components';

export const AppHeader = styled.header`
  position: absolute;
  top: 0;
  height: 64px;
  width: 100vw;
  z-index: 10;
  background: #ffffff;
  opacity: 1;
  transition: opacity 300ms;
  will-change: opacity;
  &.is-hidden {
    opacity: 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  & svg {
    margin-top: 3px;
  }
  & p {
    margin-left: 10px;
  }
`;

export const BurgerMenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 30px;
`;
