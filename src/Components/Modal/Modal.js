import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalSection,
  ModalContent,
  ModalHeader,
  ModalTitle,
  HeaderSidebarClose,
  ModalBody,
  ModalButton,
  Input,
  Span,
  Select,
} from './Modal-styles';

export const Modal = ({ areas, selectAreas, modalClass, openModal }) => {
  const title = [];
  if (!areas) {
    return null;
  }

  const Floor = areas.floors.map((floor, i) => {
    return <option key={i}>{floor.title} </option>;
  });
  const AreaType = areas.areaTypes.map((area) => {
    if (area.id === parseInt(selectAreas)) {
      if (JSON.stringify(selectAreas).includes(area.id)) {
        return (
          <span key={area.id}>
            {area.name} {area.id}
          </span>
        );
      }
    } else {
      return null;
    }
    return null;
  });
  console.log(Floor);
  return (
    <ModalSection>
      <ModalContent className={modalClass}>
        <ModalHeader>
          <ModalTitle>
            Felanmälan
            <Span>{AreaType}</Span>
          </ModalTitle>

          <HeaderSidebarClose onClick={openModal}>
            <span>x</span>
          </HeaderSidebarClose>
        </ModalHeader>
        <ModalBody>
          <Select>{Floor}</Select>
          <Input></Input>
          <ModalButton onClick={openModal}>Skicka</ModalButton>
        </ModalBody>
      </ModalContent>
    </ModalSection>
  );
};

Modal.propTypes = {
  areas: PropTypes.object,
  selectAreas: PropTypes.string,
  modalClass: PropTypes.string,
  openModal: PropTypes.func,
};
