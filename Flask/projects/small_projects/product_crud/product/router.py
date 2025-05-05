from server import app


@app.route("/products", methods=["GET"])
def pong():
    return "Pong"
