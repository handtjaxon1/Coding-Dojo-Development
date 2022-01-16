from flask import Flask
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex()

@app.route("/")
def index():
    return "Dojos and Ninjas"