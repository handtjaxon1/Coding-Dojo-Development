from product import *

class Store:
    def __init__(self, name: str):
        self.name = name
        self.products = []

    def add_product(self, new_product: Product):
        self.products.append(new_product)

    def sell_product(self, id: int):
        product = self.products.pop(id)
        print("Sold product:")
        product.print_info()

    def inflation(self, percent_increase: float):
        print("Applied inflation of {:.2%} to all products.".format(percent_increase))
        for product in self.products:
            product.update_price(percent_increase, True)
    
    def set_clearance(self, category: ProductCategory, percent_discount: float):
        print("Applied discount of {0:.2%} to all products in category {1:s}.".format(percent_discount, category.name))
        for product in self.products:
            if product.category == category:
                product.update_price(percent_discount, False)

    def display_products(self):
        print("{:-^60s}".format(self.name))
        for product in self.products:
            product.print_info()

    