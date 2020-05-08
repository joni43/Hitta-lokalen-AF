import React from 'react';
import { SearchMenu, Sidebar, Footer } from '../../Components/index';

export const checkPropsEmpty = (Component) => (props) => {
  let officeFloors = undefined;
  let officeArea = undefined;

  if (props && props.userOffice && props.user) {
    if (
      props.userOffice.floors &&
      Array.isArray(props.userOffice.floors) &&
      props.userOffice.floors.length > 0
    ) {
      officeFloors = props.userOffice.floors;
      officeArea = props.userOffice.areaTypes.map((area) => area);
    }
  }

  return <Component {...props} officeArea={officeArea} floor={officeFloors} />;
};

export const FooterHOC = checkPropsEmpty(Footer);
export const SidebarHOC = checkPropsEmpty(Sidebar);
export const SearchMenuHOC = checkPropsEmpty(SearchMenu);
