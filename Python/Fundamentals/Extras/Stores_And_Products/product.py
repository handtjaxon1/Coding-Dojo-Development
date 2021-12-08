from enum import Enum

class ProductCategory(Enum):
    Beverages = 1
    Food = 2
    Cleaning = 3
    Electronics = 4
    Tools = 5
    Pet = 6
    Baby = 7
    Health = 8
    Misc = 9

class Product:
    def __init__(self, name: str, price: float, category: ProductCategory):
        self.name = name
        self.price = price
        self.category = category

    def update_price(self, percent_change: float, is_increase: bool):
        # option 1 - using if/else statement
        if is_increase:
            self.price += self.price * percent_change
        else:
            self.price -= self.price * percent_change
        # option 2 - using ternary operator
        # percent_change = percent_change if is_increase else -percent_change
        # self.price += self.price * percent_change

    def print_info(self):
        info = "{0:20s} | {1:20s} | ${2:.2f}".format(self.name, self.category.name, self.price)
        print(info)