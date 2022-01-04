from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def root():
    return "Hello World!"

@app.route("/play")
def play():
    return render_template("index.html")