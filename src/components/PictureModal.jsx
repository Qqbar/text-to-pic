import React, { Component } from 'react';

class PictureModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var modalStyles = {
      display: this.props.show ? "block" : "none",
    }

    var myModalStyles = {
      width: "470px"
    }

    var myCanvasStyles = {
      width: "450px",
      height: "250px"
    }

    return (

      <div className="w3-modal"
           style={ modalStyles } >
        <div className="w3-modal-content w3-animate-left w3-card"
             style = { myModalStyles }>
          <span onClick={ this.props.onHidePictureModal}
                className="w3-button w3-display-topright">&times;
          </span>
          <div id="myCanvasDiv"
               style={ myCanvasStyles }></div>
        </div>
      </div>

    );
  }
}

export default PictureModal;
