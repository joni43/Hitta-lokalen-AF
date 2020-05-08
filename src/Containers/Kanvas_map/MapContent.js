import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Stage, Layer, Group } from 'react-konva';
import PropTypes from 'prop-types';

import Hammer from 'hammerjs';

// Import actions
import {
  selectRoom,
  selectFloor,
  selectArea,
} from '../../Store/actions/user-actions';
import { fetchUserOffice } from '../../Store/actions/Data';
import { loadImageHandler, StaticPainterHOC } from './MapFunction';

import { AreaMap, FloorRooms } from './MapComponents/index';
import { MapSection, InnerContainer } from './Map-styles';

class MapContent extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.stageRef = React.createRef();
    this.layerRef = React.createRef();
    this.imageRef = React.createRef();
    this.groupRef = React.createRef();

    // this.panHandler = this.panHandler.bind(this);
    this.panStartHandler = this.panStartHandler.bind(this);
    this.panMoveHandler = this.panMoveHandler.bind(this);
    this.panEndHandler = this.panEndHandler.bind(this);

    this.rotateStartHandler = this.rotateStartHandler.bind(this);
    this.rotateHandler = this.rotateHandler.bind(this);

    this.currentX = 0;
    this.currentY = 0;
    this.rotating = false;
    this.panning = false;

    this.oldRotation = 0;
    this.startScale = 0;
    this.isRotating = false;
  }

  componentDidMount() {
    const mc = new Hammer(this.stageRef.current.content);

    mc.get('pan').set({ enable: true });
    mc.get('tap').set({ enable: true });
    mc.get('rotate').set({ enable: true });

    mc.on('rotatestart', this.rotateStartHandler);
    mc.on('rotate', this.rotateHandler);

    mc.on('panstart', this.panStartHandler);
    mc.on('panmove', this.panMoveHandler);
    mc.on('panend', this.panEndHandler);

    mc.on('tap', this.handleClickAndTap);

    setTimeout(() => {
      loadImageHandler(
        this.layerRef.current,
        this.stageRef.current,
        this.groupRef.current
      );
    }, 1);
  }

  UNSAFE_componentWillUpdate(newProps) {
    if (newProps.user.name !== this.props.user.name) {
      // TODO: Hantera om user.floorID inte finns / är undefined
      newProps.selectFloor(newProps.user.floorID);
    }
  }

  panStartHandler() {
    if (this.rotating) {
      return;
    }
    const layer = this.layerRef.current;
    this.currentX = layer.x();
    this.currentY = layer.y();
    this.panning = true;
  }

  panMoveHandler(event) {
    if (this.rotating || !this.panning) {
      return;
    }
    console.log('EVENT ON', event);
    const layer = this.layerRef.current;
    const stage = this.stageRef.current;

    const newX = event.deltaX + this.currentX;
    const newY = event.deltaY + this.currentY;

    layer.x(newX);
    layer.y(newY);

    stage.batchDraw();
  }

  panEndHandler() {
    this.panning = false;
  }

  rotateStartHandler(event) {
    this.oldRotation = event.rotation;
    this.startScale = this.layerRef.current.scaleX();
    this.isRotating = true;
  }

  rotateHandler(event) {
    if (!this.isRotating) {
      return;
    }

    const layer = this.layerRef.current;
    const stage = this.stageRef.current;
    const delta = this.oldRotation - event.rotation;

    layer.rotate(-delta);
    this.oldRotation = event.rotation;
    layer.scaleX(this.startScale * event.scale);
    layer.scaleY(this.startScale * event.scale);

    stage.batchDraw();
  }

  rotateEndHandler() {
    this.isRotating = false;
  }

  render() {
    let selectedFloor = undefined;
    let staticPaintsBefore = undefined;
    let staticPaintsAfter = undefined;

    if (this.props && this.props.userOffice && this.props.user) {
      if (
        this.props.userOffice.floors &&
        Array.isArray(this.props.userOffice.floors) &&
        this.props.userOffice.floors.length > 0
      ) {
        selectedFloor = this.props.userOffice.floors.find(
          (floor) => floor.id === this.props.selections.selectedFloor
        );

        if (!selectedFloor) {
          selectedFloor = this.props.userOffice.floors[0];
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
    // const StaticPainterHOC = checkPropsEmpty(StaticPainter);
    const grpWidth = 1024;
    const grpHeight = 446;
    console.log(this.props);
    return (
      <MapSection>
        <InnerContainer>
          <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            ref={this.stageRef}
          >
            <Layer ref={this.layerRef} key={this.layerRef}>
              <Group width={grpWidth} height={grpHeight} ref={this.groupRef}>
                {staticPaintsBefore && (
                  <StaticPainterHOC
                    staticPaints={staticPaintsBefore}
                    key={staticPaintsBefore}
                  />
                )}

                {selectFloor && (
                  <React.Fragment>
                    <AreaMap
                      openModal={this.props.openModal}
                      floor={selectedFloor}
                      areaArray={this.props.selections.selectedArea}
                      selectArea={this.props.onselectArea}
                      room={this.props.selections.selectedRoom}
                      onselectRoom={this.props.onselectRoom}
                    />
                    <FloorRooms
                      floor={selectedFloor}
                      room={this.props.selections.selectedRoom}
                      onselectRoom={this.props.onselectRoom}
                    />
                  </React.Fragment>
                )}
                {staticPaintsAfter && (
                  <StaticPainterHOC staticPaints={staticPaintsAfter} />
                )}
              </Group>
            </Layer>
          </Stage>
        </InnerContainer>
      </MapSection>
    );
  }
}
MapContent.propTypes = {
  selections: PropTypes.object,
  userOffice: PropTypes.object,
  user: PropTypes.object,
  onselectRoom: PropTypes.func,
  onselectArea: PropTypes.func,
  openModal: PropTypes.func,
};
const mapStateToProps = (state, event) => {
  return {
    userOffice: state.fetchUserOffice.userOffice,
    user: state.fetchUser.user,
    selections: state.selection,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onselectRoom: (id, e) => dispatch(selectRoom(id, e)),
  onSelectFloor: (id, e) => dispatch(selectFloor(id, e)),
  onselectArea: (id, e) => dispatch(selectArea(id, e)),
  onFetchUserOffice: () => dispatch(fetchUserOffice),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContent);
