import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import AddAlbum from './AddAlbum.js';
import AlbumsList from './AlbumList';
import UpdateAlbum from './UpdateAlbums.js';
import { toast } from 'react-toastify';

export default class App extends Component {
  constructor() {
    super();
    // Initialize the component state
    this.state = {
      albums: [],         // Array to store albums fetched from the API
      updateAlbum: {},    // Object to store the album being updated
    };
  }

  // Fetch albums from the API when the component mounts
  componentDidMount = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return json;
      });

    // Set the fetched albums in the component state
    this.setState({
      albums,
    });
  }

  // Function to delete an album from the list and update the state
  deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE' });

    // Filter out the deleted album from the current state
    const newAlbums = this.state.albums.filter((album) => album.id !== id);

    // Display a success toast message
    toast.success('Your Album Deleted successfully From The List');

    // Update the component state with the new album list
    this.setState({
      albums: newAlbums,
    });
  }

  // Function to set the album to be updated in the state
  setUpdateAlbum = async (album) => {
    this.setState({
      updateAlbum: album,
    });
  }

  // Function to update an album in the list
  updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];

    if (id < 100) {
      // If the album id is less than 100, update the album via API call
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      // If the album id is 100 or more, update it locally without API call
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle,
      };
    }

    // Update the album in the state
    albums[index] = updatedAlbum;

    // Display a success toast message
    toast.success('Album Updated Successfully');

    // Update the component state with the new album list
    this.setState({
      albums: albums,
    });
  }

  // Function to add a new album to the list
  addAlbumToList = (userId, title) => {
    // API call to add a new album
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);

    // Get the last id in the current list
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;

    // Create a new album object with the next id
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    };

    // Display a success toast message
    toast.success('New Album added successfully in the bottom!!');

    // Update the component state with the new album
    this.setState({
      albums: [...this.state.albums, album],
    });
  }

  render() {
    return (
      <>
        {/* Container for displaying toasts */}
        <ToastContainer />

        {/* Define routes for different components */}
        <Routes>
          {/* Route for displaying the list of albums */}
          <Route path='/' element={<AlbumsList albums={this.state.albums} setUpdateAlbum={this.setUpdateAlbum} deleteAlbumFromList={this.deleteAlbumFromList} />} />

          {/* Route for adding a new album */}
          <Route path='/add-album' element={<AddAlbum addAlbumToList={this.addAlbumToList} />} />

          {/* Route for updating an existing album */}
          <Route path='/update-album' element={<UpdateAlbum album={this.state.updateAlbum} updateAlbumInList={this.updateAlbumInList} />} />
        </Routes>
      </>
    );
  }
}
