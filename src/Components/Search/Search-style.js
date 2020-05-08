import styled from 'styled-components';

export const SearchBar = styled.header`
  position: absolute;
  top: 64px;
  height: 64px;
  width: 100vw;
  z-index: 10;
  background: #ececec;
  opacity: 1;
  transition: opacity 300ms;
  will-change: opacity;

  &.is-hidden {
    opacity: 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SearchInput = styled.input`
  padding-left: 40px;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border: 1px solid #999999;
  border-radius: 24px;
  width: calc(100% - 1rem);
  margin: 0 auto;
`;
export const SearchButton = styled.button`
position: absolute;
// right:13px;
right: 16px;
outline: none;
background: #00005A;
border-radius: 20px;
color: white;
height: 40px;
padding: 0;
width: 100px;
}
`;
