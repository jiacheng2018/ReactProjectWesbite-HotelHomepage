// This Component is imported into FeatureRoom.js
import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'
import FeatureRoom from './FeatureRoom';
export default function Loading() {
    return (
        <div className="loading"> 
            <h4>room data loading...</h4>
             <img src={loadingGif} alt=""/>
        </div>
    )
}
