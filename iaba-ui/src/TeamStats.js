import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { numberFilter, textFilter } from 'react-bootstrap-table2-filter';
import {roundNumberFieldToThird} from './common';

const columns = [
    {
        dataField: "teamID",
        text: "Team",
        filter: textFilter(),
        headerStyle: (column, columnIndex) => {
            return {width: '40px', textAlign: 'center'};
        }
    },
    {
        dataField: "yearID",
        text: "Year",
        filter: numberFilter(),
        headerStyle: (column, columnIndex) => {
            return {width: '100px', textAlign: 'center'};
        }
    },
    {
        dataField: "AB_1-9",
        text: "At Bats",
        filter: numberFilter(),
        headerStyle: (column, columnIndex) => {
            return {width: '120px', textAlign: 'center'};
        }
    },
    {
        dataField: "IABA",
        text: "IABA",
        headerStyle: (column, columnIndex) => {
            return {width: '90px', textAlign: 'center'};
        }
    }
];


const expandRow = {
    renderer: row => (<div><h3>Hello there</h3></div>)
};

class TeamStats extends Component {
  
  componentWillMount() {
    fetch("http://localhost:5000/team_iaba")
      .then(res => 
        res.json()
      )
      .then(res =>  {
        roundNumberFieldToThird(res.data, 'IABA');
        this.setState({ data: res.data });
      });
      console.log(this.state.data);
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      key: "home",
      data: []
    };
  }

  render() {
    return (
      <BootstrapTable keyField="id" data={this.state.data} columns={columns} filter={filterFactory()} expandRow={expandRow} />
    );
  }
}

export default TeamStats;
