import React,{Component} from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
export default class Services extends Component{
   state={
       services:[
           {
             icon:<FaCocktail/>,
             title:"Free Cocktail",
             Description:"Compare & Save on Your Next Flight with Helloworld Travel Best Value Travel Deals! Book Online. The Travel Professionals. Experts in the Industry. Largest Agency Network. Safe and Secure. No Online Booking Fees. Destinations: Europe, Asia, Pacific, North America."
           },
           {
            icon:<FaHiking/>,
            title:"Tied Cocktail",
            Description:"Compare & Save on Your Next Flight with Helloworld Travel Best Value Travel Deals! Book Online. The Travel Professionals. Experts in the Industry. Largest Agency Network. Safe and Secure. No Online Booking Fees. Destinations: Europe, Asia, Pacific, North America."
          },
          {
            icon:<FaShuttleVan/>,
            title:"Morning",
            Description:"Compare & Save on Your Next Flight with Helloworld Travel Best Value Travel Deals! Book Online. The Travel Professionals. Experts in the Industry. Largest Agency Network. Safe and Secure. No Online Booking Fees. Destinations: Europe, Asia, Pacific, North America."
          },
          {
            icon:<FaBeer/>,
            title:"Morning",
            Description:"Compare & Save on Your Next Flight with Helloworld Travel Best Value Travel Deals! Book Online. The Travel Professionals. Experts in the Industry. Largest Agency Network. Safe and Secure. No Online Booking Fees. Destinations: Europe, Asia, Pacific, North America."
          }
       ]
   }
   render(){
       return(
          <section className="services">
              <Title title="services" />
              <div className="services-center">
                  {this.state.services.map((item,index)=>{
                     return(                 
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.Description}</p>
                        </article>
                     )
                  })}
              </div>
          </section>
       );
   }
}