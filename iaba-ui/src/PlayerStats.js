import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "AB",
    text: "AB"
  },
  {
    dataField: "IABA",
    text: "IABA"
  },
  {
    dataField: "WH",
    text: "WH"
  },
  {
    dataField: "batter",
    text: "Batter"
  },
  {
    dataField: "game_year",
    text: "Year"
  }
];

class PlayerStats extends Component {
  componentWillMount() {
    console.log("Called!");
    fetch("http://localhost:5000/iaba_data")
      .then(res => 
        res.json()
      )
      .then(res => {
        this.setState({ data: res.data });
      });
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
      <BootstrapTable keyField="id" data={this.state.data} columns={columns} />
    );
  }
}

export default PlayerStats;
