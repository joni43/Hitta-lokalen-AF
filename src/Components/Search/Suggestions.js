import React from 'react';
import PropTypes from 'prop-types';

export const Suggestions = ({
  inputField,
  result,
  onClickSuggest,
  suggestions
}) => {
  if (inputField.length === 0 || suggestions === false) {
    return null;
  }
  const filterRoom = result.filter(room => room.name.includes(inputField));
  console.log(filterRoom, 'filterRoom');
  const options = filterRoom.map(room => (
    <li key={room.name} onClick={() => onClickSuggest(room)}>
      {room.name} {room.description}
    </li>
  ));
  return <ul className='suggestions'>{options}</ul>;
};
Suggestions.propTypes = {
  inputField: PropTypes.string,
  onClickSuggest: PropTypes.func,
  onsearchRoom: PropTypes.func,
  result: PropTypes.array,
  suggestions: PropTypes.bool
};
