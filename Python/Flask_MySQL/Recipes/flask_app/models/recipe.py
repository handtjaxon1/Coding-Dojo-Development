from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Recipe:
    database = "recipe_db"

    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.description = data["description"]
        self.instructions = data["instructions"]
        self.under_30 = data["under_30"]
        self.user_id = data["user_id"]
        self.date_made = data["date_made"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def insert(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, under_30, user_id, date_made) VALUES (%(name)s, %(description)s, %(instructions)s, %(under_30)s, %(user_id)s, %(date_made)s);"
        return connectToMySQL(cls.database).query_database(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL(cls.database).query_database(query)
        all_recipes = []
        for recipe in results:
            all_recipes.append(cls(recipe))
        return all_recipes

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL(cls.database).query_database(query, data)
        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = "UPDATE recipes SET name=%(name)s, description=%(description)s, instructions=%(instructions)s, under_30=%(under_30)s, date_made=%(date_made)s, updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(cls.database).query_database(query, data)
    
    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        return connectToMySQL(cls.database).query_database(query, data)

    @staticmethod
    def validate_recipe(recipe):
        is_valid = True
        if len(recipe["name"]) < 3:
            is_valid = False
            flash("Recipe name must be at least 3 characters", "recipe")
        if len(recipe["description"]) < 3:
            is_valid = False
            flash("Description must be at least 3 characters", "recipe")
        if len(recipe["instructions"]) < 3:
            is_valid = False
            flash("Instructions must be at least 3 characters", "recipe")
        if recipe["date_made"] == "":
            is_valid = False
            flash("Please enter a date the recipe was made", "recipe")
        return is_valid