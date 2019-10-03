import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
import Hero from '../components/Hero';
import Service from '../components/Services'
import Banner from '../components/Banner';
import GoogleMap from '../components/googleMap';
import Ajax from '../components/ReceiveAjax.js';
import FeatureRoom from '../components/FeatureRoom';
export default function Home(){
    return(
    <>
        <Hero>
            <Banner title="luxurious" subtitle="deluxe rooms starting from 1989">
                <Link to='/rooms' className="btn-primary">
                    Click to Continue
                </Link>
            </Banner>
        </Hero>
        <Service/>
        <FeatureRoom />
        <GoogleMap/>
    </>
   );
}
