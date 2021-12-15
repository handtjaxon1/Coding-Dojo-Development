from animal import *

class Zoo:
    def __init__(self):
        self.animals = []

    def add_animal(self, animal: Animal):
        self.animals.append(animal)
        return self

    def display_info(self):
        print("Zoo Animals")
        for animal in self.animals:
            animal.display_info()

if __name__ == "__main__":
    zoo = Zoo()
    zoo.add_animal(Lion("Jeff", 3, 100, 100, 50))
    zoo.add_animal(Elephant("Oliphant", 10, 250, 100, 25)).add_animal(Wolf("Max", 2, 75, 100, 35))
    zoo.display_info()