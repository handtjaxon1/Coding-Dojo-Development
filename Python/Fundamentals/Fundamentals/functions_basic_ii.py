# task 1: Countdown
def countdown(num):
    if num < 0:
        print("Please enter a value greater than or equal to 0 to countdown from.")
        return None
    new_list = []
    for i in range(num,-1,-1):
        new_list.append(i)
    return new_list
print(countdown(5)) # default test
print(countdown(-1)) # testing edge case

# task 2: Print and Return
def print_and_return(num1, num2):
    print(num1)
    return num2
x = print_and_return(1,2)
print(x)

# task 3: First Plus Length
def first_plus_length(input_list):
    return input_list[0] + input_list[len(input_list)-1]
print(first_plus_length([1,2,3,4,5]))

# task 4: Values Greater than Second
def values_greater_than_second(input_list):
    if len(input_list) < 2:
        return False
    else:
        # new list of elements greater than the value of the 2nd element
        new_list = []
        # remove the 2nd index and store it. this makes it easier to loop through the list and avoid iterating over the 2nd element.
        # I suppose it's technically unneccessary to pop the element since it'd never be added to the new list, but I thought it was interesting
        second = input_list.pop(1)
        # loop through each element in the list and add it to the new list if it's greater than the 2nd value
        for i in input_list:
            if i > second:
                new_list.append(i)
        return new_list
print(values_greater_than_second([5,2,3,2,1,4]))
print(values_greater_than_second([3]))

# task 5: This Length, That Value
def length_and_value(size, value):
    # technically works, but it may have side effects I'm unaware of? something about how references work in python
    new_list = [value] * size
    # alternative method that uses loops
    # new_list = []
    # for i in range(size):
    #     new_list.append(value)
    return  new_list
print(length_and_value(4,7))
print(length_and_value(6,2))