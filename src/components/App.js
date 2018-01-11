import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import TextWindow from './TextWindow.jsx'
import PictureModal from './PictureModal.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPictureModal: false
    }
  }

  componentWillMount() {
    console.log(window.devicePixelRatio);
  }
  
  _onTogglePictureModal = (event) => {
    this.setState({ showPictureModal: !this.state.showPictureModal });
  }


  render() {
    var mainContainerStyles = {
      width: 470
    }

    return (
    <div>
      <div className="w3-cell-row">
        <div className="w3-container w3-cell w3-white w3-mobile"
             style={ mainContainerStyles }>
          <TextWindow onShowPictureModal={ this._onTogglePictureModal }/>
        </div>
      </div>

      <PictureModal show={ this.state.showPictureModal }
                    onHidePictureModal={ this._onTogglePictureModal }
                    id="myModal" />

    </div>
    );
  }
}

export default App;
