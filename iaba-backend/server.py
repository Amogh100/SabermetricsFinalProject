from flask import Flask, jsonify, request
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


#For now let's just load from the CSV's. Don't worry about SQL
team_iaba = pd.read_csv("../team_iaba.csv")


def build_player_details_dicts():
    player_iaba_data = pd.read_csv('../player_iaba.csv')[['batter', 'name_first', 'name_last', 'yearID', 'teamID', 'IABA', 'OBP', 'BA', 'OPS']]
    batter_details  = pd.read_csv('../batter_data.csv')
    res = []
    for _, row in player_iaba_data.iterrows():
        player_id = row['batter']
        year_id = row['yearID']
        player_stats = batter_details[(batter_details['batter'] == player_id) & (batter_details['game_year'] == year_id)]
        player_iaba = row.to_dict()
        details = player_stats.to_dict()
        keys_to_keep = ['H']
        filtered_details = {key: details[key] for key in keys_to_keep}
        filtered_details['hits_per_inning'] = list(filtered_details['H'].values())
        del filtered_details['H']
        player_iaba['details'] = filtered_details
        res.append(player_iaba)
    return res

def build_player_stat_histories():
    player_iaba_data = pd.read_csv('../player_iaba.csv')[['batter', 'name_first', 'name_last', 'yearID', 'teamID', 'IABA', 'OBP', 'BA', 'OPS']]
    res = {}
    #Dictionary is "player_id" -> [{year, obp, iaba}]
    for _, row in player_iaba_data.iterrows():
        first_name = row['name_first']
        last_name = row['name_last']
        player_id = row['batter']
        if player_id not in res:
            res[player_id] = {}
            res[player_id]['stats'] = []
        res[player_id]['stats'].append({"year": row['yearID'], "ops": row['OPS'], "iaba": row['IABA'], "obp": row['OBP'], 'ba': row['BA']})
        res[player_id]['name'] = first_name.capitalize() + " "  + last_name.capitalize()
    return res


@app.route('/player_histories', methods=['GET'])
def get_player_stat_histories():
    return jsonify({"data": player_stat_histories})

@app.route('/player_iaba', methods=['GET'])
def get_iaba_data():
    resp = jsonify({"data": player_details})
    return resp



@app.route("/team_iaba", methods=['GET'])
def get_team_iaba():
    resp = jsonify({"data": team_iaba.to_dict('records')})
    return resp

if __name__ == '__main__':
    player_details = build_player_details_dicts()
    player_stat_histories = build_player_stat_histories()
    print(player_stat_histories)
    app.run(debug=True, host='0.0.0.0')
