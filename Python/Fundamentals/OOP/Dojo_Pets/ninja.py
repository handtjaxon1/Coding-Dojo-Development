from pet import *

class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    
    def walk(self):
        print(f"Walked {self.pet.name}")
        self.pet.play()

    def feed(self):
        print(f"Fed {self.pet.name}")
        self.pet.eat()

    def bathe(self):
        print(f"Bathed {self.pet.name}")
        self.pet.noise()

    def check_on_pet(self):
        self.pet.display()

# Only run test code if this file is being run. otherwise it doesn't execute if imported to another file
if __name__ == "__main__":
    pet_cat = Cat("Whiskers", "Cat", "Sit")
    jaxon = Ninja("Jaxon", "Handt", ["carrot", "bone", "biscuit", "apple"], ["Cat food", "Dog food"], pet_cat)

    jaxon.check_on_pet()
    jaxon.feed()
    jaxon.walk()
    jaxon.bathe()
    jaxon.check_on_pet()