import React, { Component } from 'react';
import DataTabs from './DataTabs';
var Latex = require('react-latex');


class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
    };
  }

  render(){
    return (
      <div>
        <div style={{top: "50px"}}>
        <DataTabs></DataTabs>
        </div>
        <div style={{width: "40%", margin: "0 auto", top: "50px"}}>
        </div>
      </div>
    )
  }

}

export default App;
