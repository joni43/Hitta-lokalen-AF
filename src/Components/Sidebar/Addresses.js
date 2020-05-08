import React from 'react';
import PropTypes from 'prop-types';

import { patchUser } from '../../Store/actions/Data';
// import { addressChanged } from '../../stores/actions/actions';
import {
  SidebarSelect,
  SidebarOverlay,
  SidebarAdressContainer,
  InnerContainer,
  OpenAdress,
} from './Sidebar-styles';
import '../../ComponentCss/Addresses.css';
const Addresses = ({
  officeID,
  floor,
  selections,
  allOffices,
  onfetchUserOffice,
  onaddressChanged,
}) => {
  const updateUserLocation = (event) => {
    onfetchUserOffice(event.target.value);
    onaddressChanged(event.target.value);
    patchUser({ officeID: event.target.value });
    let updateUserFloor = floor.map((floor) => floor.id);
    const firstFloor = updateUserFloor[0];

    patchUser({ FloorID: firstFloor });

    selections.selectedFloor = firstFloor;
  };
  const SelectAddress = () => {
    const OfficeAddresses = allOffices.offices.map((address) => {
      return (
        <option value={address.id} key={address.id}>
          {address.title}
        </option>
      );
    });

    return (
      <SidebarSelect
        // title='välj_våning'
        aria-label='välj_våning'
        value={officeID ? officeID : undefined}
        onChange={(event) => updateUserLocation(event)}
      >
        <option>Välj våning</option>
        {OfficeAddresses}
      </SidebarSelect>
    );
  };
  return (
    <SidebarOverlay>
      <SidebarAdressContainer>
        <InnerContainer>
          <OpenAdress id='open-adress'>
            <h2>Välj adress</h2>

            <SelectAddress />
          </OpenAdress>
        </InnerContainer>
      </SidebarAdressContainer>
    </SidebarOverlay>
  );
};

Addresses.propTypes = {
  officeID: PropTypes.string,
  allOffices: PropTypes.object,
  onaddressChanged: PropTypes.func,
  onfetchUserOffice: PropTypes.func,
  floor: PropTypes.array,
  selections: PropTypes.object,
};

export default Addresses;
