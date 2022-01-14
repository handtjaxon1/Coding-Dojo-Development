from flask import Flask, render_template
from friend import Friend
import secrets # Imported for the flask app secret key

app = Flask(__name__)
app.secret_key = secrets.token_hex()

@app.route('/')
def index():
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html", all_friends = friends)

if __name__ == "__main__":
    app.run(debug=True)