from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html", rows=8, cols=8)

@app.route('/<int:rows>')
def checkerboard(rows):
    return render_template("index.html", rows=rows, cols=8)

@app.route('/<int:rows>/<int:cols>')
def checkerboard_xy(rows, cols):
    return render_template("index.html", rows=rows, cols=cols)

@app.route('/<int:rows>/<int:cols>/<color1>/<color2>')
def checkboard_xy_colors(rows, cols, color1, color2):
    return render_template("index.html", rows=rows, cols=cols, color1=color1, color2=color2)

# only run if executing this file specifically
if __name__=="__main__":
    app.run(debug=True)
