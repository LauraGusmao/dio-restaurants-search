import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'

import restaurant from '../../assets/restaurante-fake.png'

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome</Title>
        <ReactStars
          count={ 5 }
          edit={ false }
          value={ 4 }
          isHalf
          activeColor="#e7711c"
        />
        <Address>Nome</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={ restaurant } alt="Foto do Restaurante" />
    </Restaurant>
  );
};

export default RestaurantCard;
