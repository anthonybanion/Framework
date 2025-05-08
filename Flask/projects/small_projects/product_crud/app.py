
from product.serializer import *
from flask import jsonify
from flask import Flask

app= Flask(__name__)

@app.route("/products", methods=["GET"])
def getProducts():
    return jsonify(serializerShowProducts())


@app.route("/products/<int:id>", methods=["GET"])
def getProductById(id):
    return jsonify(serializerShowProductByID(id))

# @app.route("/products", methods=["POST"])
# def sdfsd89():
#     return "Hola"


if __name__=='__main__':
    app.run(debug=True, port=4000)