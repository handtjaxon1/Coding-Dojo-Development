from flask import render_template, redirect, request
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo
from flask_app import app

@app.route("/ninjas")
def show_ninjas():
    dojos = Dojo.get_all()
    return render_template("ninja.html", dojos = dojos)

@app.route("/create/ninja", methods=["POST"])
def create_ninja():
    Ninja.insert(request.form)
    return redirect("/dojos")