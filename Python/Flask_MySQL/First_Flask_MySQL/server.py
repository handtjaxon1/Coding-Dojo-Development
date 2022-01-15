from flask import Flask, render_template, request, redirect
from friend import Friend
import secrets # Imported for the flask app secret key

app = Flask(__name__)
app.secret_key = secrets.token_hex()

@app.route('/')
def index():
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html", all_friends = friends)

@app.route('/add_friend', methods=["POST"])
def add_friend():
    # Create a dictionary to hold the form data that we pass to the query
    data = {
        "fname": request.form["fname"],
        "lname": request.form["lname"],
        "occ": request.form["occ"]
    }
    # Save the data to our database from the friend class
    Friend.save(data)
    # Reroute back to the home page
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)