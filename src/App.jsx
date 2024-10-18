import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from './store/slices/resultSlice';

function App() {
  const inputRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const dispatch = useDispatch()

  const toggleSwitch = () => {
    setEnabled(!enabled);
  };

  const startQuiz = () => {
    if (inputRef.current?.value){
      dispatch(setUserId (inputRef.current?.value))
    }
    // Logic for starting the quiz can be implemented here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
      <div className="w-full max-w-lg p-6 bg-gray-800 shadow-lg rounded-lg">
        {/* Toggle Button for Language Switch */}
        <div className="flex justify-end mb-4">
          <div
            onClick={toggleSwitch}
            className="relative w-16 h-8 bg-gray-500 rounded-full cursor-pointer transition-colors duration-300 flex items-center justify-between px-2"
          >
            {/* Language Labels */}
            <span className={`text-white transition-all duration-300 ${enabled ? 'opacity-100' : 'opacity-50'}`}>Hi</span>
            <span className={`text-white transition-all duration-300 ${enabled ? 'opacity-50' : 'opacity-100'}`}>En</span>

            {/* Switch */}
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                enabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Quiz Title */}
        <h1 className="text-4xl font-bold text-center mb-6">Quiz Application</h1>

        {/* Instructions based on selected language */}
        {enabled ? (
          <ol className="list-decimal list-inside mb-8 space-y-2 text-lg">
            <li>आपसे एक के बाद एक 5 प्रश्न पूछे जाएंगे।</li>
            <li>सही उत्तर के लिए 2 अंक दिए जाएंगे।</li>
            <li>प्रत्येक प्रश्न के चार विकल्प होंगे। आप केवल एक विकल्प चुन सकते हैं।</li>
            <li>आप क्विज़ समाप्त होने से पहले उत्तरों की समीक्षा कर सकते हैं और उन्हें बदल सकते हैं।</li>
            <li>क्विज़ के अंत में परिणाम घोषित किया जाएगा।</li>
          </ol>
        ) : (
          <ol className="list-decimal list-inside mb-8 space-y-2 text-lg">
            <li>You will be asked 5 questions one after another.</li>
            <li>2 points are awarded for the correct answer.</li>
            <li>Each question has four options. You can choose only one option.</li>
            <li>You can review and change answers before the quiz finishes.</li>
            <li>The result will be declared at the end of the quiz.</li>
          </ol>
        )}

        {/* Username Input */}
        <form id="form" className="mb-6">
          <input
            ref={inputRef}
            className="w-full p-3 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            type="text"
            placeholder="Username*"
          />
        </form>

        {/* Start Quiz Button */}
        <div className="text-center">
          <Link
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300"
            to={'quiz'}
            onClick={startQuiz}
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
