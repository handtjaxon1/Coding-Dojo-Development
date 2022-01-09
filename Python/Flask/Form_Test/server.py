from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def root():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Received Post Info")
    print(request.form)
    return redirect('/')

# only run if executing this file specifically
if __name__=="__main__":
    app.run(debug=True)