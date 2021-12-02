# task 1: basics
print("--- Basics ---")
for i in range(151):
    print(i)

# task 2: multiples of five
print("--- Multiples of Five ---")
for i in range(5,1001,5):
    print(i)

#task 3: counting the dojo way
print("--- Counting the Dojo Way ---")
for i in range(0,101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)

# task 4: whoa that sucker's huge
print("--- Whoa, that Sucker's Huge ---")
sum = 0
# option 1 using the range function to start on an odd number and increment by 2 so we only loop on odd numbers
for i in range(1,500000,2):
    sum += i
# option 2 using modulo to test for odd number. should be slower than option 1 due to iterating over more values
# for i in range(500000):
#     if i % 2 != 0:
#         sum += i
print(sum)

# task 5: countdown by fours
print("--- Countdown by Fours ---")
for i in range(2018,0,-4):
    print(i)

# task 6: flexible counter
print("--- Flexible Counter ---")
lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum,highNum,mult):
    print(i)