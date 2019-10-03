import React ,{Component,Fragment} from 'react';
import CarouselContent from './CarouselContent';
import { makeStyles } from '@material-ui/styles';
import data from '../Data/data2'
import '../style/RoomPage.scss'
import Button from '@material-ui/core/Button'
const useStyles=makeStyles({
    button1:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
})
function Button1(){
    return(
      <div>hello</div>
    )
}
class Carousel extends Component{
    constructor(props){
      super(props);
      this.state={
          properties:data.properties,
          property:data.properties[0]
      }
    }
    nextProperty=()=>{
        const index=this.state.property.index+1;
        this.setState({
            property:data.properties[index]
        })
    }
    prevProperty=()=>{
        const index=this.state.property.index-1;
        if(index==-1){
            return;
        }
        this.setState({
            property:data.properties[index]
        })
    }

    render(){
        const {properties,property}=this.state;
        return(
            <Fragment>
                <Button color="primary" onClick={()=>this.nextProperty()} disabled={property.index===data.properties.length-1}>
                        Next
                </Button>
                <Button color="primary" onClick={()=>this.prevProperty()} disabled={data.properties.index===0}>
                        Prev
                </Button>
                <div className="page">
                    <div className={`cards-slider active-slide-${property.index}`}>
                        <div className="cards-slider-wrapper" style={{
                            'transform':`translateX(-${property.index*(100/properties.length)}%)`
                        }}>
                            {
                                properties.map(property=><CarouselContent id={property._id} property={property} />)
                            }
                                
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
} 
export default Carousel;