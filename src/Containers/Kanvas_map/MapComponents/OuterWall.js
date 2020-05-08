import React from 'react';

import { Path } from 'react-konva';

export const StaticPainter = props => {
  const staticWall = props.staticPaints.map(walls => (
    <Path
      data={walls.svgPath}
      fill={walls.options.fill}
      key={walls.name}
      stroke='black'
      stroke-width='3'
    />
  ));

  return staticWall;
};
