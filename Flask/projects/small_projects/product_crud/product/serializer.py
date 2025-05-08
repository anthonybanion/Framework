from .productClass import *
from .services import *

def serializerShowProducts():
    """
    Description: This function retrieves and displays all products.
    
    Args:
        param (type): Description
    
    Returns:
        type: Description
    
    Raises:
        Exception: Reason
    """
    
    products = [Product.from_tuple(product) for product in showProducts()]
    product_dicts = [product.to_dict() for product in products]
    return product_dicts


def serializerShowProductByID(id):

    product = showProductById(id)
    if product:
        return Product.from_tuple(product[0]).to_dict()
    else:
        return f"error : Product not found", 404