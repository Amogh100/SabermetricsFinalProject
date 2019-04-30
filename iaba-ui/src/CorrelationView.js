import React, {Component} from 'react';
import {roundNumberFieldToThird, cleanName, addKeyField} from './common';


import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class CorrelationView extends Component {

    constructor(props, context){
        super(props, context);
        this.onPlayerSelect = this.onPlayerSelect.bind(this);

        this.state = {
            player_id_to_stats: {},
            players: [],
            selected_player: '',
            player_name_to_id: {}
        }
    }

    componentWillMount() {
        fetch("http://157.230.226.56:5000/player_histories")
          .then(res => 
            res.json()
          )
          .then(res => {
            var player_id_to_stats = {};
            var player_name_to_id = {};
            for(var player_id in res.data){
                player_id_to_stats[player_id] = res.data[player_id]['stats'];
                player_name_to_id[res.data[player_id]['name']] = player_id;
            }
            var player_names = Object.keys(player_name_to_id);
            this.setState({player_name_to_id: player_name_to_id, players: player_names, player_id_to_stats:player_id_to_stats, selected_player: player_names[0]});
            this.setState({ data: res.data });
          });
      }

    onPlayerSelect(event){
       this.setState({selected_player: event.target.value});
    }

    render(){
        return (
            <div>
            <LineChart
              width={800}
              height={400}
              data={this.state.player_id_to_stats[this.state.player_name_to_id[this.state.selected_player]]}
              margin={{
                top: 50, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="iaba" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="ops" stroke="#82ca9d" />
              <Line type="monotone" dataKey="obp" stroke="#00DCFF" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="ba" stroke="#FF00FF" />
            </LineChart>

             <input style={{left: 320, position: "relative", top: 60}} list="names" onChange={this.onPlayerSelect}></input>
             <datalist id="names">
                {this.state.players.map(playername => <option value={playername}/>)}
             </datalist>

            </div>
          );
    }
};

export default CorrelationView;
