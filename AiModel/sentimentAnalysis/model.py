import argparse
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer 

def predict_sentiment(comments):
    # Load the vectorizer and the model
    vectorizer = pickle.load(open('c:/Users/Dell/Desktop/MLProjects/recommendationSystem/tranform.pkl', 'rb'))
    clf = pickle.load(open('c:/Users/Dell/Desktop/MLProjects/recommendationSystem/nlp_model.pkl', 'rb'))

    sentiments = []
    for comment in comments:
        # Transform the comment
        comment_vector = vectorizer.transform([comment])

        # Use the model to predict the sentiment of the comment
        sentiment = clf.predict(comment_vector)
        if sentiment[0] == 1:
            sentiments.append('Positive')
        else:
            sentiments.append('Negative')
    return sentiments

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('comments', type=str, nargs='+', help='The movie reviews to analyze')
    args = parser.parse_args()
    print(predict_sentiment(args.comments))