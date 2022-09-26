import React, { Component, Fragment } from 'react'
import "./map.css"
import img5 from "../src/images/image5.jpg"
import img6 from "../src/images/image6.jpeg"
import img7 from "../src/images/image7.jpg"
import img8 from "../src/images/image8.jpg"

 class map4 extends Component {
  render()
   {
    this.state = [  {name:"Anthony", age:"50years" , Location:"Iyana-Ipaja", photo:img5, dob:"01-12-1972"},
    {name:"Bashiru", age:"49years" , Location:"Ojota",photo:img6, dob:"01-12-1973"},
    {name:"Samson", age:"40years" , Location:"Yaba",photo:img7, dob:"01-12-1980"},
    {name:"Tunde", age:"30years" , Location:"Bariga",photo:img8,  dob:"01-12-1990"}]
    return (
      <div>
        {this.state.map(user =>{
            return(
              <Fragment>
                   <div id='tony'>
                  <img src={user.photo}></img>
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



export default map4