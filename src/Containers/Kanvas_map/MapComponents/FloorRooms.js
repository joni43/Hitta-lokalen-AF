import React from 'react';
import PropTypes from 'prop-types';

import { Path } from 'react-konva';

export const FloorRooms = ({ onselectRoom, room, floor }) => {
  // const [select, isSelected] = useState(true);
  if (!floor) {
    return null;
  }

  const floorRoom = floor.rooms.map(floorRooms => {
    const selectRoom = () => {
      // let toggleValue = !select;

      // isSelected(toggleValue);
      // console.log(toggleValue);
      onselectRoom(floorRooms.name);

      // toggleValue === true ? onselectRoom(floorRooms.name) : onselectRoom();
    };
    return (
      <Path
        key={floorRooms.name}
        onClick={event => selectRoom(event)}
        onTap={event => selectRoom(event)}
        roomId={floorRooms.name}
        data={floorRooms.svgPath}
        // stroke="black"

        // stroke-width="2"
        fill={floorRooms.name === room ? 'blue' : floorRooms.options.fill}
      />
    );
  });
  return <React.Fragment>{floorRoom}</React.Fragment>;
};

FloorRooms.propTypes = {
  onselectRoom: PropTypes.func,
  // room: PropTypes.string && PropTypes.number,
  floor: PropTypes.object
};
