import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/UploadImage.scss';
import { ImageState } from '../../actions';

class UploadImage extends Component {
  imageChange = (e) => {
    let file  = e.target.files.item(0);
    let fr = new FileReader();
    fr.addEventListener('load', this.fileLoad);
    if (file){
      fr.readAsDataURL(file);
    }
  }

  fileLoad = (e) => {
    this.props.ImageState({
      imageUrl: e.target.result
    })
  }

  render() {
    return (
      <div >
        <div className="uploadImage">
          click here or drag here your images for preview and set userprofile_picture data
          <input type="file" className="input" onChange={ this.imageChange } />
        </div>
      </div>
    );
  }
}

export default connect('', {ImageState: ImageState})(UploadImage);
