// This component is imported into FeatureRoom.js
import React from 'react';
import {Link} from "react-router-dom";
import defaultImage from '../images/room-1.jpeg';
import FeatureRoom from './FeatureRoom';
import PropTypes from 'prop-types';
export default function Room({room}){
  const {name,slug,images,price}=room;
  return (
    <article className="room">
       <div className="img-container">
         {/* image loading fallback */}
         <img src={images[0]||defaultImage} alt=""/>
         <div className='price-top'>
           <p>{price}</p>
           <p>Per night</p>
         </div>
        {/* <Link to={`/rooms/${slug}`} className="btn-primary room-linkw" /> */}
        <p className="room-info'">
          {name}
       </p>
       </div>
    </article>
  )
} 
Room.propTypes={
  room:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired  
  })
}