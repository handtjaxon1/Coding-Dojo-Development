from flask_app.config.mysqlconnection import connectToMySQL

# A class modeled after a User in the users table
class User:
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
        return connectToMySQL("logins_registration").query_database(query, data)

    # Returns all the data from the user
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL("logins_registration").query_database(query)
        users = []
        for result in results:
            users.append(cls(result))
        return users