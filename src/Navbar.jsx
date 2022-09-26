import React, { Component } from 'react'
import { Fragment } from 'react'
import "./navbar.css"

 class navbar extends Component {
  render() {
    return (
   <Fragment>
       <div id='Navbar'>

<div>
    <h3 id='title'>L.S.C.C</h3>
</div>

<div>
    <input type="text" placeholder='Search'  id='search'></input>
    <input type="submit" value="submit" id='submit'></input>
    
</div>


<div>
   <a href="#"> HOME</a>
   <div class="btn-group">
    <button type="button" class="btn btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="drop-button">
      POSITION
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">STAFF</a></li>
      <li><a class="dropdown-item" href="#">NON-STAFF</a></li>
      <li><a class="dropdown-item" href="#">INMATE</a></li>
    </ul>
  </div>
 
</div>
</div>
   </Fragment>
    )
  }
}

export default navbar