import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
function Map(){
    return(
        <GoogleMap
         defaultZoom={10}
         defaultCenter={{lat:45.212903,lng:-75.69}}
        />
    )
}
const MyMapComponent=withScriptjs(withGoogleMap(Map));
export default function googleMap(){
    return(
        <div>
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAPo-jntvk65-EFQsDHWHsHyDoRwrlRQUQ"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}