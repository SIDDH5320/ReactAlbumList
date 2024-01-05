import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {
  
  // Function to get updated data from the form and call the updateAlbumInList function
  const getUpdateData = () => {
    // Get album id, updated title, and updated user id from the form
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    // If the title input is empty, retain the original title
    if (updateTitle === '') {
      updateTitle = props.album.title;
    }

    // If the user id input is empty, retain the original user id
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }

    // Call the updateAlbumInList function from props to update the album
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      {/* Navbar component for navigation */}
      <Navbar path="/" page="Home" />
   
      {/* Form to update the album */}
      <div className='row '>
        <div className='col-md-4 shadow mx-auto p-5 update-album'>
          <form className='text-center'>
            <div className="mb-3">
              <h4>Title : {props.album.title}</h4>
              {/* Input field for entering a new title */}
              <label htmlFor="exampleInputEmail1" className="form-label">  Enter New Title :</label>
              <input type="text" className="form-control" id='title-inp' aria-describedby="emailHelp"/>   
              <div className="mb-3">
                <h4>User Id : {props.album.userId}</h4>
                {/* Input field for entering a new user id */}
                <label htmlFor="exampleInputPassword1" className="form-label"> Enter New UserId :</label>
                <input type="number" className="form-control" id='userid-inp'/>
              </div>
              <div className="mb-3 form-check">
                {/* Checkbox (not clear what it is for, as the id is duplicated) */}
                <input type="checkbox" className="form-check-input" id='title-inp'/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              {/* Link to navigate back to the home page */}
              <Link to='/'>
                {/* Button to trigger the getUpdateData function */}
                <button type="submit" onClick={getUpdateData} className="btn btn-primary">Update</button> 
              </Link>
            </div>
          </form> 
        </div>
      </div>
    </>
  )
}

export default UpdateAlbum;
