from dataclasses import dataclass
from flask import Flask, render_template, request, redirect
import secrets
from models.user import User

app = Flask(__name__)
app.secret_key = secrets.token_hex()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/users")
def display():
    users = User.get_all()
    print(users)
    return render_template("read.html", users = users)

@app.route("/users/new")
def create():
    return render_template("create.html")

@app.route("/users/<int:id>")
def show(id):
    data = {
        "id": id
    }
    user = User.get(data)
    return render_template("show.html", user = user)

@app.route("/users/<int:id>/edit")
def edit(id):
    data = {
        "id": id
    }
    user = User.get(data)
    return render_template("edit.html", user = user)

@app.route("/update_user", methods=["POST"])
def update_user():
    User.update(request.form)
    return redirect("/users")

@app.route("/add_user", methods=["POST"])
def add_user():
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "email": request.form["email"]
    }
    User.save(data)
    return redirect("/users")

@app.route("/delete_user/<int:id>")
def delete_user(id):
    data = {
        "id": id
    }
    User.delete(data)
    return redirect("/users")

if __name__ == "__main__":
    app.run(debug=True)