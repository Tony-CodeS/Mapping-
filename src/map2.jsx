import React, { Component, Fragment } from 'react'
import "./map.css"
import img9 from "../src/images/tony.jpg"
import img10 from "../src/images/image9.jpg"
import img11 from "../src/images/image10.jpg"
import img12 from "../src/images/image11.jpg"

 class map2 extends Component {
  render()
   {
    this.state = [  {name:"Anthony", age:"50years" , Location:"Iyana-Ipaja", photo:img9,   dob:"01-12-1972"},
    {name:"Bashiru", age:"49years" , Location:"Ojota", photo:img10,  dob:"01-12-1973"},
    {name:"Samson", age:"40years" , Location:"Yaba", photo:img11,  dob:"01-12-1980"},
    {name:"Tunde", age:"30years" , Location:"Bariga",photo:img12  ,dob:"01-12-1990"}]
    return (
      <div>
        {this.state.map(user =>{
            return(
            <Fragment>
                   <div id='tony'>
                    <div> 
                      <img src={user.photo}></img>
                    </div>
                    <p>Name:{user.name}</p>
                    <p>Age:{user.age}</p>
                    <p>Location:{user.Location}</p>
                    <p>Date-of-birth:{user.dob}</p>
                  
                </div>
                <p></p>
            </Fragment>
            
            )     
        })}
      </div>
    )
  }
}

export default map2