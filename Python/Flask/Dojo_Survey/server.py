from flask import Flask, render_template, request, redirect, session
import secrets # Imported for the flask app secret key

app = Flask(__name__)
app.secret_key = secrets.token_hex()

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    print("Received Post Info")

    # Set sessions data equal to our form so it can be easily accessed in the result.html page
    data = request.form
    session['name'] = data['name']
    session['location'] = data['location']
    session['language'] = data['language']
    session['comment'] = data['comment']
    session['education'] = data['education']

    # Contruct a readable list of interests from the interests checkboxes that were checked
    interests = ""
    interestList = data.getlist("interests")
    for i in range(0,len(interestList)):
        interests += interestList[i]
        # only add a comma and space if there are more elements to iterate through after this one
        if i < len(interestList) - 1:
            interests += ", "
    session['interests'] = interests
    
    return redirect('/results')

@app.route('/results')
def display_result():
    return render_template("result.html")

if __name__ == "__main__":
    app.run(debug=True)