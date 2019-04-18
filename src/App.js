import React, { Component } from 'react';
import './App.css';
//import { connect } from 'react-redux';
import UploadImage from './components/js/UploadImage';
import ImageInfo from './components/js/ImageInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UploadImage />
        <ImageInfo />
      </div>
    );
  }
}

export default App;
