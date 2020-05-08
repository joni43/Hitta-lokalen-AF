import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  searchRoom,
  selectFloor,
  selectRoom,
  selectArea,
  floorChanged,
  addressChanged,
} from '../../Store/actions/user-actions';
import { fetchUserOffice } from '../../Store/actions/Data';
import { FooterHOC, SidebarHOC, SearchMenuHOC } from './HOC';
import { Overlay, MapContent } from '../index';
import { Header, Modal } from '../../Components/index';
import { LayoutContainer, InnerContainer } from './Layout-styles';

const Layout = (props) => {
  // Hide interface
  const [hidden, isHidden] = useState(false);
  const [title, setTitle] = useState('');

  // Open sideMenu
  const [sidebarClass, SetsidebarClass] = useState('sidebar');
  const [active, isActive] = useState('overlay');
  const [open, isOpen] = useState(false);

  // Open Modal
  const [modalClass, SetModalClass] = useState('modal');
  const [modal, modalOpen] = useState(false);
  const [errorArea, setArea] = useState(null);

  const hideInterface = () => {
    const toggleValue = !hidden;
    const headerTitle = 'is-hidden';

    isHidden(toggleValue);

    toggleValue === true ? setTitle(headerTitle) : setTitle('');
  };
  const OpenSideBar = () => {
    const toggleValue = !open;

    isOpen(toggleValue);

    if (toggleValue === true) {
      SetsidebarClass('sidebar is-open');
      isActive('overlay is-active');
    } else {
      SetsidebarClass('sidebar');
      isActive('overlay');
    }
  };

  const openModal = (area, index) => {
    const toggleValue = !modal;

    modalOpen(toggleValue);

    if (toggleValue === true) {
      SetModalClass('modal is-open');
      setArea(area);
    } else {
      SetModalClass('modal');
    }
  };

  // const HMapContent = checkPropsEmpty(MapContent);

  return (
    <LayoutContainer>
      <InnerContainer>
        <Header title={title} OpenSideBar={OpenSideBar} />
        <SearchMenuHOC {...props} title={title} />

        <MapContent
          selectFloor={props.onSelectFloor}
          openModal={(state, index) => openModal(state, index)}
          modalClass={modalClass}
        />
        <Modal
          modalClass={modalClass}
          openModal={(state) => openModal(state)}
          areas={props.userOffice}
          selectAreas={errorArea}
        />
        <FooterHOC
          selectFloor={props.onSelectFloor}
          floorChanged={props.onFloorChanged}
          selections={props.selections}
          user={props.user}
          userOffice={props.userOffice}
          floor={props.officeFloors}
          hideInterface={() => hideInterface()}
        />
      </InnerContainer>

      <Overlay className={active} OpenSideBar={(state) => OpenSideBar(state)} />
      <SidebarHOC
        className={sidebarClass}
        user={props.user}
        userOffice={props.userOffice}
        offices={props.offices}
        officeArea={props.officeArea}
        floor={props.officeFloors}
        selections={props.selections}
        selectArea={props.onSelectArea}
        selectCheckbox={props.selections.selectedArea}
        OpenSideBar={(state) => OpenSideBar(state)}
        onfetchUserOffice={props.onfetchUserOffice}
        onaddressChanged={props.onaddressChanged}
      />
    </LayoutContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    userOffice: state.fetchUserOffice.userOffice,
    offices: state.fetchOffices,
    user: state.fetchUser.user,
    selections: state.selection,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSelectFloor: (id, e) => dispatch(selectFloor(id, e)),
  onFloorChanged: (id, e) => dispatch(floorChanged(id, e)),
  addressChanged: (data) => dispatch(addressChanged(data)),
  onselectRoom: (id, e) => dispatch(selectRoom(id, e)),
  onSearchRoom: (id, e) => dispatch(searchRoom(id, e)),
  onSelectArea: (id, e) => dispatch(selectArea(id, e)),
  onfetchUserOffice: (data) => dispatch(fetchUserOffice(data)),
  onaddressChanged: (data) => dispatch(addressChanged(data)),
});
Layout.propTypes = {
  onaddressChanged: PropTypes.func,
  onfetchUserOffice: PropTypes.func,
  onSelectFloor: PropTypes.func,
  onSelectArea: PropTypes.func,
  onFloorChanged: PropTypes.func,
  selections: PropTypes.object,
  userOffice: PropTypes.object,
  user: PropTypes.object,
  offices: PropTypes.object,
  officeArea: PropTypes.array,
  officeFloors: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
