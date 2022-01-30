from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Author:
    database = "books_authors"

    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def insert(cls, data):
        query = "INSERT INTO authors (name) VALUES (%(name)s);"
        return connectToMySQL(cls.database).query_database(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL(cls.database).query_database(query)
        all_authors = []
        for author in results:
            all_authors.append(cls(author))
        return all_authors

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM authors WHERE id = %(id)s;"
        results = connectToMySQL(cls.database).query_database(query, data)
        return cls(results[0])

    # Validate the author name
    @staticmethod
    def validate_author(author):
        is_valid = True
        if len(author["name"]) < 3:
            is_valid = False
            flash("Author name must be at least 3 characters.", "author")
        return is_valid