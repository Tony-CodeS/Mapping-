import React, { Component } from 'react'
import Map from './map';
import Map2 from './map2';
import Map3 from './map3';
import Map4 from './map4';
import "./App.css";
import Navbar from './navbar';
import Carousel from './carousel';
import Describe from './describe';


class App extends Component {
  render() {
    return (
   <div>
        <Navbar/>
        <Carousel/>
        <Describe/>
       <div id='sty'>
        <Map/>
         <Map2/>
        <Map3/>
        <Map4/> 
      </div>
   </div>
      
    )
  }
}

export default App;