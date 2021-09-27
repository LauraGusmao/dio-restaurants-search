import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'
import Skeleton from '../Skeleton';

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={ onClick }>
      <RestaurantInfo>
        <Title>{ restaurant.name }</Title>
        <ReactStars
          count={ 5 }
          edit={ false }
          value={ restaurant.rating }
          isHalf
          activeColor="#e7711c"
        />
        <Address>{ restaurant.vicinity || restaurant.formatted_address }</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={ imageLoaded }
        src={ restaurant.photos ? restaurant.photos[0].getUrl() : restaurante }
        alt="Foto do Restaurante"
        onLoad={ () => setImageLoaded(true) }
      />
      { !imageLoaded && <Skeleton width="100px" height="100px" /> }
    </Restaurant>
  );
};

export default RestaurantCard;
