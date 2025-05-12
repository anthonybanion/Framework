"""
Description: This module provides a function to open a 
            connection to a SQLite database.
 
File: database.py
Author: Anthony Bañon
Created: 2025-05-05
Last Updated: 2025-05-05
"""


import sqlite3

def openConnection():
    """
    Description: This function opens a connection to the SQLite database.
    
    Args:
        param (str): The path to the database file.
    
    Returns:
        sqlite3.Connection: A connection object to the SQLite database.
    
    Raises:
        Exception: If the connection to the database fails.
    """
    
    try:
        # Connect to the SQLite database
        connection = sqlite3.connect('products.db')
    except sqlite3.Error as e:
        print(f"Error connecting to database: {e}")
        raise
    else:
        print("Connection to database established successfully.")
     
    
    return connection