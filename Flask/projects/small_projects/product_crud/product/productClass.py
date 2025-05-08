"""
Description: 
 
File: productClass.py
Author: Anthony Bañon
Created: 2025-05-05
Last Updated: 2025-05-05
"""



class Product:
    def __init__(self, id: int, name: str, description: str, price: float):
        self.id = id
        self.name = name
        self.description = description
        self.price = price

    @classmethod
    def from_tuple(cls, data_tuple):
        """
        Description: Converts a tuple from the database to a Product object.
        
        Args:
            data_tuple (tuple): A tuple containing product data (id, name, description, price).
        
        Returns:
            Product: A Product object created from the tuple.
        
        """
        
        return cls(
            id=data_tuple[0],
            name=data_tuple[1],
            description=data_tuple[2],
            price=data_tuple[3]
        )

    def to_dict(self):
        """
        Description: Converts the Product object to a dictionary (for JSON).
        
        Args:
            None: No parameters are required for this method.
        
        Returns:
            dict: A dictionary representation of the Product object.
        
        """
        
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price
        }

    def __repr__(self):
        return f"Product(id={self.id}, name='{self.name}', description='{self.description}', price={self.price})"