from flask import render_template, request, redirect
from flask_app import app
from flask_app.models.dojo import Dojo

@app.route("/")
def index():
    return redirect("/dojos")

@app.route("/dojos")
def all_dojos():
    dojos = Dojo.get_all()
    return render_template("dojo.html", dojos = dojos)

@app.route("/create/dojo", methods=["POST"])
def create_dojo():
    Dojo.insert(request.form)
    return redirect("/dojos")

@app.route("/dojos/<int:id>")
def show_dojo(id):
    data = {
        "id": id
    }
    dojo = Dojo.get_one(data)
    return render_template("dojo_show.html", dojo = dojo)