# import all the other files we need to run the program
from flask_app import app
from flask_app.controllers import users, recipes

if __name__=="__main__":
    app.run(debug=True)