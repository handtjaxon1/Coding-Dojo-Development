from flask_app import app
from flask_app.models.user import User
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():
    form = request.form
    # Verify the registration data is valid before continuing 
    if not User.validate_registration(form):
        return redirect("/")
    data = {
        "first_name": form["first_name"],
        "last_name": form["last_name"],
        "email": form["email"],
        "password": bcrypt.generate_password_hash(form["password"])
    }
    # Inser the new user into our database and store it in the current session for use in othe pages
    id = User.insert(data)
    session["user_id"] = id

    # Redirect to the dashboard, effectually acting like logging in the user at the same time as registration
    return redirect("/dashboard")

@app.route("login", methods=["POST"])
def login():
    form = request.form

    # Try to find a user by the entered email
    user = User.get_by_email(form)

    # Check if the user exists (it won't if there was no user with the entered email)
    if not user:
        flash("Invalid Email", "login")
        return redirect("/")
    # Check if the password matches the user's password
    if not bcrypt.check_password_hash(user.password, form["password"]):
        flash("Invalid Password", "login")
        return redirect("/")

    # Updated the session's user id
    session["user_id"] = user.id
    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():
    # Check if the user id is currently in the session, and if not then logout
    if "user_id" not in session:
        return redirect("/logout")
    
    # Find the user based on the user ID and display the dashboard for it
    data = {
        "id": session["user_id"]
    }
    user = User.get_by_id(data)
    return render_template("dashboard.html", user=user)

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")