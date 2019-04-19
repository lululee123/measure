import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/CssSizeInfo.scss';

class CssSizeInfo extends Component {
  state = {
    web: 1920, 
    mobile: 1024,
  }

  isNormalInteger = (str) => {
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  }

  setWeb = (e) => {
    if ( this.isNormalInteger(e.target.value) ){
      this.setState({
        web: e.target.value
      })
    }
  }

  setMobile = (e) => {
    if ( this.isNormalInteger(e.target.value) ){
      this.setState({
        mobile: e.target.value
      })
    }
  }

  render() {
    if (this.props.showInfo){
      return (
        <div className="cssInfoBox">
          {/* <div className="cssInfoBox__input">
            <input placeholder="縮放界線(1920)" onChange={ this.setWeb} />
            <input placeholder="縮放界線(1024)" onChange={ this.setMobile} />
          </div> */}
          <div className="cssInfoBox__info">
            <div className="cssInfoBox__info_main">
              主圖：
              <div className="cssInfoBox__max">
                <div>width: { this.props.imageInfo.width }px</div>
                <div>height: { this.props.imageInfo.height }px</div>
              </div>
              <div className="cssInfoBox__web">
                <div>width: 100vw</div>
                <div>height: { ( ( this.props.imageInfo.height / this.props.imageInfo.width ) * 100).toFixed(2) }vw</div>
              </div>
              <div className="cssInfoBox__mobile">
                <div>width: 100vw</div>
                <div>height: { ( ( this.props.imageInfo.height / this.props.imageInfo.width ) * 100 ).toFixed(2) }vw</div>
              </div>
            </div>
            <div className="cssInfoBox__info_normal">
              元件：
              <div className="cssInfoBox__max">
                <div>width: { this.props.imageInfo.width }px</div>
                <div>height: { this.props.imageInfo.height }px</div>
              </div>
              <div className="cssInfoBox__web">
                <div>width: { ( ( this.props.imageInfo.width / this.state.web ) * 100 ).toFixed(2) }vw</div>
                <div>height: { ( ( this.props.imageInfo.height / this.state.web ) * 100).toFixed(2) }vw</div>
              </div>
              <div className="cssInfoBox__mobile">
                <div>width: { ( ( this.props.imageInfo.width / this.state.mobile ) * 100 ).toFixed(2) }vw</div>
                <div>height: { ( ( this.props.imageInfo.height / this.state.mobile ) * 100 ).toFixed(2) }vw</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return  ''
  }
}

const mapStateToProps = (state) => {
  return {
    imageInfo: state.ImageInfoReducer, 
    showInfo: state.ShowInfoStateReducer
  }
}
export default connect(mapStateToProps)(CssSizeInfo);