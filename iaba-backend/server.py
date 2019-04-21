from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


iaba_data = pd.read_csv('../iaba.csv')

@app.route('/iaba_data', methods=['GET'])
def get_iaba_data():
    
    resp = jsonify({"data": iaba_data.to_dict('records')})
    return resp

if __name__ == '__main__':
    app.run(debug=True)
