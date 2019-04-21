import React, { Component } from 'react';
import logo from './logo.svg';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PlayerStats from './PlayerStats';


class DataTabs extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
    };
  }

  render(){
    return(
    <Tabs
      id="controlled-tab-example"
      activeKey={this.state.key}
      onSelect={key => this.setState({ key })}
    >
      <Tab eventKey="players" title="All Player Stats">
        <PlayerStats/>
      </Tab>
      <Tab eventKey="teams" title="Team Stats">
      </Tab>
      <Tab eventKey="" title="Players By Team">
      </Tab>
    </Tabs>    );
  }

}

export default DataTabs;
