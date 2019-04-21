import React, { Component } from 'react';
import DataTabs from './DataTabs';

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
        <DataTabs></DataTabs>
      </div>
    )
  }

}

export default App;
