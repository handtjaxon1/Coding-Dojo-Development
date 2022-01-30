from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.recipe import Recipe
from flask_app.models.user import User

@app.route("/recipes/new")
def recipe_new():
    # Verify the user is valid so we can ensure the new recipe is added to that user
    if "user_id" not in session:
        return redirect("/logout")
    data = {
        "id": session["user_id"]
    }
    return render_template("recipe_new.html", user=User.get_by_id(data))

@app.route("/recipes/create", methods=["POST"])
def recipe_create():
    # Verify the user is valid
    if "user_id" not in session:
        return redirect("/logout")

    form = request.form
    # Ensure the new recipe is valid beofre adding it
    if not Recipe.validate_recipe(form):
        return redirect("/recipes/new")
    data = {
        "name": form["name"],
        "description": form["description"],
        "instructions": form["instructions"],
        "under_30": int(form["under_30"]),
        "date_made": form["date_made"],
        "user_id": session["user_id"]
    }
    Recipe.insert(data)
    return redirect("/dashboard")

@app.route("/recipes/edit/<int:id>")
def recipe_edit(id):
    if "user_id" not in session:
        return redirect("/logout")
    recipe_id = {
        "id":id
    }
    user_id = {
        "id":session["user_id"]
    }
    return render_template("recipe_edit.html", recipe=Recipe.get_one(recipe_id), user=User.get_by_id(user_id))

@app.route("/recipes/update", methods=["POST"])
def recipe_update():
    if "user_id" not in session:
        return redirect("/logout")
    form = request.form
    if not Recipe.validate_recipe(form):
        return redirect("/recipes/new")
    data = {
        "name": form["name"],
        "description": form["description"],
        "instructions": form["instructions"],
        "under_30": int(form["under_30"]),
        "date_made": form["date_made"],
        "id": form["id"]
    }
    Recipe.update(data)
    return redirect("/dashboard")

@app.route("/recipes/<int:id>")
def recipe_show(id):
    if "user_id" not in session:
        return redirect("/logout")
    recipe_id = {
        "id":id
    }
    user_id = {
        "id":session["user_id"]
    }
    return render_template("recipe.html", recipe=Recipe.get_one(recipe_id), user=User.get_by_id(user_id))

@app.route("/recipes/delete/<int:id>")
def recipe_delete(id):
    if "user_id" not in session:
        return redirect("/logout")
    data = {
        "id":id
    }
    Recipe.delete(data)
    return redirect("/dashboard")