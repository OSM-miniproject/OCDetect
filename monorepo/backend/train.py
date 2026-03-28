import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import os

# Load your dataset (replace the path with your actual dataset path)
data = pd.read_csv('D:\\Acad\\TY\\Labs\\MP-1\\reps\\backend\\models\\ocd_data.csv')

# Assuming the columns in your dataset include: 'Age', 'Gender', 'Previous Diagnoses', 'Obsession Type', 
# 'Compulsion Type', 'Depression Diagnosis', 'Anxiety Diagnosis', 'OCD Diagnosis' (target column)

# Prepare your features (X) and target (y)
X = data[['Age', 'Gender', 'Previous Diagnoses', 'Obsession Type', 'Compulsion Type', 'Depression Diagnosis', 'Anxiety Diagnosis']]
y = data['OCD Diagnosis']

# Encode categorical variables using LabelEncoder
categorical_cols = ['Gender', 'Previous Diagnoses', 'Obsession Type', 'Compulsion Type', 'Depression Diagnosis', 'Anxiety Diagnosis']
label_encoder = LabelEncoder()

# Label encode the categorical columns
for col in categorical_cols:
    X[col] = label_encoder.fit_transform(X[col].astype(str))

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the trained model
os.makedirs('backend/models', exist_ok=True)  # Create the directory if it doesn't exist
joblib.dump(model, 'backend/models/ocd_model.joblib')

# Save the label encoder
joblib.dump(label_encoder, 'backend/models/label_encoder.joblib')

print("Model and label encoder saved successfully.")
