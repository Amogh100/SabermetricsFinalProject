import React, { Component } from 'react';
import DataTabs from './DataTabs';
var Latex = require('react-latex');


class AboutPage extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <div style={{top: "100px"}}>
        <div>
        <h4>IABA is a baseball statistic that we created which stands for inning-adjusted batting average.</h4>
        <br/>
        </div>
        <div style={{top: "20px"}}>
        <h4>
            <Latex>{"Formula: $\\frac{H_{1} + 2*H_{2} + ... + 8*H_{8} + 9*H_{9}}{AB_{1} + AB_{2} + ... + AB_{8} + AB_{9}}$"}</Latex>
        </h4>
        <br/>
        <br/>
        <h4>
            <Latex>{"$H_{i}$"}</Latex> represents the number of hits for a player in the Ith inning
            <br></br>
            <Latex>{"$AB_{i}$"}</Latex> represents the number of at bats for a player in the Ith inning
        </h4>
        <br/>
        <br/>

        <h4>
            The purpose of IABA is to add some more context to the regular batting 
            average statistic. Specifically, we wanted to develop a statistic which adds
            weightage to hits in later innings. This effectively provides a "clutchness"
            factor where players that get hits in later innings are valued higher by IABA.
            This stat could be used by managers and team
            staff to determine who the best pinch hitters are.
        </h4>

        </div>

      </div>
    )
  }

}

export default AboutPage;
