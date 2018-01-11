import React, { Component } from 'react';
import { Textfit } from 'react-textfit';

import html2canvas from 'html2canvas';

class TextWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ``,
      isSerif: false,
      isInvert: false,
      isJustify: false,
      currentTextSize: "100%",
      specialStyle: ''
    }
  }

  _toggleSerif = (event) => {
    this.setState({ isSerif: !this.state.isSerif });
  }

  _toggleInvert = (event) => {
    this.setState({ isInvert: !this.state.isInvert });
  }

  _toggleJustify = (event) => {
    this.setState({ isJustify: !this.state.isJustify });
  }

  _updateSpecialStyle = (event) => {
    console.log(event.target.value);
  }

  _updateInputText = (event) => {
    this.setState({ inputText: event.target.value });
  }

  _onCreateButtonClick = (event) => {
    var textElement = document.getElementById("myText");
    var targetCanvas = document.getElementById("myCanvasDiv")
    targetCanvas.innerHTML = '';
    html2canvas(textElement).then((canvas) => {
        targetCanvas.appendChild(canvas);
        this.props.onShowPictureModal();
    });
  }

  render() {

    var containerStyles = {
      marginTop: "10%"
    }

    var textBoxStyles = {
      height: "250",
      width: "470",
      padding: "25px",
      fontSize: `${this.state.currentTextSize}`,
      resize: "none",
      overflow: "hidden",
      textAlign: this.state.isJustify ? "justify" : "left",
      textJustify: this.state.isJustify ? "distribute" : "none",
      fontFamily: this.state.isSerif ? "'Roboto Slab', serif" : "'Open Sans', sans-serif"
    }

    var textOutputStyle = {

      height: 250,
      maxWidth: 430,
      lineHeight: 1.1,
      padding: "10px",
      textAlign: this.state.isJustify ? "justify" : "left",
      textJustify: this.state.isJustify ? "distribute" : "none",
      fontFamily: this.state.isSerif ? "'Roboto Slab', serif" : "'Open Sans', sans-serif"
    }

    var createButtonStyles = {
      fontSize: "24pt",
      marginLeft: "0px",
      marginRight: "5px",
      overflow: "hidden",
    }

    var serifButtonStyles = {
      fontSize: "24pt",
      fontFamily: this.state.isSerif ? "serif" : "'Open Sans', sans-serif",
      marginLeft: "0px",
      marginRight: "5px",
      backgroundColor: this.state.isSerif ? "gray" : "white",
      color: this.state.isSerif ? "white" : "black",
    }

    var justifyButtonStyles = {
      fontSize: "24pt",
      fontFamily: this.state.isSerif ? "serif" : "'Open Sans', sans-serif",
      marginLeft: "0px",
      marginRight: "5px",
      overflow: "hidden",
      backgroundColor: this.state.isJustify ? "gray" : "white",
      color: this.state.isJustify ? "white" : "black",
    }

    var specialButtonStyles = {
      marginLeft: "0px",
      marginRight: "6px",
    }

    return (
      <div className="w3-card-2 w3-border w3-round"
           style={ containerStyles } >

        <div className="w3-container w3-white w3-border">
          <Textfit
            id="myText"
            mode="multi"
            style={ textOutputStyle }
            max={ 500 } >
            { this.state.inputText }
          </Textfit>
        </div>

        <div className="w3-border w3-white">
          <textarea
             className="w3-input"
             style={ textBoxStyles }
             placeholder="...type your text here"
             onChange={ this._updateInputText }
             value={ this.state.inputText } />
         </div>

        <div className="w3-cell-row">
          <div className="w3-container w3-cell w3-padding">

            <button className="w3-button w3-border"
                  onClick={ this._toggleSerif }
                  style={ serifButtonStyles }>Se
            </button>

            <button className="w3-button w3-border"
                  onClick={ this._toggleJustify }
                  style={ justifyButtonStyles }>Ju
            </button>
          </div>

          <div className="w3-container w3-cell w3-padding w3-right-align">

            <button className="w3-button w3-indigo"
                  style={ createButtonStyles }
                  onClick={ this._onCreateButtonClick }>fb
            </button>
          </div>
        </div>
      </div>

    );
  }
}

export default TextWindow;
