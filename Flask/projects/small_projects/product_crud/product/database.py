import sqlite3

def openConnection():
    connection=sqlite3.connect('./products.db')
    return connection