import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../ComponentCss/Search.css';
import {
  InnerContainer,
  SearchBar,
  SearchInput,
  SearchButton,
} from './Search-style';
import { Suggestions } from './Suggestions';
import { SearchIcon, SearchCrossIcon } from '../../assets/icons';

export const SearchMenu = ({
  floor,
  title,
  onselectRoom,
  onSearchRoom,
  selections,
  onSelectFloor,
}) => {
  const [inputField, setInputField] = useState('');
  const [InputTitle, setTitle] = useState('');
  const [crossClass, setCrossClass] = useState('no-search');
  const [result, setResult] = useState([]);
  const [suggestions, setSuggestions] = useState(false);

  const onClickSuggest = (suggest) => {
    setTitle('');
    setInputField(suggest.name + ' ' + suggest.description);

    selections.inputField = suggest.name + ' ' + suggest.description;
    setSuggestions(false);
  };

  const onChange = (e) => {
    setInputField(e.target.value);

    selections.inputField = e.target.value;
    setSuggestions(true);
    setTitle('');
  };

  useEffect(
    () => {
      if (suggestions === true && floor !== undefined && floor.length !== 0) {
        if (selections.inputField && selections.inputField.length >= 1) {
          // const allRooms = [...floor[0].rooms];
          let items = floor;
          let allRooms = [];
          const oficeRoom = items.map((key) => {
            // office.push(key.rooms, key.id);
            // key.rooms.push(key.id);

            key.rooms.forEach((room) => {
              for (const [key, value] of Object.entries(items)) {
                if (room.name.charAt(1) === JSON.stringify(value.id)) {
                  room['id'] = value.id;
                }
              }
            });
            return key.rooms;
          });

          for (var i = 0; oficeRoom.length !== 0; i++) {
            var j = 0;
            while (j < oficeRoom.length) {
              if (i >= oficeRoom[j].length) {
                oficeRoom.splice(j, 1);
              } else {
                allRooms.push(oficeRoom[j][i]);
                j += 1;
              }
            }
          }

          setResult(allRooms);
          setTitle('input-search');
        } else if (result !== selections.inputField) {
          setSuggestions(false);
          setCrossClass('no-search');
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputField, floor, selections.inputField, suggestions],
    [result]
  );

  const selectRoom = () => {
    const roomName = selections.inputField.split(' ').shift();
    if (roomName) {
      let selectedRoom;

      floor.forEach((currentFloor) => {
        const foundRoom = currentFloor.rooms.find(
          (room) => room.name === roomName
        );

        if (foundRoom) {
          selectedRoom = foundRoom;
        }
      });

      if (selectedRoom) {
        onselectRoom(selectedRoom.name);
        onSearchRoom(selections.inputField);
        onSelectFloor(selectedRoom.id);
      }
    }
  };
  useEffect(() => {
    if (selections.inputField && selections.inputField.length > 0) {
      setCrossClass('search-cross');
    }
  }, [selections.inputField]);
  const clearSeachField = () => {
    setInputField('');
    selections.inputField = '';
    setTitle('');
    setCrossClass('no-search');
  };

  return (
    <SearchBar className={title}>
      <InnerContainer>
        <SearchInput
          aria-label='Search'
          className={InputTitle}
          value={selections.inputField}
          onChange={onChange}
        />
        {SearchIcon}
        <div
          className={crossClass}
          onChange={onChange}
          onClick={clearSeachField}
        >
          {SearchCrossIcon}
        </div>
        <SearchButton onClick={() => selectRoom(inputField)}>Sök</SearchButton>
      </InnerContainer>

      <Suggestions
        suggestions={suggestions}
        result={result}
        onClickSuggest={onClickSuggest}
        inputField={inputField}
      ></Suggestions>
    </SearchBar>
  );
};

SearchMenu.propTypes = {
  title: PropTypes.string,
  onselectRoom: PropTypes.func,
  onSearchRoom: PropTypes.func,
  floor: PropTypes.array,
  selections: PropTypes.object,
};
