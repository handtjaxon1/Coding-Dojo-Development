from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja import Ninja

class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.ninjas = []

    # Returns all of the dojos
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL("dojos_and_ninjas").query_database(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos

    # Returns all of the ninjas in a particular dojo
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas on dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL("dojos_and_ninjas").query_database(query, data)
        print(results)
        dojo = cls(results[0])
        for row in results:
            ninja = {
                "id": row["ninjas.id"],
                "first_name": row["first_name"],
                "last_name": row["last_name"],
                "age": row["age"],
                "created_at": row["ninjas.created_at"],
                "updated_at": row["ninjas.updated_at"]
            }
            dojo.ninjas.append(Ninja(ninja))
        return dojo

    # Insert a new dojo 
    @classmethod
    def insert(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        return connectToMySQL("dojos_and_ninjas").query_database(query, data)