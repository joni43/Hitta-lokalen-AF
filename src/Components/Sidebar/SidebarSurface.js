import React from 'react';
import PropTypes from 'prop-types';

import {
  SidebarSurfaceContainer,
  SurfacesContainer,
  LabelContainer,
  HiddenInput,
  SpanCheckmark,
  Scroll
} from './Sidebar-styles';

export const SidebarSurface = ({ areas, selectArea, selectCheckbox }) => {
  let listItems = undefined;
  if (areas) {
    listItems = areas.map(area => (
      <LabelContainer id={area.id} key={area.id}>
        <span key={area.name}>{area.name}</span>
        <HiddenInput
          onClick={() => selectArea(area.id)}
          type='checkbox'
          className='select_area'
        />
        <SpanCheckmark
          checked={selectCheckbox.includes(area.id) ? true : false}
          typeId={area.id}
          className='checkmark'
        />
      </LabelContainer>
    ));
  }
  return (
    <Scroll>
      <SidebarSurfaceContainer>
        <h2>Färglägg Ytor</h2>
        <SurfacesContainer>{listItems}</SurfacesContainer>
      </SidebarSurfaceContainer>
    </Scroll>
  );
};
SidebarSurface.propTypes = {
  areas: PropTypes.array,
  selectArea: PropTypes.func,
  selectCheckbox: PropTypes.array
};
