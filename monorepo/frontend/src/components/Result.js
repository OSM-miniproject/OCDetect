// src/components/Result.js
import '../app/globals.css';
const Result = ({ answers }) => {
    return (
        <div className="mt-5">
            <h2 className="text-xl font-semibold mb-3">Your Answers</h2>
            <div>
                {Object.keys(answers).length === 0 ? (
                    <p>No answers yet.</p>
                ) : (
                    Object.entries(answers).map(([questionId, answer]) => (
                        <div key={questionId} className="mb-2">
                            <strong>Question ID: {questionId}</strong>: {answer}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Result;
