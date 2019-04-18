import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/ImageInfo.scss';
import { ImageChangeState, ShowInfoState } from '../../actions';
import CssSizeInfo from './CssSizeInfo';

class ImageInfo extends Component {

  imageSize = () => {
    var img = new Image();
    img.src = this.props.image.imageUrl;
    img.onload = () => {
      this.props.ImageChangeState({
        width: img.width,
        height: img.height
      })
      this.props.ShowInfoState({
        show: true
      })
    };
  }

  render() {
    return (
      <div className="imageInfo">
        <img src={ this.props.image.imageUrl } onLoad={ () => this.imageSize() } alt=""/>
        <div className="imageInfo__number">
          <CssSizeInfo />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    image: state.ImageUrlReducer 
  }
}
export default connect(mapStateToProps, { ImageChangeState: ImageChangeState, ShowInfoState: ShowInfoState })(ImageInfo);
