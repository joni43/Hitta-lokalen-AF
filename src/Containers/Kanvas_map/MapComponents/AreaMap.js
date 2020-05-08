import React from 'react';
import { Path } from 'react-konva';
import PropTypes from 'prop-types';

import colorPalette from '../../../assets/colorPalette';

export const AreaMap = ({
  floor,
  areaArray,

  selectArea,
  openModal,
}) => {
  if (!floor) {
    return null;
  }

  const AreaMaps = floor.areas.map((area, index) => {
    if (JSON.stringify(areaArray).includes(area.typeId)) {
      return (
        <Path
          areaID={index}
          key={'areaTypes' + index}
          data={area.svgPath}
          onClick={() => selectArea(area.typeId, index)}
          onTap={() => openModal(area.typeId, index)}
          fill={colorPalette[area.typeId]}
        ></Path>
      );
    }
    return null;
  });

  return <React.Fragment>{AreaMaps}</React.Fragment>;
};

AreaMap.propTypes = {
  floor: PropTypes.object,
  areaArray: PropTypes.array,
  openModal: PropTypes.func,
  //   room: PropTypes.string && PropTypes.number,
  selectArea: PropTypes.func,
  onselectRoom: PropTypes.func,
};
