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
    return redirect('/result')

@app.route('/result')
def display_result():
    return render_template("result.html")

if __name__ == "__main__":
    app.run(debug=True)