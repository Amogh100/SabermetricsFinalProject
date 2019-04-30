import React, { Component } from 'react';
import logo from './logo.svg';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PlayerStats from './PlayerStats';
import TeamStats from './TeamStats';
import AboutPage from './AboutPage';
import CorrelationView from './CorrelationView';


class DataTabs extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'about',
    };
  }

  render(){
    return(
    <Tabs
      id="controlled-tab-example"
      activeKey={this.state.key}
      onSelect={key => this.setState({ key })}
    >
      <Tab eventKey="about" title="About IABA">
        <AboutPage/>
      </Tab>
      <Tab eventKey="players" title="All Player Stats">
        <PlayerStats/>
      </Tab>
      <Tab eventKey="teams" title="Team Stats">
        <TeamStats/>
      </Tab>
      <Tab eventKey="graph" title="Comparison with other Offensive Stats">
         <CorrelationView style={{top: "100px"}}/>
      </Tab>
    </Tabs>    );
  }

}

export default DataTabs;
