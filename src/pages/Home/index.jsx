import React, { useState } from 'react';
import { Container, Search, Logo, Wrapper, Map } from './styles';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';

const Home = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={ logo } alt="Logo do App" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
            <Input
              value={ inputValue }
              onChange={(e) => setInputValue(e.target.value) }
            />
          </TextField>
        </Search>
      </Container>
      <Map>
        oi
      </Map>
    </Wrapper>
  );
};

export default Home;
