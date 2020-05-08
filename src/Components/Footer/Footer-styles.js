import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const SelectContainer = styled.div({
  position: 'relative',
  left: '22px',
  outline: '0',
  boxshadow: 'none',
  background: '#F5F5F5',
  color: 'rgb(18, 17, 80)',
  cursor: 'pointer'
});

export const ScreenIcon = styled.div`
  display: flex;
  flex-flow: column-reverse;
  text-align: center;
  background-color: #fff;
  position: relative;
  width: 9rem;
  height: 3.95rem;
`;

export const ScreenWidth = styled.i`
  display: flex;
  justify-content: center;
  margin: 0px;
  background-color: #ffffff;
`;

export const StyleFooter = styled.footer`
  position: absolute;
  bottom: 0;
  height: 64px;
  width: 100vw;
  z-index: 10;
  background: #f5f5f5;
`;
export const Select = styled.select`
  -webkit-appearance: none;
  outline: 0;
  box-shadow: none;
  background: #ffffff;
  height: 48px;
  width: 190px;
  padding: 0 0.5em;
  color: rgb(18, 17, 80);
  cursor: pointer;
`;
