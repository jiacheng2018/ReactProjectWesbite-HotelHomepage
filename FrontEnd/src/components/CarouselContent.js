import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
const Card=({property})=>{
    // Notice this is { } here
  const {index,price, picture,city,address,bedrooms,bathrooms,carSpaces}=property;
  return(
      <div id={`card-${index}`} className="card">
          <img src={picture} alt={city}/>
          <div className="details">
               <span className="index indexTitle">{index+1}</span>
               <p className="location">
                   {city} <br/>
                   {address}
               </p>
               <ul className="apart_features">
                     <li className="icon-bed">{bedrooms}<span>bedrooms<i class="fas fa-bed fa-2x"></i></span></li>
                     <li className="icon icon-bath">{bathrooms}<span>bathrooms<i class="fas fa-toilet fa-2x"></i></span></li>
                     <li className="icon icon-car">{carSpaces}<span>Parking<i class="fas fa-car fa-2x"></i></span></li>
               </ul>
          </div>
      </div>
  )
} 
Card.propTypes = {
    property: PropTypes.object.isRequired
}
export default Card;

