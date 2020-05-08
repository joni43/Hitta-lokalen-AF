import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colorPalette from '../../assets/colorPalette';
import { SidebarContainer } from './Sidebar-styles';
import { Header } from './Header';
import Addresses from './Addresses';
import { SidebarSurface } from './SidebarSurface';

export const InnerContainer = styled.div``;

export const Sidebar = props => {
  const {
    className,
    OpenSideBar,
    onaddressChanged,
    user,
    officeArea,
    offices,
    floor,
    selections,
    selectCheckbox,
    selectArea,
    onfetchUserOffice
  } = props;
  if (officeArea) {
    const AreaTypeColors = officeArea.map(opt => opt.options.fill);
    Object.assign(colorPalette, AreaTypeColors);
  }
  return (
    <SidebarContainer className={className}>
      <InnerContainer>
        <Header className={className} OpenSideBar={OpenSideBar} />
        <Addresses
          officeID={user.officeID}
          allOffices={offices}
          floor={floor}
          selections={selections}
          onaddressChanged={onaddressChanged}
          onfetchUserOffice={onfetchUserOffice}
        />
      </InnerContainer>
      <SidebarSurface
        areas={officeArea}
        selectArea={selectArea}
        selectCheckbox={selectCheckbox}
      />
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  onaddressChanged: PropTypes.func,
  onfetchUserOffice: PropTypes.func,
  OpenSideBar: PropTypes.func,
  officeArea: PropTypes.array,
  floorChanged: PropTypes.func,
  floor: PropTypes.array,
  selections: PropTypes.object,
  user: PropTypes.object,
  offices: PropTypes.object,
  selectArea: PropTypes.func,
  selectCheckbox: PropTypes.array,
  className: PropTypes.string
};
