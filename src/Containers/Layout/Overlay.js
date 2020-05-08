import React from 'react';

// Style
import { OverLayContainer } from './Layout-styles';

export const Overlay = ({ className, OpenSideBar }) => (
  <OverLayContainer className={className} onClick={OpenSideBar} />
);
