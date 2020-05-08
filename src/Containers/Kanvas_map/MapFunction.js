import React from 'react';
import { StaticPainter } from './MapComponents/index';

export const loadImageHandler = (layerRef, stageRef, groupRef) => {
  const stageMiddleX = stageRef.width() / 2;
  const stageMiddleY = stageRef.height() / 2;

  const layerMiddleX = layerRef.width() / 2;
  const layerMiddleY = layerRef.height() / 2;

  const groupMiddleX = groupRef.width() / 2;
  const groupMiddleY = groupRef.height() / 2;

  groupRef.offsetX(groupMiddleX);
  groupRef.offsetY(groupMiddleY);

  layerRef.offsetX(layerMiddleX);
  layerRef.offsetY(layerMiddleY);
  layerRef.x(stageMiddleX);
  layerRef.y(stageMiddleY);
  groupRef.x(layerMiddleX);
  groupRef.y(layerMiddleY);
  layerRef.scaleX(0.5);
  layerRef.scaleY(0.5);

  stageRef.batchDraw();
};

export const checkPropsEmpty = (Component) => (props) => {
  let selectedFloor = undefined;
  let staticPaintsBefore = undefined;
  let staticPaintsAfter = undefined;

  if (props && props.userOffice && props.user) {
    if (
      props.userOffice.floors &&
      Array.isArray(props.userOffice.floors) &&
      props.userOffice.floors.length > 0
    ) {
      selectedFloor = props.userOffice.floors.find(
        (floor) => floor.id === props.selections.selectedFloor
      );

      if (!selectedFloor) {
        selectedFloor = props.userOffice.floors[0];
      }

      if (selectedFloor.staticPaints) {
        staticPaintsBefore = selectedFloor.staticPaints.before;

        staticPaintsAfter = selectedFloor.staticPaints.after;
      }
      // Här är det okej att rendera
    } else {
      // {this.state.show === true && <Modal show={this.state} />}
      // kasta error eftersom du har fått in ett office som saknar våningar.
    }
  }
  return (
    <Component
      {...props}
      staticPaints={props.staticPaints}
      key={staticPaintsBefore}
      selectedFloor={selectedFloor}
      staticPaintsAfter={staticPaintsAfter}
      staticPaintsBefore={staticPaintsBefore}
    />
  );
};

export const StaticPainterHOC = checkPropsEmpty(StaticPainter);
