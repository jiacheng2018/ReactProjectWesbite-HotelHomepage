import React,{Component,Fragment} from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Subtotal from '../components/Subtotal';
const Room=()=>{
    return(
        <Fragment>
                <Hero className="roomsHero"/>
                <Carousel />
                <Subtotal />
        </Fragment>
    ) 
};
export default Room;