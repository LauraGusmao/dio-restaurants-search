import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
// import Slider from "react-slick";
import MaterialIcon from '@material/react-material-icon';

import { Card, RestaurantCard, Modal, Map } from '../../components';
import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, selectedRestaurant } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    };
  };

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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
              onKeyPress={ handleKeyPress }
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel { ...settings }>
            { restaurants.map((restaurant) => (
              <Card
                key={ restaurant.place_id }
                photo={ restaurant.photos ? restaurant.photos[0].getUrl() : restaurante }
                title={ restaurant.name }
              />
            )) }
          </Carousel>
        </Search>
        { restaurants.map((restaurant) => (
          <RestaurantCard onClick={ () => handleOpenModal(restaurant.place_id) } restaurant={ restaurant } />
        )) }
      </Container>
      <Map query={ query } placeId={ placeId } />
      <Modal open={ modalOpened } onClose={ () => setModalOpened(!modalOpened) }>
        <ModalTitle>{ selectedRestaurant?.name }</ModalTitle>
        <ModalContent>{ selectedRestaurant?.formatted_phone_number }</ModalContent>
        <ModalContent>{ selectedRestaurant?.formatted_address }</ModalContent>
        <ModalContent>{ selectedRestaurant?.opening_hours?.open_now ? 'Aberto' : 'Fechado' }</ModalContent>
      </Modal>
    </Wrapper>
  );
};

export default Home;
