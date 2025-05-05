from productClass import *
from services import *

def serealizerShowProducts():
    """
    Description: 
    
    Args:
        param (type): Description
    
    Returns:
        type: Description
    
    Raises:
        Exception: Reason
    """
    
    products = [Product.from_tuple(product) for product in showProducts()]
    product_dicts = [product.to_dict() for product in products]
    return print(product_dicts)

