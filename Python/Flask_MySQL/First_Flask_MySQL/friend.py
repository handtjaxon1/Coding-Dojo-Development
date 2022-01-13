from mysqlconnection import connectToMySQL

# A class that is modeled after our friends table from our database
class Friend:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # We use class methods to query our database
    @classmethod
    def get_all(cls):
        # The query we want to run
        query = "SELECT * FROM friends;"
        # Store the results of the query. NOTE the database name should be our schema name
        results = connectToMySQL('first_flask').query_database(query)
        # Add each result from the database into our friends list and return them
        friends = []
        for friend in results:
            friends.append(cls(friend))
        return friends