import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { numberFilter, textFilter } from 'react-bootstrap-table2-filter';
import {roundNumberFieldToThird} from './common';
import paginationFactory from 'react-bootstrap-table2-paginator';


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
        },
        sort: true
    }
];



class TeamStats extends Component {
  
  componentWillMount() {
    fetch("http://157.230.226.56:5000/team_iaba")
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
      <BootstrapTable keyField="id" data={this.state.data} columns={columns} filter={filterFactory()} pagination={paginationFactory()}/>
    );
  }
}

export default TeamStats;
