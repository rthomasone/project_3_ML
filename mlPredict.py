import pickle
import pandas as pd
import numpy as np
import os


class Predictor():
    def __init__(self):
        pass

    def predictGenreIndividual(self, acoustic, dance, duration, energy, instrumental, live, loud, speech, temp, val, popularity, key, mode):
        
        #Create Dataframe with Test Track Information
        test_dict = {
        "acousticness": acoustic,
        "danceability": dance,
        "duration_ms": duration,
        "energy": energy,
        "instrumentalness": instrumental,
        "liveness": live,
        "loudness": loud,
        "speechiness": speech,
        "tempo": temp,
        "valence": val,
        "popularity": popularity,
        "key": key,
        "mode": mode
        }
        test_track = pd.DataFrame(test_dict, index=[0,])
        # print(test_track)

        #Load Machine Learning Model
        loaded_scaler = pickle.load(open('Models/XGBoost_scaler.sav', 'rb'))
        loaded_model = pickle.load(open('Models/XGBoost_model.sav', 'rb'))

        #Make Predictions
        newData_scaled = loaded_scaler.transform(test_track)
        probs_test = loaded_model.predict_proba(newData_scaled)

        #Map In Genres
        genre = ['classical','country','electronic','indie','jazz','latin','pop','r&b','rap','rock','show_tunes','worship']
        preds_test = pd.DataFrame(probs_test)
        preds_test.columns=genre
        # print(preds_test)

        # Identify Genre with Highest Probability
        probability = preds_test.max(axis=1)
        probability.values[0]

        predicted_genre = preds_test.idxmax(axis=1)
        # print(f'Test track has a {probability.values[0]} probability of being {predicted_genre.values[0]}') 
        
        #Return Predicted Genre
        return predicted_genre.values[0]