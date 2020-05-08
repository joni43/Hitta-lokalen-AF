import React from 'react';

import { CrossIcon } from '../../assets/icons';

// Import Style
import {
  HeaderSidebar,
  HeaderSidebarContainer,
  HeaderSidebarClose
} from './Sidebar-styles';

export const Header = ({ OpenSideBar }) => {
  return (
    <HeaderSidebar>
      <HeaderSidebarContainer>
        <HeaderSidebarClose onClick={OpenSideBar}>
          {CrossIcon}
          <p> Stäng</p>
        </HeaderSidebarClose>
      </HeaderSidebarContainer>
    </HeaderSidebar>
  );
};
