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
    data = request.form
    session['name'] = data['name']
    session['location'] = data['location']
    session['language'] = data['language']
    session['comment'] = data['comment']
    session['education'] = data['education']
    session['interests'] = data['interests']
    return redirect('/results')

@app.route('/results')
def display_result():
    return render_template("result.html")

if __name__ == "__main__":
    app.run(debug=True)