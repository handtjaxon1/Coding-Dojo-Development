# 1. TASK: print "Hello World"
print("Hello World")
# 2. print "Hello Jaxon!" with the name in a variable
name = "Jaxon"
print("Hello", name, "!")	# with a comma
print("Hello " + name + "!")	# with a +
# 3. print "Hello 7!" with the number in a variable
name = 7
print("Hello", name, "!")	# with a comma
print("Hello " + str(name) + "!")	# with a +	-- this one should give us an error!
# 4. print "I love to eat pasta and pizza." with the foods in variables
fave_food1 = "pasta"
fave_food2 = "pizza"
print("I love to eat {} and {}.".format(fave_food1, fave_food2)) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string
# bonus experimentation
print(f"I love to eat {fave_food1.upper()} and {fave_food2.upper()}.")
print(f"I love to eat {fave_food1} and {fave_food2}.".split(fave_food1))