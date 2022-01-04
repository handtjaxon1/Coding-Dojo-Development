from flask import Flask             # Import Flask to allow us to create our app
from flask import render_template   # Import the flask render templates so we can serve html from responses
app = Flask(__name__)               # Create a new instance of the Flask class called "app"
@app.route('/')                     # The "@" decorator associates this route with the function immediately following
def root():
    return "Hello World!" # Return the string 'Hello World!' as a response

@app.route('/play')
def play():
    return render_template("index.html", amount=1, color="aqua")

@app.route('/play/<int:amount>')
def play_amt(amount):
    return render_template("index.html", amount=amount, color="aqua")

@app.route('/play/<int:amount>/<color>')
def play_amt_clr(amount, color):
    return render_template("index.html", amount=amount, color=color)

if __name__=="__main__":    # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)     # Run the app in debug mode.
