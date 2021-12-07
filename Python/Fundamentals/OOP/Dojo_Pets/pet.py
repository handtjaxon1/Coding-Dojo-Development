

class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 50
        self.energy = 50

    def sleep(self):
        self.energy += 25

    def eat(self):
        self.energy += 5
        self.health += 10

    def play(self):
        self.energy -= 10 # added this myself since it seemed natural that a pet would lose energy while playing
        self.health += 5

    def noise(self):
        print("No noise")

    def display(self):
        print(f"Type: {self.type} \tName: {self.name} \tEnergy: {self.energy} \tHealth: {self.health}")

class Cat(Pet):
    def noise(self):
        print("Meow")

class Dog(Pet):
    def noise(self):
        print("Woof")