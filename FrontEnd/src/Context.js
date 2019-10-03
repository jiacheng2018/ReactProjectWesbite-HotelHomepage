import React from 'react';
import { Component } from 'react';
import items from './Data/data';
const RoomContext=React.createContext();
class RoomProvider extends Component {
    state={
       rooms:[],
       sortedRoom:[],
       featuredRoom:[],
       loading:true
    }
    //slug
    getRoom=(slug)=>{
        let tempRooms=[...this.state.rooms];
        const rooms=tempRooms.find(room=>room.slug===slug)
        return rooms;
    }
    //
    componentDidMount(){
        let rooms=this.formatData(items)
        let featureRooms=rooms.filter(room=>room.featured===true)
        this.setState({
            rooms,
            featureRooms,
            sortedRoom:rooms,
            loading:false
        })
    }
    
    formatData(items){
        let tempItems=items.map(item=>{
           let id=item.sys.id
           let images=item.fields.images.map(image=>image.fields.file.url)
           let room={...item.fields,images,id}
           return room;
        })
        return tempItems
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer=RoomContext.Consumer;
export {RoomConsumer,RoomProvider,RoomContext}
