from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Book:
    database = "books_authors"

    def __init__(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.pages = data["pages"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL(cls.database).query_database(query)
        all_books = []
        for book in results:
            all_books.append(cls(book))
        return all_books

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM books where id = %(id)s;"
        results = connectToMySQL(cls.database).query_database(query, data)
        return cls(results[0])

    @staticmethod
    def validate_book(book):
        is_valid = True
        if len(book["title"]) < 3:
            is_valid = False
            flash("Book title must be at least 3 characters", "book")
        if int(book["pages"]) < 1:
            is_valid = False
            flash("Book pages must be greater than 1", "book")
        return is_valid