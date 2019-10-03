import axios from 'axios';
import {fetch_user} from './action'
export const fetchUser=()=>{
  return function (dispatch){
    axios.get('/api/current_user')
         .then(res=>dispatch({type:fetch_user,playload:res}));
  }
}