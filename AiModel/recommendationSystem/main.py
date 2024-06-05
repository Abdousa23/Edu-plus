from numpy import rec
import pandas as pd 
import neattext.functions as nfx
from sklearn.feature_extraction.text import CountVectorizer,TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity,linear_kernel
import seaborn as sns
import numpy as np
from gensim.models import Word2Vec
df = pd.read_csv('./datasets/coursesDataset.csv')

# print(df.head())
# print(df['course_title'])
df['clean_course_title'] = df['course_title'].apply(nfx.remove_stopwords)
df['clean_course_title'] = df['clean_course_title'].apply(nfx.remove_special_characters)
model = Word2Vec(df['clean_course_title'].apply(str.split), min_count=1)

# Calculate average vector for each course
df['vector'] = df['clean_course_title'].apply(lambda x: np.mean([model.wv[word] for word in str(x).split()], axis=0))
# print(df[['course_title','clean_course_title']])

count_vect  =CountVectorizer()
cv_mat = count_vect.fit_transform(df['clean_course_title'])
# print(cv_mat)
# print(cv_mat.todense())

df_cv_words = pd.DataFrame(cv_mat.todense(),columns=count_vect.get_feature_names_out())
# print(df_cv_words)
# print(df_cv_words.head())
cosine_sim_mat = cosine_similarity(cv_mat)
# print(cosine_sim_mat)
# print(cosine_sim_mat.shape)
# sns.heatmap(cosine_sim_mat,annot=True)
# print(df.head())

course_indices = pd.Series(df.index,index=df['course_title']).drop_duplicates()
# print(course_indices[0:5])
idx = course_indices['Financial Modeling for Business Analysts and Consultants']
print(idx)

scores = list(enumerate(cosine_sim_mat[idx]))
# print(scores)
scores_sorted = sorted(scores,key=lambda x:x[1],reverse=True)
# print(scores_sorted[1:])
selected_courses = [i[0] for i in scores_sorted[1:]]
# print(selected_courses)
selected_courses_scores=[i[1] for i in scores_sorted[1:]]
result_of_recommended=df['course_title'].iloc[selected_courses]
rec_df = pd.DataFrame(result_of_recommended)

# print(rec_df)

rec_df['score'] = selected_courses_scores

print(rec_df)


# Train Word2Vec model


def recommendCourse(df, title, num_of_recommended_courses=10):
    if title in course_indices:
        idx = course_indices[title]
        scores = list(enumerate(cosine_sim_mat[idx]))
        scores_sorted = sorted(scores, key=lambda x:x[1], reverse=True)
        selected_courses = [i[0] for i in scores_sorted[1:num_of_recommended_courses+1]]
        selected_courses_scores=[i[1] for i in scores_sorted[1:num_of_recommended_courses+1]]
        result_of_recommended=df['course_title'].iloc[selected_courses]
        rec_df = pd.DataFrame(result_of_recommended)
        rec_df['score'] = selected_courses_scores
        return rec_df
    else:
        vectors = [model.wv[word] for word in title.split() if word in model.wv.key_to_index]
        if vectors:
           title_vector = np.mean(vectors, axis=0)
           df = df.dropna(subset=['vector'])
           df['similarity'] = df['vector'].apply(lambda x: cosine_similarity([x.flatten()], [title_vector.flatten()]))
           return df.sort_values('similarity', ascending=False).head(num_of_recommended_courses)[['course_title', 'similarity']]
        else:
            keywords = title.split()
            df['match_score'] = df['course_title'].apply(lambda x: sum([1 for keyword in keywords if keyword.lower() in x.lower()]))
            return df.sort_values('match_score', ascending=False).head(num_of_recommended_courses)[['course_title', 'match_score']]


print(recommendCourse(df, 'Ultimate Investment Banking Course',10))