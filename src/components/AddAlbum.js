import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  // Function to get data from the album form and call the addAlbumToList function
  // to add the new album to the list
  const getDataAlbumForm = () => {
    // Get user input for userId and title
    const userId = document.getElementById('userid-inp').value;
    const title = document.getElementById('title-inp').value;
    
    // Call the addAlbumToList function from props to add the new album
    props.addAlbumToList(Number(userId), title);
  }

  return (
    <>
      {/* Navbar component for navigation */}
      <Navbar path="/" page="Home" />

      {/* Add Albums Form To add Album list */}
      <div className='row '>
        <div className='col-md-4 shadow mx-auto p-5 add-album-container'>
          <form className='text-center  '>
            <div className="mb-3">
              <h4>Enter New Album Details</h4>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label"> Enter  UserId :</label>
                <input type="number" className="form-control" id='userid-inp'/>
              </div>

              <label htmlFor="exampleInputEmail1" className="form-label">  Enter Album Title :</label>
              <input type="text" className="form-control" id='title-inp' aria-describedby="emailHelp"/>  
              {/* Link to navigate back to the home page */}
              <Link to='/'>
                {/* Button to trigger the getDataAlbumForm function */}
                <button onClick={getDataAlbumForm} className="btn btn-primary mt-5">Add To List</button> 
              </Link>
            </div>
          </form> 
        </div>
      </div>
    </>
  )
}

export default AddAlbum;
