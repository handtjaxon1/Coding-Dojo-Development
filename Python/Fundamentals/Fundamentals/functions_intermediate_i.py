# task 1: Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x)
students[0]['last_name'] = 'Bryant'
print(students)
sports_directory['soccer'][0] = 'Andres'
print(sports_directory)

# task 2: Iterate Through a List of Dictionaries
def iterateDictionary(some_list):
    for element in some_list:
        output = ""
        for item in element.items():
            output = output + item[0] + " - " + item[1] + ", "
        print(output)

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
iterateDictionary(students)
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

# task 3: Get Values from a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    for element in some_list:
        print(element[key_name])
iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)

# task 4: Iterate Through a Dictionary with List Values
def printInfo(some_dict):
    for key in some_dict.keys():
        print(len(some_dict[key]),str(key).upper())
        for element in some_dict[key]:
            print(element)

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)
# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon