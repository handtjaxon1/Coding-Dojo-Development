class Animal:
    def __init__(self, name, age, health, happiness, energy):
        self.name = name
        self.age = age
        self.health = health
        self.max_health = health
        self.happiness = happiness
        self.energy = energy
        self.max_energy = energy

    def display_info(self):
        print("Animal: {0:<15s} Name: {1:<15s} Age: {2:<5d} Health: {3:<7.2f} Happiness: {4:<7.2f} Energy: {5:<7.2f}".format(self.__class__.__name__, self.name, self.age, self.health, self.happiness, self.energy))

    def feed(self):
        self.health = self.max_health if self.health + 10 > self.max_health else self.health + 10
        self.happiness += 10

    def make_noise(self):
        print("Default animal noise")

    def play(self):
        if self.energy > 10:
            self.energy -= 10
        else:
            print("{0} is too tired to play.".format(self.name))

    def sleep(self):
        self.energy = self.max_energy

class Lion(Animal):
    def make_noise(self):
        print("rooaaarrrrrrrr")

class Elephant(Animal):
    def make_noise(self):
        print("bahruuuuuuhhhhaaaaa")

class Wolf(Animal):
    def make_noise(self):
        print("owooooo")

if __name__ == "__main__":
    pet = Animal("George", 123456, 100.0096, 250.005, 55.999)
    pet.display_info()