import React, { useState } from 'react';
import '.styles//Form.css';

const questions = [
    'How would you rate your overall performance?',
    'How well do you meet your deadlines?',
    'How effectively do you communicate with your team?',
    // Add more questions here
];

const options = ['very bad', 'bad', 'neutral', 'good', 'very good'];

const Form: React.FC = () => {
    const [answers, setAnswers] = useState<string[]>([]);

    const handleAnswerChange = (questionIndex: number, answer: string) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        // Handle form submission here
        console.log(answers);
    };

    return (
        <div>
            <h1>Self-Evaluation Form</h1>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question}</p>
                        {options.map((option, optionIndex) => (
                            <label key={optionIndex}>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option}
                                    checked={answers[index] === option}
                                    onChange={() => handleAnswerChange(index, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;