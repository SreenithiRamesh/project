import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
  const navigate = useNavigate();

  // States for storing answers to questions
  const [answers, setAnswers] = useState({
    name: '',
    age: '',
    gender: '',
    hairType: '',
    goal: '',
    hairFall: '',
    hairCondition: '',
    hairQuality: '',
    strand: '',
    genetic: '',
    dandruff: '',
    illness: '',
    supplements: '',
    sleep: '',
    stress: '',
    constipation: '',
    acidity: '',
    energyLevel: '',
    medical: '',
  });

  // To track the progress through questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    { id: 1, question: 'Before we start, can we get your name?', type: 'text' },
    { id: 2, question: 'How old are you?', type: 'number' },
    { id: 3, question: 'What is your gender?', type: 'select', options: ['Male', 'Female', 'Other'] },
    { id: 4, question: 'How does your hair look like naturally?', type: 'select', options: ['Straight', 'Wavy', 'Curly', 'Coily'] },
    { id: 5, question: 'What is your most important goal currently?', type: 'select', options: ['Control hair fall', 'Improve hair quality', 'Regrow hair', 'Maintain current hair'] },
    { id: 6, question: 'Do you feel like you are facing hair fall more than usual?', type: 'select', options: ['Yes, extreme hair fall', 'Mild hair fall', 'No hair fall'] },
    { id: 7, question: 'Where do you stand on the female hair scale?', type: 'select', options: ['Hair thinning', 'Less volume on the sides', 'Medium widening', 'Advanced widening', 'Coin-size patches'] },
    { id: 8, question: 'Describe your hair quality', type: 'select', options: ['Good hair quality', 'Damaged hair'] },
    { id: 9, question: 'What does a single strand of your hair feel like?', type: 'select', options: ['Thin', 'Medium', 'Thick'] },
    { id: 10, question: 'Is hair loss a genetic issue in your family?', type: 'select', options: ['No'] },
    { id: 11, question: 'How long after hair wash does your hair start to feel oily?', type: 'select', options: ['Within 24 hours', '2-3 days', 'More than 4 days'] },
    { id: 12, question: 'Describe your dandruff', type: 'select', options: ['No', 'Mild that comes and goes', 'Heavy dandruff that sticks to the scalp', 'I have psoriasis', 'I have seborrheic dermatitis'] },
    { id: 13, question: 'Are you going through any of these stages?', type: 'select', options: ['None', 'Planning to get pregnant', 'Pregnancy', 'Post pregnancy', 'Baby is less than 2 years old'] },
    { id: 14, question: 'Have you experienced any of the below in the last 1 year?', type: 'select', options: ['None', 'Severe illness (e.g., dengue, malaria, typhoid, COVID)', 'Heavy weight loss or weight gain', 'Surgery or heavy medication'] },
    { id: 15, question: 'Are you going through any of the below?', type: 'select', options: ['None', 'Anemia', 'Low hemoglobin', 'Low thyroid', 'Hypothyroidism', 'PCOS', 'Other hormonal issues'] },
    { id: 16, question: 'Are you currently taking any supplements or vitamins for hair?', type: 'select', options: ['Yes', 'No'] },
    { id: 17, question: 'How well do you sleep?', type: 'select', options: ['Peacefully for 6-8 hours', 'Distributed sleep', 'I wake up at least once a night', 'Have difficulty falling asleep'] },
    { id: 18, question: 'Do you currently experience any of the following health conditions?', type: 'select', options: ['None', 'Sinus issue', 'Asthma'] },
    { id: 19, question: 'How stressed are you?', type: 'select', options: ['Not at all', 'Low', 'Moderate', 'High'] },
    { id: 20, question: 'Do you feel constipated?', type: 'select', options: ['No', 'Yes', 'I have IBS'] },
    { id: 21, question: 'Do you have acidity, bloating, gas or indigestion?', type: 'select', options: ['No', 'Yes'] },
    { id: 22, question: 'Describe your energy level', type: 'select', options: ['Always high', 'Low when I wake up but gradually increases', 'Very low in the afternoon', 'Low by evening or night', 'Always low'] },
    { id: 23, question: 'Are you suffering from any of these medical conditions?', type: 'select', options: ['None', 'High blood pressure', 'Low blood pressure', 'Liver cirrhosis', 'Deranged LFT', 'Blood disorders', 'Cardiovascular disorders'] },
  ];

  // Update answer based on input change
  const handleInputChange = (e, questionId) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  // Handle Next and Previous buttons
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Handle Submit and navigate to Image Upload Page
  const handleSubmit = () => {

    navigate('/upload'); // Navigate to Image Upload Page
  };

  // Progress Bar
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Get current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="relative min-h-screen bg-cover bg-center"
         style={{
           backgroundImage: "url('https://ik.imagekit.io/ytissbwn8/website-background-templates.jpg')",
         }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="container mx-auto p-6 relative z-10 flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96 mx-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Answer the Following Questions</h2>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-300 rounded mb-6">
            <div className="h-full bg-blue-600 rounded" style={{ width: `${progress}%` }}></div>
          </div>

          {/* Current Question */}
          <div className="mb-6">
            <p className="text-xl mb-2">{currentQuestion.question}</p>

            {/* Input or Select for each question */}
            {currentQuestion.type === 'text' && (
              <input
                type="text"
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleInputChange(e, currentQuestion.id)}
                className="w-full p-4 border-2 border-gray-300 rounded mb-4"
              />
            )}

            {currentQuestion.type === 'number' && (
              <input
                type="number"
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleInputChange(e, currentQuestion.id)}
                className="w-full p-4 border-2 border-gray-300 rounded mb-4"
              />
            )}

            {currentQuestion.type === 'select' && (
              <select
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleInputChange(e, currentQuestion.id)}
                className="w-full p-4 border-2 border-gray-300 rounded mb-4"
              >
                <option value="">Select...</option>
                {currentQuestion.options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg w-full mt-3 mx-4 disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full mt-3 disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Submit Button */}
          {currentQuestionIndex === questions.length - 1 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-blue-600 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700"
              >
                Submit & Get Suggestions
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
