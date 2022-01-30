from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re
# Email address validation regex
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")

# A class modeled after a User in the users table
class User:
    database = "recipe_db"

    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # Insert a new user
    @classmethod
    def insert(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES(%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL(cls.database).query_database(query, data)

    # Returns all the data from the user
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.database).query_database(query)
        users = []
        for result in results:
            users.append(cls(result))
        return users

    # Returns the user based on an email
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(cls.database).query_database(query, data)
        # Don"t return 
        if len(results) < 1:
            return False
        return cls(results[0])

    # Returns the user based on an id
    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(cls.database).query_database(query, data)
        return cls(results[0])

    @staticmethod
    def validate_registration(user):
        is_valid = True
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(User.database).query_database(query, user)
        # Check if there"s at least 1 result because that means the email was taken already
        if len(results) >= 1:
            flash("Email already taken.","registration")
            is_valid = False
        # Check if the email input is a validly formatted email
        if not EMAIL_REGEX.match(user["email"]):
            flash("Invalid Email. Please enter a correctly formatted email address.","registration")
            is_valid = False
        # Check if the first name has a minimum of 2 characters
        if len(user["first_name"]) < 2:
            flash("First Name must be at least 3 characters","registration")
            is_valid = False
        # Check if the last name has a minimum of 2 characters
        if len(user["last_name"]) < 2:
            flash("Last Name must be at least 3 characters","registration")
            is_valid = False
        # Check if the password is at least 8 characters long. Helps ensure greater security
        if len(user["password"]) < 8:
            flash("Password must be at least 8 characters","registration")
            is_valid = False
        # Verify that the passwords match each other
        if user["password"] != user["confirm"]:
            flash("Passwords don't match","registration")
            is_valid = False
        return is_valid