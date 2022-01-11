from flask import Flask, render_template, request, redirect
import datetime
app = Flask(__name__)  

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/checkout', methods=['POST'])         
def checkout():
    print(request.form)
    if request.method == 'POST':
        data = request.form
        first_name = data['first_name']
        last_name = data['last_name']
        # How to get value from the form data as an specific type
        # student_id = data.get('student_id', type=int)
        student_id = data['student_id']

        # Could do this "better" using a loop. As the list of items expands then that would be necessary or it'll be too much work
        items = {}
        items['Strawberry'] = data['strawberry']
        items['Raspberry'] = data['raspberry']
        items['Apple'] = data['apple']
        items['Blackberry'] = data['blackberry']

        # Get the total amount of ordered items
        order_total = 0
        for val in items.values():
            order_total += int(val)
        # Get the time the order was placed, as a friendly display string
        order_time = datetime.datetime.now().strftime("%B %#d, %Y %H:%M:%S")

    # Could combine all the data entries into a single dictionary that we then pass through to the render template
    return render_template("checkout.html", first_name=first_name, last_name=last_name, student_id=student_id, items=items, order_total=order_total, order_time=order_time)

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)