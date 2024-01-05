import React from 'react';
import { Link } from "react-router-dom";

// Component to display a single album in a card format
const List = (props) => {

  return (
    // Unordered List using to show Album list
    <ul className="list-group list-group-horizontal-md">
      <li className="list-group-item">
        {/* Card component to display album details */}
        <div className="card text-bg-light mb-3" style={{ 'width': '18rem' }}>
          <div className="card-body">
            {/* Display album title */}
            <p className="card-text"> <h3>{props.album.title}</h3></p>
          </div>
          <div className="card-body d-flex justify-content-between">
            {/* Link to navigate to the update album page and pass the current album to setUpdateAlbum function */}
            <Link to="/update-album">
              <button className="btn btn-primary px-4" onClick={() => props.setUpdateAlbum(props.album)}>Update</button>
            </Link>
            {/* Button to delete the current album from the list */}
            <button className='btn btn-danger  ml-0' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default List;
