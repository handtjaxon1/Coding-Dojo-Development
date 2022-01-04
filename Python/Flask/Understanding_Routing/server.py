from flask import Flask             # Import Flask to allow us to create our app
from flask import render_template   # Import the flask render templates so we can serve html from responses
app = Flask(__name__)               # Create a new instance of the Flask class called "app"
@app.route('/')                     # The "@" decorator associates this route with the function immediately following
def root():
    return "Hello World!" # Return the string 'Hello World!' as a response

@app.route('/dojo')
def dojo():
    return "Dojo!" # Return the string "Dojo!" as a response

@app.route('/say/<name>')
def say_hi(name):
    return "Hi " + name + "!" # Return a string with the entered name in it

@app.route('/repeat/<amount>/<word>')
def repeat_word(word, amount):
    val = int(amount)
    message = ""
    for i in range(0,val):
        message = message + word + "\n"
    return message # Return the full message that was created

@app.errorhandler(404)
def not_found(e):
    return "Sorry! No response. Try again." # Custom 404 handle

if __name__=="__main__":    # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)     # Run the app in debug mode.
