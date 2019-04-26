import React, { Component } from 'react';
import logo from './logo.svg';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PlayerStats from './PlayerStats';
import TeamStats from './TeamStats';


class DataTabs extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'players',
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
        <TeamStats/>
      </Tab>
    </Tabs>    );
  }

}

export default DataTabs;
