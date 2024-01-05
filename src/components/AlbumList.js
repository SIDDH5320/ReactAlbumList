import React from 'react';
import List from './List';
import Navbar from './Navbar';

// Component to display the list of albums
// It receives the albums, setUpdateAlbum, and deleteAlbumFromList functions as props from the parent component
const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar component for navigation */}
      <Navbar page="Add Albums" path="/add-album" />

      {/* Container for the list of albums */}
      <div className='albums-list'>
        {/* Map over each album in the albums prop and render the List component for each */}
        {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
      </div>
    </>
  )
}

export default AlbumsList;
