# A cursor is the object we use to interact with a database
import pymysql.cursors

# Create a class that allows us to access a connection to our database
class MySQLConnection:
    def __init__(self, database):
        # Configure the connection (Change the host, user, password as needed to match your settings)
        connection = pymysql.connect(host = "localhost",
                                    user = "root",
                                    password = "root",
                                    database = database,
                                    charset = "utf8mb4",
                                    cursorclass = pymysql.cursors.DictCursor,
                                    autocommit = True)
        # Setup the connection to the database
        self.connection = connection

    def query_database(self, query, data=None):
        with self.connection.cursor() as cursor:
            try:
                print("Query Before:", query)
                # Construct a full query from our query and data
                query = cursor.mogrify(query, data)
                print("Running Query:", query)

                cursor.execute(query, data)
                if query.lower().find("insert") >= 0:
                    # INSERT queries return the ID number of the inserted row
                    self.connection.commit()
                    return cursor.lastrowid
                elif query.lower().find("select") >= 0:
                    # SELECT queries return the data from the database as a LIST
                    result = cursor.fetchall()
                    return result
                else:
                    # UPDATE and DELETE queries return nothing
                    self.connection.commit()
            except Exception as e:
                # If the query fails for some reason then the method will return false
                print("Something went wrong:", e)
                return False
            finally:
                # Close the connection after the query is ran
                self.connection.close()

# Creates an instance of a MySQL connection using our database
def connectToMySQL(database):
        return MySQLConnection(database)