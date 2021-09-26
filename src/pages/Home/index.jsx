import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import Slider from "react-slick";
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';
import { Card } from '../../components';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

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
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel { ...settings }>
            <Card photo={ restaurante } title="Nome" />
            <Card photo={ restaurante } title="Nome" />
            <Card photo={ restaurante } title="Nome" />
            <Card photo={ restaurante } title="Nome" />
            <Card photo={ restaurante } title="Nome" />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
