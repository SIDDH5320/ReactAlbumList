import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = (props) => {

  return (
 
//  Navbar Component takes props for Every Component
<nav class="navbar " style={{"background-color": "#e3f2fd;"}}>
   <div class="container">
      <Link to="/">
        <i className="fa-sharp fa-solid fa-rectangle-vertical-history fa-bounce"></i> 
        <button className="btn btn-danger" >Album List</button>
      </Link>
      <Link to={props.path}><button className='btn btn-outline-danger'>{props.page}</button>
      </Link>
  </div>
</nav>


  )
}

export default Navbar