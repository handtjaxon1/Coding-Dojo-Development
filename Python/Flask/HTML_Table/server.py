from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def root():
    users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'},
        {'first_name' : 'Jaxon', 'last_name' : 'Handt'}
    ]
    return render_template("index.html", users=users)

# only run if executing this file specifically
if __name__=="__main__":
    app.run(debug=True)