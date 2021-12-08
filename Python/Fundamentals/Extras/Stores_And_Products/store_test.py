from store import *
from product import *

# Create a store and some products
convenience_store = Store("Kwik E-Mart")
donut = Product("Donut", 1.99, ProductCategory.Food)
beer = Product("Beer", 6.99, ProductCategory.Beverages)
pacifier = Product("Pacifier", 4.99, ProductCategory.Baby)
broom = Product("Broom", 14.99, ProductCategory.Cleaning)
laptop = Product("Laptop", 499.99, ProductCategory.Electronics)

# TODO Could create a function that takes a list of products so we could add products in one function call
# Add products
convenience_store.add_product(donut)
convenience_store.add_product(beer)
convenience_store.add_product(pacifier)
convenience_store.add_product(broom)
convenience_store.add_product(laptop)

# Test the various store functionalities and display the changes at each stage
convenience_store.display_products()
convenience_store.inflation(0.02)
convenience_store.display_products()
convenience_store.set_clearance(ProductCategory.Electronics, 0.25)
convenience_store.display_products()
convenience_store.sell_product(len(convenience_store.products) - 1)
convenience_store.sell_product(1)
convenience_store.display_products()