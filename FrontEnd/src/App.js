import React,{Component} from 'react';
import './style/App.scss';
import './style/signup.scss'
import Error from './pages/Error';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Room from './pages/Room';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Route,Switch} from 'react-router-dom'
class App extends Component {
  componentDidMount(){
   this.props.fetchUser();
  }
  render(){
    return <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms" component={SingleRoom}/>
                <Route exact path="/rooms/:slug" component={SingleRoom}/>
                <Route exact path="/signup" component={SignUp}/>
                {/* <Route component={Error}/> */}
            </Switch>
          </>
      }
}

export default connect(null,actions)(App);
