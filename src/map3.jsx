import React, { Component } from 'react'
import { Fragment } from 'react'
import "./map.css"
import img1 from "../src/images/image1.jpg"
import img2 from "../src/images/image2.jpg"
import img3 from "../src/images/image3.jpg"
import img4 from "../src/images/image4.jpg"

class map3 extends Component {
  render() {
    this.state = [ {name:"Anthony", age:"50years" , Location:"Iyana-Ipaja",photo:img2, dob:"01-12-1972"},
    {name:"Bashiru", age:"49years" , Location:"Ojota", photo:img1, dob:"01-12-1973"},
    {name:"Samson", age:"40years" , Location:"Yaba", photo:img3, dob:"01-12-1980"},
    {name:"Tunde", age:"30years" , Location:"Bariga", photo:img4, dob:"01-12-1990"}
    ]
  
  
    return (
      <div>
        {this.state.map(info =>{
            return(
               <Fragment>
                 <div id='tony'>
               <img src= {info.photo}></img>
                     <p>Name:{info.name}</p> 
                    <p>Age:{info.age}</p>
                    <p>Location:{info.Location}</p>
                    <p>Date-of-birth:{info.dob}</p>
                </div>
                <p></p>
               </Fragment>
        
            )
        })}
      </div>
    )
  }
}

export default map3