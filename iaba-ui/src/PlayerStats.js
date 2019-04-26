import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { numberFilter, textFilter } from 'react-bootstrap-table2-filter';
import {roundNumberFieldToThird, cleanName, addKeyField} from './common';

const columns = [
  {
    dataField: "name_first",
    text: "First Name",
    filter: textFilter()
  },
  {
    dataField: "name_last",
    text: "Last Name",
    filter: textFilter()
  },
  {
    dataField: "game_year",
    text: "Year",
    filter: numberFilter()
  },
  {
    dataField: "IABA",
    text: "IABA"
  },
  {
    dataField: "teamID",
    text: "Team",
    filter: textFilter()
  }
];

class PlayerStats extends Component {

  componentWillMount() {
    fetch("http://localhost:5000/player_iaba")
      .then(res => 
        res.json()
      )
      .then(res => {
        console.log(res.data)
        roundNumberFieldToThird(res.data, 'IABA');
        cleanName(res.data, 'name_first');
        cleanName(res.data, 'name_last');
        res.data = addKeyField(res.data, 'id')
        this.setState({ data: res.data });
      });
  }

  constructor(props, context) {
    super(props, context);
    const expandRow = {
      renderer: function(row) {
        const listItems = row.details.hits_per_inning.map((inningDet, index) => <li>Inning {index + 1}: Hits: {inningDet} </li>);
        console.log(listItems);
        return (
          <div>
            {listItems}
          </div>
        )
      },
      onlyOneExpanding: true
    };
    this.expandRow = expandRow;
    // this.getPlayerDetails = this.getPlayerDetails.bind(this);

    this.state = {
      key: "home",
      data: [],
      expandedDetails: []
    };
  }

  render() {
    return (
      <BootstrapTable keyField="key" data={this.state.data} columns={columns} filter={filterFactory()} expandRow={this.expandRow} />
    );
  }
}

export default PlayerStats;
