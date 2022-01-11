from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "SuperSecretKey"

@app.route('/')
def root():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Received Post Info")
    print(request.form)
    session['username'] = request.form['username']
    session['useremail'] = request.form['useremail']
    return redirect('/show')

@app.route('/show')
def show_user():
    return render_template("show.html")

# only run if executing this file specifically
if __name__=="__main__":
    app.run(debug=True)