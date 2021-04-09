from flask import Flask
from flask import jsonify
from flask import request

from home import home_bp

app = Flask(__name__)

app.register_blueprint(home_bp, url_prefix='/home')

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return jsonify({ 'hello':'world' }), 200