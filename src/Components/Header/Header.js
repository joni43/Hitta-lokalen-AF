import React from 'react';
import PropTypes from 'prop-types';

import {
  AppHeader,
  InnerContainer,
  BurgerMenuContainer,
} from './Header-styles';
import { BurgerMenuIcon } from '../../assets/icons';

export const Header = ({ title, OpenSideBar }) => {
  return (
    <AppHeader className={title}>
      <InnerContainer>
        <h3>Vägvisaren</h3>
        <BurgerMenuContainer onClick={OpenSideBar}>
          {BurgerMenuIcon}

          <p>Meny</p>
        </BurgerMenuContainer>
      </InnerContainer>
    </AppHeader>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  OpenSideBar: PropTypes.func.isRequired,
};
