import React from 'react';
import PropTypes from 'prop-types';

import '../../ComponentCss/footer.css';
import { FullScreenIcon } from '../../assets/icons';
import { patchUser } from '../../Store/actions/Data';
import {
  FooterContainer,
  SelectContainer,
  ScreenIcon,
  ScreenWidth,
  StyleFooter,
  Select,
} from './Footer-styles';

export const Footer = ({
  hideInterface,
  selectFloor,
  selections,
  userOffice,
  floorChanged,
  floor,
}) => {
  const handleChange = (event) => {
    floorChanged(event.target.value);
    patchUser({ floorID: event.target.value });
  };

  const UpdateFloor = () => {
    let floors = undefined;

    if (selections && userOffice) {
      if (userOffice !== undefined) {
        floors = floor.map((floor) => {
          return (
            <option key={floor.id} value={floor.id}>
              {floor.title}
            </option>
          );
        });
      }
    }

    return (
      <Select
        // title
        aria-label='select'
        value={selections.selectedFloor}
        onChange={(event) => handleChange(event)}
      >
        {floors}
      </Select>
    );
  };
  return (
    <StyleFooter>
      <FooterContainer>
        <SelectContainer
          id='id-after'
          onChange={(e) => selectFloor(JSON.parse(e.target.value))}
        >
          <UpdateFloor />
        </SelectContainer>

        <ScreenIcon>
          <ScreenWidth onClick={hideInterface}>
            <p> {FullScreenIcon} Helskärm </p>
          </ScreenWidth>
        </ScreenIcon>
      </FooterContainer>
    </StyleFooter>
  );
};

Footer.propTypes = {
  hideInterface: PropTypes.func,
  selectFloor: PropTypes.func,
  floorChanged: PropTypes.func,
  floor: PropTypes.array,
  selections: PropTypes.object,
  userOffice: PropTypes.object,
};
