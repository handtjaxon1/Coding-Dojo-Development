from flask_app import app # NEED this line for app.route() among other things
from flask import render_template, redirect, request
from flask_app.models import team # Import your models here

# Controllers contan all the logic for all your routes.  They call on the models, which
# will handle all the interactions with the database.

# We will be using @app.route() here.

# Let's figure out the routes we'll need in these controllers - along with whether it's a GET or POST request:
# 1A. Show all teams
# 1B. Show one team - eventually with players later this week
# 2A. Page with form to add a team
# 2B. Route to actually add to database
# 3A. Page to edit a team
# 3B. Route to edit in the database
# 4. Delete a team

# we'll write out the logic in the lecture.

@app.route("/teams")
def show_all_teams():
    pass # Will we render_template or redirect for this route?
