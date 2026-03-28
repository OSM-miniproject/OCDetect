'use client';
import { useState } from "react";

import "../app/globals.css";

const fieldLabels = {
  age: "Age",
  durationOfSymptoms: "Duration of Symptoms",
  obsessionType: "Obsession Type",
  compulsionType: "Compulsion Type",
  depressionDiagnosis: "Depression Diagnosis",
  anxietyDiagnosis: "Anxiety Diagnosis",
};

const DisplayResult = ({ result, answers, storyId }) => {
  const [therapy, setTherapy] = useState(null); // State to store therapy data

  // Fetch therapy details when storyId changes
  useEffect(() => {
    if (storyId) {
      fetch(`https://osm-backend-deploy-1.onrender.com/api/stories/therapy-suggested/${storyId}`)
        .then((response) => response.json())
        .then((data) => {
          setTherapy(data);
        })
        .catch((error) => {
          console.error("Error fetching therapy data:", error);
        });
    }
  }, [storyId]);

  return (
    <div className="result-container flex justify-center items-center min-h-[calc(100vh-20px)] -mt-5">
      <div className="border-2 border-[#ff4b2b] rounded-lg p-12 max-w-md shadow-lg">
        <h2 className="text-4xl text-[#ff4b2b] font-bold mb-4 text-center">
          Your Prediction Result
        </h2>
        <p className="text-xl text-left">
          <strong>OCD Severity:</strong> {result.severity}
        </p>
        <p className="text-xl text-left">
          <strong>OCD Percentage:</strong> {result.percentage.toFixed(2)}%
        </p>
        <h3 className="text-lg mt-4 mb-2 text-left">Your Answers:</h3>
        <ul className="list-none text-left">
          {Object.keys(answers).map((field, index) => (
            <li key={index} className="mb-2 text-sm">
              <strong>{fieldLabels[field] || field}:</strong> {answers[field]}
            </li>
          ))}
        </ul>

        {/* Directly render Therapy details if available */}
        {therapy && (
          <div className="therapy-details mt-6">
            <h3 className="text-2xl text-left text-[#ff4b2b] mb-4">Suggested Therapy</h3>
            <h4 className="text-xl mb-4">{therapy.title}</h4>
            {therapy.chapters.map((chapter, index) => (
              <div key={index} className="mb-6">
                <h5 className="text-lg font-semibold">{chapter.title}</h5>
                <p className="text-sm">{chapter.exercise}</p>
                <p className="text-sm mt-2">{chapter.activity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayResult;
