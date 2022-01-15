from flask import Flask, render_template, request, redirect
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex()

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users')
def display():
    return render_template("read.html")

@app.route('/users/new')
def create():
    return render_template("create.html")

@app.route('/process', methods=["POST"])
def add_user():
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"]
    }
    return redirect('/users/new')

if __name__ == "__main__":
    app.run(debug=True)