import React, { Component, Fragment } from 'react'
import "./map.css"
import img13 from "../src/images/image13.jpg"
import img14 from "../src/images/image14.jpg"
import img15 from "../src/images/image15.jpg"
import img16 from "../src/images/image16.jpg"

 class Map extends Component {
  render() {
    this.state = [
        {name:"Anthony", age:"50years" , Location:"Iyana-Ipaja", photo:img13,dob:"01-12-1972"},
        {name:"Bashiru", age:"49years" , Location:"Ojota",photo:img14,dob:"01-12-1973"},
        {name:"Samson", age:"40years" , Location:"Yaba", photo:img15, dob:"01-12-1980"},
        {name:"Tunde", age:"30years" , Location:"Bariga", photo:img16, dob:"01-12-1990"}
    ]
    return (
      <div>
        {this.state.map(userInfo => {
            return(
                <Fragment>
                 
                    <div id='tony'>
                    <div>
                    <img src={userInfo.photo} id="idx"></img>
                  </div>
                     <p> Name:{userInfo.name} </p> 
                    <p> Age:{userInfo.age}</p>
                    <p> Location:{userInfo.Location}</p>
                    <p> Date-of-birth:{userInfo.dob}</p>
                    </div>
                    <p></p>
                  
                </Fragment>
                   
            )
        })}
      </div>
    )
  }
}

export default Map