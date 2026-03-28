import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load the dataset (adjust the path if necessary)
df = pd.read_csv(r"D:\Acad\TY\Labs\MP-1\ocd_patient_dataset.csv")

# Drop unwanted columns
df_dropped = df.drop(columns=['Patient ID', 'Ethnicity', 'Marital Status', 'Education Level', 
                              'OCD Diagnosis Date', 'Family History of OCD', 
                              'Y-BOCS Score (Obsessions)', 'Y-BOCS Score (Compulsions)', 
                              'Medications'])

# Generate non-OCD data
non_ocd_data = {
    'Age': np.random.randint(18, 75, size=300),
    'Gender': np.random.choice(['Male', 'Female'], size=300),
    'Duration of Symptoms (months)': np.zeros(300, dtype=int),
    'Previous Diagnoses': np.random.choice([np.nan, 'None'], size=300, p=[0.5, 0.5]),
    'Obsession Type': ['N/A'] * 300,
    'Compulsion Type': ['N/A'] * 300,
    'Depression Diagnosis': np.random.choice(['No', 'Yes'], size=300, p=[0.7, 0.3]),
    'Anxiety Diagnosis': np.random.choice(['No', 'Yes'], size=300, p=[0.7, 0.3])
}

# Combine the original and new data
df_non_ocd = pd.DataFrame(non_ocd_data)
df_combined = pd.concat([df_dropped, df_non_ocd], ignore_index=True)

# Add 'has_OCD' column
df_combined['has_OCD'] = df_combined['Duration of Symptoms (months)'].apply(lambda x: 'Yes' if x > 10 else 'No')
df_combined.drop('Duration of Symptoms (months)', axis=1, inplace=True)

# Encoding categorical columns
categorical_cols = ['Gender', 'Previous Diagnoses', 'Obsession Type', 'Compulsion Type', 'Depression Diagnosis', 'Anxiety Diagnosis']
label_encoder = LabelEncoder()

for col in categorical_cols:
    df_combined[col] = label_encoder.fit_transform(df_combined[col].astype(str))

# Define the feature set (X) and the target variable (y)
X = df_combined.drop(columns=['has_OCD'])
y = df_combined['has_OCD'].apply(lambda x: 1 if x == 'Yes' else 0)  # Encode target as 1 for 'Yes', 0 for 'No'

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the Random Forest model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Save the trained model using joblib
joblib.dump(model, 'ocd_model.joblib')
print("Model has been saved!")
