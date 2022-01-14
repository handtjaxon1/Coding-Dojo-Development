from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "SuperSecretKey"

@app.route('/')
def home():
    add_visits(1)
    return render_template("index.html")

@app.route('/add', methods=['POST'])
def add():
    print("Received Post Info")
    amount = request.form.get('amount', type=int)
    # Add the amount - 1 visits since it'll count 1 when we redirect to the home page
    add_visits(amount - 1)
    return redirect('/')

@app.route('/destroy_session')
def destroy_sessions():
    session.clear()
    return redirect('/')

def add_visits(num: int = 1):
    # Only add visits if the visits key exists in the current session (It will after the first visit)
    if session.get('visits'): # dict.get is useful for checking if a key even exists, and then doing something with it afterwards
        session['visits'] += num
    else:
        session['visits'] = 1

if __name__ == "__main__":   
    app.run(debug=True)