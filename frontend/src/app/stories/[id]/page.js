'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import DisplayResult from '../../../components/DisplayResult';
import '../../globals.css';

const StoryDetailPage = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [answers, setAnswers] = useState({
        age: 0,
        durationOfSymptoms: 0,
        obsessionType: '',
        compulsionType: '',
        depressionDiagnosis: 'No',
        anxietyDiagnosis: 'No',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [user, setUser] = useState(null);  // State to store the current user

    useEffect(() => {
        const fetchStory = async () => {
            try {
                console.log("Fetching story with ID:", id);
                const response = await fetch(`https://osm-backend-deploy-1.onrender.com/api/stories/${id}`);
                if (!response.ok) throw new Error('Failed to fetch story');
                const data = await response.json();
                setStory(data);
                console.log("Story data fetched:", data);
            } catch (error) {
                console.error('Error fetching story:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchStory();
    }, [id]);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleAnswerChange = (field, value) => {
        console.log(`Answer for ${field} changed to:`, value);  // Log every change in answer
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setResult(null);
        console.log("Submitting answers:", answers);  // Log the answers before submitting
    
        try {
            const inputData = {
                Age: parseInt(answers.age),
                'Duration of Symptoms (months)': parseInt(answers.durationOfSymptoms),
                'Obsession Type': answers.obsessionType,
                'Compulsion Type': answers.compulsionType,
                'Depression Diagnosis': answers.depressionDiagnosis === 'Yes' ? 1 : 0,
                'Anxiety Diagnosis': answers.anxietyDiagnosis === 'Yes' ? 1 : 0,
            };
            
            console.log("Input Data for Prediction:", inputData); // Log prediction data
    
            // First, make the prediction request
            const predictionResponse = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputData),
            });
    
            if (!predictionResponse.ok) {
                const predictionError = await predictionResponse.text();
                console.error("Prediction API Error:", predictionError); // Log the error from prediction API
                throw new Error('Failed to submit answers for prediction');
            }
    
            const predictionData = await predictionResponse.json();
            console.log("Prediction Data:", predictionData); // Log the prediction result
    
            setResult({
                severity: predictionData.predicted_severity,
                percentage: predictionData.predicted_percentage,
            });
    
            // Now, save the answers and prediction results to MongoDB
            const saveResponse = await fetch('https://osm-backend-deploy-1.onrender.com/api/resultstorage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: user?.email, // Use the user state here
                    result: {
                        severity: predictionData.predicted_severity,
                        percentage: predictionData.predicted_percentage,
                        answers: inputData,
                    },
                }),
            });
    
            if (!saveResponse.ok) {
                const saveError = await saveResponse.text();
                console.error("Save Response Error:", saveError); // Log error details from saving process
                throw new Error('Failed to save answers to database');
            }
    
            const saveData = await saveResponse.json();
            console.log('Answers saved:', saveData); // Log the success response
    
        } catch (error) {
            console.error('Error submitting answers:', error); // Log the error details
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const currentChapter = story?.chapters?.[currentChapterIndex];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (result) {
        return <DisplayResult result={result} answers={answers} storyId={id}/>;
    }

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">{story?.title}</h1>
            <div>
                <div className="mt-5">
                    <h3 className="text-lg font-semibold">{currentChapter?.chapterTitle}</h3>
                    <p>{currentChapter?.content}</p>
                    
                    <div className="mt-5">
                        <label>Age: </label>
                        <input
                            type="number"
                            onChange={(e) => handleAnswerChange('age', e.target.value)}
                            className="border p-2 rounded mb-3"
                        />

                        <label>Duration of Symptoms (months): </label>
                        <input
                            type="number"
                            onChange={(e) => handleAnswerChange('durationOfSymptoms', e.target.value)}
                            className="border p-2 rounded mb-3"
                        />

                        <h3 className="mt-5 text-lg font-bold">Questions</h3>
                        
                        <label>Obsession Type: </label>
                        <select
                            onChange={(e) => handleAnswerChange('obsessionType', e.target.value)}
                            className="border p-2 rounded mb-3"
                        >
                            <option value="">Select...</option>
                            <option value="Harm-related">Harm-related</option>
                            <option value="Contamination">Contamination</option>
                            <option value="Hoarding">Hoarding</option>
                            <option value="Symmetry">Symmetry</option>
                            <option value="Religious">Religious</option>
                        </select>

                        <label>Compulsion Type: </label>
                        <select
                            onChange={(e) => handleAnswerChange('compulsionType', e.target.value)}
                            className="border p-2 rounded mb-3"
                        >
                            <option value="">Select...</option>
                            <option value="Checking">Checking</option>
                            <option value="Washing">Washing</option>
                            <option value="Ordering">Ordering</option>
                            <option value="Praying">Praying</option>
                            <option value="Counting">Counting</option>
                        </select>

                        <label>Depression Diagnosis: </label>
                        <select
                            onChange={(e) => handleAnswerChange('depressionDiagnosis', e.target.value)}
                            className="border p-2 rounded mb-3"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>

                        <label>Anxiety Diagnosis: </label>
                        <select
                            onChange={(e) => handleAnswerChange('anxietyDiagnosis', e.target.value)}
                            className="border p-2 rounded mb-3"
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>

                        <div className="mt-5">
                            {currentChapter?.questions?.map((question, index) => (
                                <div key={index} className="mt-3">
                                    <label className="block font-semibold">{question.text}</label>
                                    {question.answerType === 'multiple-choice' ? (
                                        <select
                                            onChange={(e) =>
                                                handleAnswerChange(`question_${index}`, e.target.value)
                                            }
                                            className="border p-2 rounded"
                                        >
                                            {question.options.map((option, optIndex) => (
                                                <option key={optIndex} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        question.options.map((option, optIndex) => (
                                            <label key={optIndex} className="block">
                                                <input
                                                    type="radio"
                                                    name={`question_${index}`}
                                                    value={option}
                                                    onChange={() =>
                                                        handleAnswerChange(`question_${index}`, option)
                                                    }
                                                />
                                                {option}
                                            </label>
                                        ))
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleSubmit}
                            className={`mt-5 px-4 py-2 rounded ${isSubmitting ? 'bg-gray-500' : 'bg-blue-500'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetailPage;
