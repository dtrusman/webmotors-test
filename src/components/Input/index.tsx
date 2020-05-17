import React, { useState } from 'react';
import { TiLocationOutline } from 'react-icons/ti';
import { IoMdCloseCircle } from 'react-icons/io';

import { ComboBox } from 'components';
import { grid } from 'utils/grid';

import {
  Container,
  Input as TextField,
  LocationIcon,
  CleanIcon,
  ComboboxContainer,
} from './styles';

const radius = [
  { label: '100km', value: 100 },
  { label: '200km', value: 200 },
  { label: '300km', value: 300 },
  { label: '400km', value: 400 },
  { label: '500km', value: 500 },
  { label: '600km', value: 600 },
  { label: '700km', value: 700 },
];

export const Input = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container className={grid(6)}>
      <LocationIcon>
        <TiLocationOutline size={25} />
      </LocationIcon>
      <TextField>
        <span>Onde: </span>
        <input value={text} onChange={handleChange} />
      </TextField>
      <CleanIcon onClick={() => setText('')}>
        <IoMdCloseCircle size={20} />
      </CleanIcon>
      <ComboboxContainer>
        <ComboBox
          name="radius"
          options={radius}
          label="Raio"
          gender="o"
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
        />
      </ComboboxContainer>
    </Container>
  );
};
