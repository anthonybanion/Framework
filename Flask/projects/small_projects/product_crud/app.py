
from product.serializer import *
from flask import jsonify
from flask import Flask

app= Flask(__name__)

@app.route("/products", methods=["GET"])
def getProducts():
    return jsonify(serializerShowProducts())


@pp.route("/products/<int:id>", methods=["GET"])
def getProductById(id):
    product = showProductById(id)
    if product:
        return jsonify(Product.from_tuple(product[0]).to_dict())
    else:
        return jsonify({"error": "Product not found"}), 404

# @app.route("/products", methods=["POST"])
# def sdfsd89():
#     return "Hola"


if __name__=='__main__':
    app.run(debug=True, port=4000)