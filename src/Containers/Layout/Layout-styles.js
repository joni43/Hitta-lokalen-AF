import styled from 'styled-components';

export const LayoutContainer = styled.main`
  height: var(--viewHeight);
`;
export const InnerContainer = styled.div`
  height: var(--viewHeight);
`;

export const OverLayContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: var(--viewHeight);
  width: 100vw;
  opacity: 0;
  visibility: hidden;
  background: rgb(0, 0, 0);
  z-index: 20;
  transition: opacity 300ms;
  will-change: opacity;
  &.is-active {
    opacity: 0.25;
    visibility: visible;
  }
`;
