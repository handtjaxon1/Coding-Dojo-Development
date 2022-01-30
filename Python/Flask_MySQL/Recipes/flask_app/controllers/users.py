from flask import render_template,redirect,session,request, flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():
    form = request.form
    # Verify the user registration is valid
    if not User.validate_registration(form):
        return redirect("/")
    data = { 
        "first_name": form["first_name"],
        "last_name": form["last_name"],
        "email": form["email"],
        "password": bcrypt.generate_password_hash(form["password"])
    }
    # Insert the new user into the database
    id = User.insert(data)
    session["user_id"] = id

    return redirect("/dashboard")

@app.route("/login", methods=["POST"])
def login():
    form = request.form
    user = User.get_by_email(form)
    # Verify a valid email and password were entered
    if not user:
        flash("Invalid Email", "login")
        return redirect("/")
    if not bcrypt.check_password_hash(user.password, form["password"]):
        flash("Invalid Password", "login")
        return redirect("/")
    session["user_id"] = user.id
    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():
    # Verify the user is set in the session, and if not then logout
    if "user_id" not in session:
        return redirect("/logout")
    data = {
        "id": session["user_id"]
    }
    return render_template("dashboard.html", user=User.get_by_id(data), recipes=Recipe.get_all())

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")