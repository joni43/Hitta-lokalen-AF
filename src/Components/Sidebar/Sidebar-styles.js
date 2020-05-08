import styled from 'styled-components';
import colorPalette from '../../assets/colorPalette';

export const SidebarContainer = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  height: var(--viewHeight);
  width: 100vw;
  transform: translateX(100%);
  background: rgb(255, 255, 255);
  padding-right: 2rem;
  z-index: 30;
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;

  &.is-open {
    transform: translateX(2rem);
  }
`;

// Header Style Components
export const HeaderSidebar = styled.header`
  height: 64px;
  width: 100%;
  position: absolute;
  top: 0;
  border-bottom: 1px solid #f5f5f5;
`;

export const HeaderSidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const HeaderSidebarClose = styled.div`
  position: absolute;
  left: 250px;
  height: 90px;
  width: 100px;
  & p {
    margin: 10px 15px;
    font-size: 14px;
    font-weight: 600;
  }
`;

// Surface Style Components
export const SidebarSurfaceContainer = styled.section`
  padding-left: 35px;
  position: relative;

  & h2 {
    font-size: 14px;
    margin-bottom: 35px;
  }
`;
export const SurfacesContainer = styled.div``;
// Address Style Components

export const SidebarOverlay = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
export const SidebarAdressContainer = styled.section`
  margin-top: 60px;
  border-bottom: 1px solid #f5f5f5;
  & h2 {
    font-size: 14px;
    line-height: 100%;
    margin-bottom: 16px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const OpenAdress = styled.div`
  position: relative;
`;

export const SidebarSelect = styled.select`
  -webkit-appearance: none;
  border: 1px solid #999999;
  position: relative;
  margin-bottom: 32px;
  outline: 0;
  width: 272px;
  height: 48px;
  box-shadow: none;
  background: #ffffff;
  border-radius: 1px solid;
  padding: 0 0.5em;
  color: rgb(18, 17, 80);
  cursor: pointer;
`;

// SidebarSurface Styled Components
export const LabelContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 12px;
  line-height: 24px;
  -webkit-user-select: none;
  user-select: none;

  &input {
    opacity: 0;
    cursor: pointer;
  }
`;
export const Scroll = styled.section`
    width:100%
    height:calc(100% - 187px);
    overflow-y: scroll;
    //overflow-x:hidden;
`;
export const HiddenInput = styled.input`
  opacity: 0;
  cursor: pointer;
`;
export const SpanCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid black;
  // background-color: #ffffff;
  background: ${props =>
    props.checked ? colorPalette[props.typeId] : ' ffffff'};
  border-radius: 50%;
`;
