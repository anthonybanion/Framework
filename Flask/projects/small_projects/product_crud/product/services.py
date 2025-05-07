"""
Description: This module provides functions to create, read, update, and delete products in a SQLite database.
 
File: services.py
Author: Anthony Bañon
Created: 2025-05-05
Last Updated: 2025-05-05
"""



from .database import openConnection


def createProductsTable():
    connection = openConnection()
    cursor = connection.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS "products" (
                    "id" INTEGER NOT NULL UNIQUE,
                    "name" TEXT NOT NULL,
                    "description" TEXT NOT NULL,
                    "price" REAL NOT NULL,
                    PRIMARY KEY("id" AUTOINCREMENT))''')

    connection.commit()
    connection.close()
    print(f"The product table has been created")




def createProduct(name,description,price):
    connection = openConnection()
    cursor=connection.cursor()

    cursor.execute(''' INSERT INTO products (name, description, price) VALUES(?,?,?)''',(name, description, price))
    connection.commit()
    connection.close()


def showProducts():
    connection = openConnection()
    cursor=connection.cursor()
    cursor.execute(''' SELECT * FROM products''')
    results=cursor.fetchall()
    connection.commit()
    connection.close()
    return results

def showProductById(id):
    connection = openConnection()
    cursor=connection.cursor()
    cursor.execute("SELECT * FROM products WHERE id=?",(id,))
    results=cursor.fetchall()
    connection.commit()
    connection.close()
    return results

def deleteProduct(id):
    connection = openConnection()
    cursor=connection.cursor()
    cursor.execute("DELETE FROM products WHERE id=? ",(id,))
    connection.commit()
    connection.close()

def editProduct(id, name, description, price):
    connection = openConnection()
    cursor=connection.cursor()
    cursor.execute('''UPDATE products SET name=?, description=?, price=? WHERE id=?''', (name, description, price, id))
    connection.commit()
    connection.close()


