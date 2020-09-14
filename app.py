from flask import Flask, render_template, request,  jsonify
from mlPredict import Predictor


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/eda")
def eda():
    return render_template("eda.html")

@app.route("/features")
def features():
    return render_template("features.html")

@app.route("/mlmodels")
def mlmodels():
    return render_template("mlmodels.html")

@app.route("/results")
def results():
    return render_template("results.html")

@app.route("/summary")
def summary():
    return render_template("summary.html")

@app.route("/predictor")
def predictor():
    return render_template("predictor.html")

@app.route('/getGenre/', methods=['POST'])
def getGenre():
    content = request.json["data"]

    acousticness = content["acousticness"]
    dance = content["dance"]
    valence = content["valence"]
    energy = content["energy"]
    instrumentalness = content["instrumentalness"]
    tempo = content["tempo"]
    liveness = content["liveness"]
    loudness = content["loudness"]
    duration = content["duration"]
    popularity = content["popularity"]
    speechiness = content["speechiness"]
    key = content["key"]
    mode = content["mode"]
    
    predictor = Predictor()
    genre = predictor.predictGenreIndividual( acousticness, dance, duration, energy, instrumentalness,
     liveness, loudness, speechiness, tempo, valence, popularity, key, mode)
    return jsonify({"genre":genre})




if __name__ == "__main__":
    app.run(debug=True)
