import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading'
import Title from './Title';
import Room from './Room';
export default class FeatureRoom extends Component {
    static contextType=RoomContext
    render() {
        let {loading,rooms}=this.context;
        rooms=rooms.map(room=>{
            return <Room key={room.id} room={room} />
        })
        return (
             <section className="featured-rooms">
                  <Title title="FEATURED ROOMS" />
                  <div className="featured-rooms-center">
                     {loading?<Loading />:rooms}
                  </div>
            
             </section>
        )
    }
}
