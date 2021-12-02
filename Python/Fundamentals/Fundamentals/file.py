num1 = 42 # variable declaration, initialize integer 
num2 = 2.3 # variable declaration, initialize float
boolean = True # variable declaration, initialize boolean
string = 'Hello World' # variable declaration, initialize string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable declaration, initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable declaration, initialize dictionary
fruit = ('blueberry', 'strawberry', 'banana') # variable declaration, initialize tuple
print(type(fruit)) # log the variable type of 'fruit': tuple
print(pizza_toppings[1]) # log the value at index 1 from the pizza_toppings list
pizza_toppings.append('Mushrooms') # add a new value, "Mushrooms" to the pizza_toppings list
print(person['name']) # log the value associated with the "name" key in the person dictionary
person['name'] = 'George' # change the value associated with the "name" key in the person dictionary to the value "George"
person['eye_color'] = 'blue' # change the value associated with the "eye_color" key in the person dictionary to the value "blue"
print(fruit[2]) # log the value at index 2 from the fruit tuple

if num1 > 45: # if num1 is greater than 45...
    print("It's greater") # log statement for if it's true
else: # else...
    print("It's lower") # log statement for if it's false

if len(string) < 5: # if the length of the string variable is less than 5...
    print("It's a short word!") # log statement for if it's true
elif len(string) > 15: # else if the length is greater than 15 characters...
    print("It's a long word!") # log statement for if it's true
else: # else...
    print("Just right!") # 

for x in range(5):
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
while(x < 5):
    print(x)
    x += 1

pizza_toppings.pop()
pizza_toppings.pop(1)

print(person)
person.pop('eye_color')
print(person)

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)